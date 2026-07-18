import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ResumeUpload from "../components/ResumeUpload";
import Footer from "../components/Footer";

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

            <div className="mx-auto max-w-7xl px-6 lg:px-20 pt-6 pb-11">
                <Link
                    to="/"
                    className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-medium
                        text-stone-600
                        dark:text-stone-300
                        hover:text-yellow-500
                        transition-colors
                    "
                >
                    ← Back to Home
                </Link>
            </div>

            <ResumeUpload
                analysisResult={analysisResult}
                setAnalysisResult={setAnalysisResult}
            />

            <Footer />
        </div>
    );
}

export default UploadPage;