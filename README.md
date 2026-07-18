# ResumeAI 🚀

ResumeAI is an AI-powered resume analysis web application that helps users evaluate and improve their resumes using Large Language Models (LLMs). Users can upload a PDF resume and receive an ATS score, compatibility analysis, strengths, improvement suggestions, detected technical skills, and a personalized cover letter.

## ✨ Features

- 📄 Upload PDF resumes
- 🤖 AI-powered resume analysis using Groq Llama 3.3 70B
- 📊 ATS Score (0–100)
- ✅ ATS Compatibility Score
- 📝 Professional Resume Summary
- 💪 Top Resume Strengths
- 📌 Personalized Improvement Suggestions
- 🛠 Technical Skills Detection
- 💌 AI-Generated Cover Letter
- ⚡ Fast and Responsive UI

---

## 🛠 Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router
- React Toastify

### Backend
- Node.js
- Express.js
- Multer
- pdf-parse
- Groq SDK
- CORS
- dotenv

---

## 📂 Project Structure

```
ResumeAI
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── uploads
│   ├── index.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/akshargk/resume-ai.git
```

### 2. Install Frontend Dependencies

```bash
cd client
npm install
```

### 3. Install Backend Dependencies

```bash
cd ../server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `server` folder.

```env
GROQ_API_KEY=your_groq_api_key
PORT=5000
```

---

## ▶️ Run the Application

### Start Backend

```bash
npm start
```

or

```bash
node index.js
```

### Start Frontend

```bash
npm run dev
```

---

## 📸 Application Workflow

1. Upload a PDF resume.
2. Resume text is extracted using **pdf-parse**.
3. The extracted text is sent to the **Groq Llama 3.3 70B** model.
4. The AI analyzes the resume and generates:
   - ATS Score
   - ATS Compatibility
   - Resume Summary
   - Strengths
   - Improvement Suggestions
   - Technical Skills
   - Personalized Cover Letter
5. Results are displayed in an easy-to-read interface.

---

## 🚀 Future Improvements

- Job Description Matching
- Resume Keyword Optimization
- Download Analysis as PDF
- Resume Comparison
- Multiple Resume Templates
- Authentication and User History

---

## 👨‍💻 Author

**Akshar G K**

- GitHub: https://github.com/akshargk
- LinkedIn: https://www.linkedin.com/in/akshar-g-k-47b72b3b1/

---

## 📄 License

This project is licensed under the MIT License.
