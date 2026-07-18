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

const PORT = process.env.PORT || 5000;

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
            You are an expert ATS Resume Analyzer and Career Coach.

            Analyze the following resume carefully.

            Return ONLY valid JSON in this exact format:

            {
                "atsScore": 0,
                "atsCompatibility": 0,
                "summary": "",
                "strengths": [],
                "improvements": [],
                "skills": [],
                "coverLetter": ""
            }

            Rules:

            1. Give an ATS score between 0 and 100.

            2. Return an ATS Compatibility score between 0 and 100.
            - This score should estimate how well the resume would perform in a modern Applicant Tracking System.
            - Consider formatting, keywords, readability, and section organization.

            3. Write a professional summary (2-3 sentences, 40-70 words).
            - Explain the overall quality of the resume.
            - Mention what stands out.
            - Mention the biggest area for improvement.

            4. Return EXACTLY 3 strengths.
            - Each strength should be 20-40 words.
            - Explain WHY it is a strength.
            - Refer specifically to the uploaded resume.
            - Avoid generic statements.

            5. Return EXACTLY 3 improvements.
            - Each improvement should be 20-40 words.
            - Explain WHY it needs improvement.
            - Give practical suggestions.
            - Be constructive and professional.

            6. Return EXACTLY 6 technical skills detected from the resume.
            - Only include skills that actually appear in the resume.
            - Do NOT invent new skills.
            - Return them as an array of strings.
            - Prioritize programming languages, frameworks, tools, databases, and technologies.

            7. Generate a professional cover letter.
            - Length: 180–250 words.
            - Address it as "Dear Hiring Manager,".
            - Tailor it specifically to the uploaded resume.
            - Mention the candidate's strongest technical skills.
            - Mention at least 2 relevant projects from the resume.
            - Explain why the candidate is a good fit for a Software Engineering or Internship role.
            - Do NOT invent work experience, certifications, or achievements.
            - Maintain a professional and confident tone.
            - End with:
            Sincerely,
            followed by the candidate's name if available.

            8. Consider:
            - ATS keyword optimization
            - Resume formatting
            - Technical skills
            - Projects
            - Experience
            - Education
            - Achievements
            - Overall readability
            - Industry readiness

            9. Never invent information that is not present in the resume.

            10. Return ONLY valid JSON.
            Do NOT include markdown.
            Do NOT include \`\`\`.
            Do NOT write anything outside the JSON object.

            Resume:

            ${pdfData.text}
        `;

        // Gemini Model
        // const result = await ai.models.generateContent({
        //     model: "gemini-3-flash-preview",
        //     contents: prompt,
        // });

        // console.log("========== Gemini Response ==========");
        // console.log(result.text);

        // Groq Model
        const completion = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
            temperature: 0.3,
        });

        const aiResponse = completion.choices[0].message.content;

        console.log("========== Raw Groq Response ==========");
        console.log(aiResponse);

        // Remove markdown code fences if present
        const cleanedResponse = aiResponse
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        console.log("========== Cleaned Response ==========");
        console.log(cleanedResponse);

        let analysis;

        try {
            // Convert JSON string to JavaScript object
            analysis = JSON.parse(cleanedResponse);
        } catch (err) {
            console.error("========== JSON Parse Error ==========");
            console.error(err);

            return res.status(500).json({
                message: "AI returned invalid JSON.",
            });
        }

        // Delete uploaded PDF after analysis
        fs.unlinkSync(req.file.path);

        console.log("Sending analysis to frontend:");
        console.log(analysis);

        // Send proper JSON to frontend
        res.json(analysis);

    } catch (error) {
        console.error("========== Server Error ==========");
        console.error(error);

        // Delete uploaded file if something goes wrong
        if (req.file && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }

        res.status(500).json({
            message: "Failed to analyze resume."
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});