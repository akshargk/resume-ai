import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ResumeUpload from "../components/ResumeUpload";

function UploadPage({
    analysisResult,
    setAnalysisResult,
    darkMode,
    setDarkMode,
}) {
    return (
        <div className="bg-stone-50 dark:bg-stone-900 min-h-screen transition-colors duration-300">

            <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            <div className="px-6 lg:px-20">
                <Link
                    to="/"
                    className="
                        inline-flex
                        items-center
                        text-stone-600
                        dark:text-stone-300
                        hover:text-yellow-500
                        transition-colors
                        duration-300
                    "
                >
                    ← Back to Home
                </Link>
            </div>

            <ResumeUpload
                analysisResult={analysisResult}
                setAnalysisResult={setAnalysisResult}
            />

        </div>
    );
}

export default UploadPage;