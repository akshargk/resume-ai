const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({
    dest: "uploads/",
});

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("ResumeAI Backend is Running!");
});

app.post("/api/analyze", upload.single("resume"), (req, res) => {
    console.log(req.file);
    
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
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});