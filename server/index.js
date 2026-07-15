require("dotenv").config();

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const pdf = require("pdf-parse");
const fs = require("fs");

const { GoogleGenAI } = require("@google/genai");
const Groq = require("groq-sdk");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

const app = express();

app.use(cors());
app.use(express.json());

// Multer Configuration
const upload = multer({
    dest: "uploads/",
});

const PORT = 5000;

// Test Route
app.get("/", (req, res) => {
    res.send("ResumeAI Backend is Running!");
});

// Analyze Resume Route
app.post("/api/analyze", upload.single("resume"), async (req, res) => {
    try {
        console.log("========== Resume Uploaded ==========");

        console.log(req.file);

        const pdfBuffer = fs.readFileSync(req.file.path);

        const pdfData = await pdf(pdfBuffer);

        console.log("========== Resume Text ==========");
        console.log(pdfData.text);

        // Prompt for the AI
        const prompt = `
            You are an ATS Resume Analyzer.

            Analyze the following resume.

            Give your response in this exact JSON format:

            {
            "atsScore": 85,
            "strengths": [
                "...",
                "...",
                "..."
            ],
            "improvements": [
                "...",
                "...",
                "..."
            ]
            }

            Resume:

            ${pdfData.text}
            `;

            //Gemini Model
            // const result = await ai.models.generateContent({
            //     model: "gemini-3-flash-preview",
            //     contents: prompt,
            // });

            // console.log("========== Gemini Response ==========");
            // console.log(result.text);

            //Groq Model
            const completion = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
        });

        const aiResponse = completion.choices[0].message.content;

        console.log("========== Groq Response ==========");
        console.log(aiResponse);

        // Remove markdown code fences
        const cleanedResponse = aiResponse
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        // Convert JSON string to JavaScript object
        const analysis = JSON.parse(cleanedResponse);

        // Send proper JSON to frontend
        res.json(analysis);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to analyze resume."
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});