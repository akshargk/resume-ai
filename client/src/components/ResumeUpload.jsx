import { useRef , useState, useEffect } from "react";

import { 
    UploadCloud,
    Copy,
    Download,
    RefreshCw,
    FileText,
} from "lucide-react";

import jsPDF from "jspdf";
import toast from "react-hot-toast";

function ResumeUpload({
    analysisResult,
    setAnalysisResult,
}) {

        const fileInputRef = useRef(null);

        const [selectedFile, setSelectedFile] = useState(null);
        const [error, setError] = useState("");
        const [isDragging, setIsDragging] = useState(false);
        const [loading, setLoading] = useState(false);
        const [copied, setCopied] = useState(false);
        const [currentStep, setCurrentStep] = useState(0);

        const loadingSteps = [
            "Extracting resume text...",
            "Evaluating ATS compatibility...",
            "Detecting technical skills...",
            "Generating personalized feedback...",
            "Writing your cover letter..."
        ];

        const MAX_FILE_SIZE = 5 * 1024 * 1024;

        // Handling the upload button
        function handleBrowseClick(){
                fileInputRef.current.click();
        }

        // Validate file and save it
        function validateAndSetFile(file) {

            if (!file) {
                return;
            }

            if (file.type !== "application/pdf") {
                setSelectedFile(null);
                setError("Please upload a PDF file.");
                return;
            }

            if (file.size > MAX_FILE_SIZE) {
                setSelectedFile(null);
                setError("File size exceeds 5 MB.");
                return;
            }

            setError("");
            setSelectedFile(file);
        }

        // Handling file selection
        function handleFileChange(event) {
            const file = event.target.files[0];

            validateAndSetFile(file);
        }

        // Handling drag
        function handleDragOver(event) {
            event.preventDefault();
            setIsDragging(true);
        }

        // Handling drop
        function handleDrop(event) {
            event.preventDefault();
            setIsDragging(false);

            const file = event.dataTransfer.files[0];

            validateAndSetFile(file);
        }

        function handleDragLeave() {
            setIsDragging(false);
        }

        // Handling Analyze
        async function handleAnalyzeResume() {

            if (!selectedFile) {
                setError("Please select a resume first.");
                return;
            }

            setError("");
            setAnalysisResult(null);
            setLoading(true);

            try {

                const formData = new FormData();
                formData.append("resume", selectedFile);

                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/analyze`,
                    {
                        method: "POST",
                        body: formData,
                    }
                );
                
                if (!response.ok) {
                    throw new Error("Failed to analyze resume.");
                }

                const data = await response.json();

                setAnalysisResult(data);

                toast.success("Resume analyzed successfully!");

            } catch (error) {
                console.error(error);

                setError("Something went wrong while analyzing your resume.");

                toast.error("Failed to analyze resume.");
            } finally {
                setLoading(false);
            }
        }

        //Handling Download of Coverletter
        const downloadCoverLetter = () => {
            const element = document.createElement("a");

            const file = new Blob([analysisResult.coverLetter], {
                type: "text/plain",
            });

            element.href = URL.createObjectURL(file);
            element.download = selectedFile.name.replace(".pdf", "") + "_Cover_Letter.txt";

            document.body.appendChild(element);
            element.click();

            document.body.removeChild(element);

            URL.revokeObjectURL(element.href);

            toast.success("Cover letter downloaded!");
        };

        // Handling Copying
        const handleCopy = async () => {
            try {
                await navigator.clipboard.writeText(analysisResult.coverLetter);

                setCopied(true);

                toast.success("Cover letter copied!");

                setTimeout(() => {
                    setCopied(false);
                }, 2000);
            } catch (error) {
                console.error(error);
            }
        };

        //Handling Downloading of report
        const downloadAnalysisReport = () => {

            if (!analysisResult) return;

            const doc = new jsPDF();

            let y = 20;

            doc.setFontSize(22);
            doc.text("ResumeAI Analysis Report", 20, y);

            y += 15;

            doc.setFontSize(16);
            doc.text(`ATS Score: ${analysisResult.atsScore}/100`, 20, y);

            y += 10;

            doc.text(
                `ATS Compatibility: ${analysisResult.atsCompatibility}%`,
                20,
                y
            );

            y += 15;

            doc.setFontSize(18);
            doc.text("Summary", 20, y);

            y += 8;

            doc.setFontSize(12);

            const summary = doc.splitTextToSize(
                analysisResult.summary,
                170
            );

            doc.text(summary, 20, y);

            y += summary.length * 7 + 8;

            doc.setFontSize(18);
            doc.text("Strengths", 20, y);

            y += 8;

            doc.setFontSize(12);

            analysisResult.strengths.forEach((item) => {
                const lines = doc.splitTextToSize(`• ${item}`, 170);
                doc.text(lines, 20, y);
                y += lines.length * 7 + 4;
            });

            doc.setFontSize(18);
            doc.text("Improvements", 20, y);

            y += 8;

            doc.setFontSize(12);

            analysisResult.improvements.forEach((item) => {
                const lines = doc.splitTextToSize(`• ${item}`, 170);
                doc.text(lines, 20, y);
                y += lines.length * 7 + 4;
            });

            doc.setFontSize(18);
            doc.text("Skills", 20, y);

            y += 8;

            doc.setFontSize(12);

            doc.text(
                analysisResult.skills.join(", "),
                20,
                y
            );

            doc.save("ResumeAI_Report.pdf");

            toast.success("Analysis report downloaded!");
        };

        // Handling loading info
        useEffect(() => {

            if (!loading) return;

            setCurrentStep(0);

            const interval = setInterval(() => {

                setCurrentStep((prev) => {

                    if (prev < loadingSteps.length - 1) {
                        return prev + 1;
                    }

                    return prev;

                });

            }, 1000);

            return () => clearInterval(interval);

        }, [loading]);

        return(
            <section
                    id="upload"
                    className="
                    bg-stone-50
                    dark:bg-stone-900
                    px-6
                    py-20
                    transition-colors
                    duration-300
                "
            >
                <div 
                    className="
                            mx-auto
                            max-w-3xl
                    "
                >

                    {/* Heading */}
                    <h2
                        className="
                                text-center 
                                text-4xl 
                                font-bold 
                                text-stone-900
                                dark:text-white
                        "
                    >
                        Upload Your Resume
                    </h2>
                    
                    {/* Description */}
                    <p
                        className="
                            mt-4
                            max-w-2xl
                            mx-auto
                            text-center
                            leading-7
                            text-stone-500
                            dark:text-stone-400
                            "
                    >
                        Upload your resume in PDF format and let our AI analyze it 
                        for ATS compatibility, formatting, and personalized improvement suggestions.
                    </p>
                    
                    {/* Card Upload */}
                    <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`
                            mt-12
                            group
                            rounded-3xl
                            border-2
                            border-dashed
                            shadow-lg
                            p-10
                            transition-all
                            duration-300
                            ${
                                isDragging
                                    ? "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 scale-[1.02]"
                                    : "border-yellow-200 bg-white dark:bg-stone-800 dark:border-stone-700 hover:border-yellow-400 dark:hover:bg-stone-700"
                            }
                        `}
                    >
                        <div 
                            className="
                                    flex
                                    flex-col
                                    items-center
                                    text-center
                            "
                        >

                            {/* Upload Cloud Icon */}
                            <div
                                className="
                                        h-16
                                        w-16
                                        rounded-full
                                        bg-yellow-100
                                        flex
                                        items-center
                                        justify-center
                                        mb-6
                                        transition-transform
                                        duration-300
                                        group-hover:scale-110
                                "
                            >
                                <UploadCloud
                                className={`h-10 w-10 ${
                                    isDragging ? "text-yellow-700" : "text-yellow-600"
                                }`}
                            />
                            </div>

                            {/* Card Heading */}
                            <h3
                                className="
                                    text-2xl
                                    font-bold
                                    text-stone-900 
                                    dark:text-white
                                "
                            >
                                {isDragging ? "Drop your PDF here" : "Drag & Drop Your Resume"}
                            </h3>

                            {/* Card Description */}
                            <p
                                className="
                                    mt-3
                                    max-w-md
                                    leading-7
                                    text-stone-500 
                                    dark:text-stone-400
                                "
                            >
                                Drag and drop your PDF here,
                                or click below to browse. 
                            </p>

                            {/* Hidden File Input */}
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="application/pdf"
                                onChange={handleFileChange}
                                className="hidden"
                            />

                            {/* Card Browse Button */}
                            <button
                                type="button"
                                onClick={handleBrowseClick}
                                disabled={loading}
                                className="
                                    mt-8
                                    rounded-xl
                                    bg-yellow-400
                                    px-14
                                    py-4
                                    text-lg
                                    font-semibold
                                    text-stone-900
                                    shadow-md
                                    transition-all
                                    duration-300
                                    hover:scale-105
                                    hover:bg-yellow-500
                                    hover:shadow-lg
                                    disabled:hover:scale-100
                                    disabled:hover:bg-yellow-400
                                    disabled:hover:shadow-md
                                    flex
                                    items-center
                                    gap-2
                                "
                            >
                                Browse Files
                            </button>

                            {error && (
                                <p
                                    className="
                                        mt-4
                                        text-sm
                                        font-medium
                                        text-red-600
                                    "
                                >
                                    {error}
                                </p>
                            )}
                            
                            {selectedFile && (
                                    <>
                                        <p
                                            className="
                                                mt-6
                                                text-sm
                                                font-medium
                                                text-green-600
                                            "
                                        >
                                            📄 Selected File: {selectedFile.name}
                                        </p>

                                        <button
                                            type="button"
                                            onClick={handleAnalyzeResume}
                                            disabled={loading}
                                            className="
                                                mt-6
                                                rounded-xl
                                                bg-stone-900
                                                px-8
                                                py-3
                                                text-white
                                                font-semibold
                                                transition-all
                                                duration-300
                                                hover:bg-stone-800
                                                disabled:opacity-50
                                                disabled:cursor-not-allowed
                                            "
                                        >
                                            {loading ? "Analyzing Resume..." : "Analyze Resume"}
                                        </button>

                                        {loading && (
                                            <div className="mt-8 text-center">

                                                <div className="flex items-center justify-center gap-3">

                                                    <div className="animate-spin rounded-full h-6 w-6 border-4 border-yellow-400 border-t-transparent"></div>

                                                    <p className="text-lg font-semibold text-gray-700">
                                                        AI is analyzing your resume...
                                                    </p>

                                                </div>

                                                <div className="mt-5 space-y-2 text-left max-w-sm mx-auto">

                                                    {loadingSteps
                                                        .slice(0, currentStep + 1)
                                                        .map((step, index) => (
                                                            <p
                                                                key={index}
                                                                className="text-green-600"
                                                            >
                                                                ✓ {step}
                                                            </p>
                                                        ))} 
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}

                                {/* Card Upload Size Info */}
                                <p
                                    className="
                                        mt-8
                                        text-sm
                                        text-stone-500 
                                        dark:text-stone-400
                                    "
                                >
                                    Supported format: PDF • Max size: 5 MB
                                </p>

                                {analysisResult && (
                                    <div
                                        className="
                                            mt-20
                                            bg-white
                                            dark:bg-stone-800
                                            rounded-3xl
                                            border
                                            border-gray-200
                                            dark:border-stone-700
                                            shadow-lg
                                            p-8
                                            transition-colors
                                            duration-300
                                        "
                                    >

                                        {/* Header */}
                                        <div className="flex justify-between items-center mb-6">

                                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                                                Resume Analysis
                                            </h2>

                                            <div className="bg-green-100 rounded-xl px-6 py-4 shadow-sm text-center w-44">
                                                <p className="text-xs uppercase tracking-wider text-green-700">
                                                    ATS SCORE
                                                </p>

                                                <h3 className="text-4xl font-bold text-green-700">
                                                    {analysisResult.atsScore}/100
                                                </h3>
                                            </div>

                                        </div>

                                        {/* Summary */}
                                        <div 
                                            className="
                                                mb-8 
                                                bg-stone-100
                                                dark:bg-stone-700
                                                border
                                                border-stone-200
                                                dark:border-stone-600
                                                rounded-xl p-5
                                            "
                                        >
                                            <p className="text-gray-700 dark:text-stone-200 leading-8 text-center">
                                                {analysisResult.summary}
                                            </p>
                                        </div>

                                        {/* Strengths & Improvements */}
                                        <div
                                            className="
                                                mt-8
                                                grid
                                                grid-cols-1
                                                md:grid-cols-2
                                                gap-8
                                                items-start
                                            "
                                        >

                                            {/* Strengths */}
                                            <div
                                                className="
                                                    rounded-2xl
                                                    border-l-4
                                                    border-green-500
                                                    bg-green-50
                                                    dark:bg-green-950/40
                                                    dark:border-green-700
                                                    p-6
                                                    h-full
                                                    transition-colors
                                                    duration-300
                                                "
                                            >
                                                <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 flex items-center gap-2">
                                                    ✅ Strengths
                                                </h3>

                                                <p className="text-sm text-gray-500 dark:text-stone-400 mt-1">
                                                    What your resume does well.
                                                </p>

                                                <ul className="mt-5 space-y-5 list-disc list-inside text-gray-700 dark:text-stone-200 leading-7">
                                                    {analysisResult.strengths.map((strength, index) => (
                                                        <li key={index}>
                                                            {strength}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                        {/* Improvements */}
                                        <div
                                            className="
                                                rounded-2xl
                                                border-l-4
                                                border-red-500
                                                bg-red-50
                                                dark:bg-red-950/40
                                                dark:border-red-700
                                                p-6
                                                h-full
                                                transition-colors
                                                duration-300
                                            "
                                        >
                                            <h3 className="text-2xl font-bold text-red-700 dark:text-red-400 flex items-center gap-2">
                                                ⚠️ Improvements
                                            </h3>

                                            <p className="text-sm text-gray-500 dark:text-stone-400 mt-1">
                                                Areas that can improve your ATS score.
                                            </p>

                                            <ul className="mt-5 space-y-5 list-disc list-inside text-gray-700 dark:text-stone-200 leading-7">
                                                {analysisResult.improvements.map((improvement, index) => (
                                                    <li key={index}>
                                                        {improvement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                        {/* Cover Letter */}
                                        <div 
                                            className="
                                                mt-10 
                                                bg-white
                                                dark:bg-stone-800
                                                border
                                                border-stone-200
                                                dark:border-stone-700
                                                rounded-3xl p-8 shadow-sm
                                            "
                                        >

                                            <h2 className="text-3xl font-bold dark:text-white font-bold mb-6">
                                                Cover Letter
                                            </h2>

                                            <div
                                                className="
                                                    bg-stone-50
                                                    dark:bg-stone-900
                                                    border
                                                    border-stone-200
                                                    dark:border-stone-700
                                                    rounded-2xl
                                                    p-6
                                                    leading-8
                                                    whitespace-pre-line
                                                    text-stone-700
                                                    dark:text-stone-200
                                                    transition-colors
                                                    duration-300
                                                "
                                            >
                                                {analysisResult.coverLetter}
                                            </div>

                                            <div className="flex gap-4 mt-6">

                                                <button
                                                    onClick={handleCopy}
                                                    className="
                                                        flex items-center gap-2
                                                        bg-black text-white
                                                        px-5 py-3
                                                        rounded-xl
                                                        hover:bg-gray-800
                                                        transition
                                                    "
                                                >
                                                    <Copy size={18} />
                                                    {copied ? "✓ Copied!" : "Copy"}
                                                </button>

                                                <button
                                                    onClick={downloadCoverLetter}
                                                    className="
                                                        flex items-center gap-2
                                                        bg-green-600 text-white
                                                        px-5 py-3
                                                        rounded-xl
                                                        hover:bg-green-700
                                                        transition
                                                    "
                                                >
                                                    <Download size={18} />
                                                    Download
                                                </button>
                                                
                                            </div>

                                            <button
                                                onClick={() => {
                                                    setSelectedFile(null);
                                                    setAnalysisResult(null);
                                                    setError("");
                                                    setCopied(false);
                                                    fileInputRef.current.value = "";
                                                    fileInputRef.current.click();
                                                }}
                                                className="
                                                    mt-8
                                                    w-full
                                                    flex items-center justify-center gap-2
                                                    rounded-xl
                                                    bg-yellow-400
                                                    px-6 py-3
                                                    font-semibold
                                                    text-stone-900
                                                    transition
                                                    hover:bg-yellow-500
                                                "
                                            >
                                                <RefreshCw size={18} />
                                                Analyze Another Resume
                                            </button>
                                        </div>
                                        <button
                                            onClick={downloadAnalysisReport}
                                            className="
                                                mt-4
                                                w-full
                                                flex items-center justify-center gap-2
                                                rounded-xl
                                                bg-stone-900
                                                px-6 py-3
                                                font-semibold
                                                text-white
                                                transition
                                                hover:bg-stone-800
                                            "
                                        >  
                                            <FileText size={18} />
                                            Download Analysis Report
                                        </button>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </section>
        )
}

export default ResumeUpload;