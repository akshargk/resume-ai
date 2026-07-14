const express = require("express");
const cors = require("cors");
const multer = require("multer");
const pdf = require("pdf-parse");
const fs = require("fs");

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

        res.json({
            message: "Resume received successfully!",
            atsScore: 87,
            strengths: [
                "Strong technical skills",
                "Good resume structure"
            ],
            improvements: [
                "Add more measurable achievements",
                "Improve keyword optimization"
            ]
        });

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