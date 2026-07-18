import {
    Sparkles,
    Search,
    TrendingUp,
    ChevronRight,
    UploadCloud
} from "lucide-react";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Hero({ analysisResult }) {
    return (
        <section
            className="
                flex
                flex-col
                lg:flex-row
                items-center
                justify-between
                gap-12
                px-6
                md:px-10
                lg:px-20
                py-16
                min-h-screen
                bg-stone-50
                dark:bg-stone-900
                text-stone-900
                dark:text-white
                transition-colors
                duration-300
            "
        >
            {/* Left Side */}
            <div
                className="
                    w-full
                    lg:w-1/2
                    text-center
                    lg:text-left
                "
            >
                <h1
                    className="
                        text-4xl
                        md:text-5xl
                        lg:text-6xl
                        font-bold
                        leading-tight
                    "
                >
                    Transform Your Resume Into Your{" "}
                    <span className="text-yellow-500">
                        Strongest
                    </span>{" "}
                    Asset.
                </h1>

                <p
                    className="
                        mt-6
                        text-base
                        md:text-lg
                        text-gray-600 
                        dark:text-stone-300
                    "
                >
                    Upload your resume and receive ATS scoring,
                    AI-powered feedback, and personalized suggestions.
                </p>

                <div
                    className="
                        mt-8
                        flex
                        flex-col
                        sm:flex-row
                        justify-center
                        lg:justify-start
                        gap-4
                    "
                >

                    <Link
                        to="/upload"
                        className="
                            bg-yellow-400
                            px-6
                            py-3
                            rounded-xl
                            font-medium
                            shadow-md
                            cursor-pointer
                            flex
                            items-center
                            gap-2
                            transition-all
                            duration-300
                            hover:bg-yellow-500
                            hover:-translate-y-1
                            hover:shadow-lg
                            w-fit
                        "
                    >
                        <UploadCloud className="w-5 h-5" />
                        Upload Resume
                    </Link>

                    <HashLink
                        smooth to="/#features"
                        className="
                            px-6
                            py-3
                            font-medium
                            text-teal-700
                            dark:text-teal-400
                            hover:text-teal-800
                            dark:hover:text-teal-300
                        "
                    >
                        Learn More ➜
                    </HashLink>
                </div>
            </div>

            {/* Right Side */}
            <div
                className="
                    w-full
                    lg:w-1/2
                "
            >
                <div
                    className="
                        bg-white
                        dark:bg-stone-800
                        shadow-xl
                        border
                        border-stone-100
                        dark:border-stone-700
                        rounded-3xl
                        p-8
                        w-full
                    "
                >
                    {/* Resume Overview */}
                    <h2
                        className="
                            text-xl
                            font-bold
                            text-gray-800 
                            dark:text-white
                        "
                    >
                        Resume Overview
                    </h2>

                    {/* Score Cards */}
                    <div
                        className="
                            flex
                            flex-col
                            md:flex-row
                            gap-6
                            mt-8
                        "
                    >
                        {/* Resume Score */}
                        <section
                            className="
                                w-full
                                md:w-1/2
                                rounded-2xl
                                border
                                border-stone-100 
                                dark:border-stone-700
                                bg-white 
                                dark:bg-stone-800
                                shadow-md
                                p-6
                            "
                        >
                            <p
                                className="
                                    text-sm
                                    font-medium
                                    text-gray-500 
                                    dark:text-stone-400
                                "
                            >
                                Resume Score
                            </p>

                            <p
                                className="
                                    mt-2
                                    text-4xl
                                    font-bold
                                    text-teal-700
                                "
                            >
                                {analysisResult?.atsScore ?? 91}/100
                            </p>

                            {/* Resume Score Progress Bar */}
                            <div
                                className="
                                    w-full
                                    h-2
                                    mt-3
                                    rounded-full
                                    bg-gray-200 
                                    dark:bg-stone-700
                                "
                            >
                                <div
                                    style={{
                                        width: `${analysisResult?.atsScore ?? 91}%`,
                                    }}
                                    className="
                                        h-full
                                        rounded-full
                                        bg-teal-700
                                    "
                                ></div>
                            </div>
                        </section>

                        {/* ATS Compatibility */}
                        <section
                            className="
                                w-full
                                md:w-1/2
                                rounded-2xl
                                border
                                border-stone-100 
                                dark:border-stone-700
                                bg-white 
                                dark:bg-stone-800
                                shadow-md
                                p-6
                            "
                        >
                            <p
                                className="
                                    text-sm
                                    font-medium
                                    text-gray-500 
                                    dark:text-stone-400
                                "
                            >
                                ATS Compatibility
                            </p>

                            <p
                                className="
                                    mt-2
                                    text-4xl
                                    font-bold
                                    text-teal-700
                                "
                            >
                                {analysisResult?.atsCompatibility ?? 94}%
                            </p>

                            {/* ATS Progress Bar */}
                            <div
                                className="
                                    w-full
                                    h-2
                                    mt-3
                                    rounded-full
                                    bg-gray-200 
                                    dark:bg-stone-700
                                "
                            >
                                <div
                                    style={{
                                        width: `${analysisResult?.atsCompatibility ?? 94}%`,
                                    }}
                                    className="
                                        h-full
                                        rounded-full
                                        bg-teal-700
                                    "
                                ></div>
                            </div>
                        </section>
                    </div>

                    {/* Top Suggestions */}
                    <section>
                        <h3
                            className="
                                mt-8
                                mb-4
                                text-lg
                                font-bold
                                text-gray-800 
                                dark:text-white
                            "
                        >
                            Top Suggestions
                        </h3>

                        <div
                            className="
                                rounded-2xl
                                border
                                border-stone-100
                                dark:border-stone-700
                                shadow-md
                                px-6
                                divide-y
                                divide-gray-100
                                dark:divide-stone-700
                            "
                        >
                            {/* 1st Suggestion */}
                            <div
                                className="
                                    flex
                                    flex-col
                                    sm:flex-row
                                    sm:items-center
                                    justify-between
                                    gap-4
                                    py-5
                                    hover:bg-gray-50 
                                    dark:hover:bg-stone-700
                                    transition
                                    duration-200
                                    cursor-pointer
                                "
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className="
                                            h-9
                                            w-9
                                            rounded-full
                                            bg-yellow-100
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >
                                        <Sparkles className="w-5 h-5 text-yellow-500" />
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            {analysisResult
                                                ? "Top Improvement"
                                                : "Improve your summary"}
                                        </h4>

                                        <p className="mt-1 text-sm text-gray-500 dark:text-stone-400">
                                            {analysisResult
                                                ? `${analysisResult.improvements[0].slice(0, 90)}...`
                                                : "Make your summary more impactful and tailored."}
                                        </p>
                                    </div>
                                </div>

                                <ChevronRight className="w-5 h-5 text-gray-400 dark:text-stone-500" />
                            </div>

                            {/* 2nd Suggestion */}
                            <div
                                className="
                                    flex
                                    flex-col
                                    sm:flex-row
                                    sm:items-center
                                    justify-between
                                    gap-4
                                    py-5
                                    hover:bg-gray-50 
                                    dark:hover:bg-stone-700
                                    transition
                                    duration-200
                                    cursor-pointer
                                "
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className="
                                            h-9
                                            w-9
                                            rounded-full
                                            bg-teal-50
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >
                                        <Search className="w-5 h-5 text-teal-500" />
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            {analysisResult
                                                ? "Keyword Optimization"
                                                : "Add more relevant keywords"}
                                        </h4>

                                        <p className="mt-1 text-sm text-gray-500 dark:text-stone-400">
                                            {analysisResult
                                                ? `${analysisResult.improvements[1].slice(0, 90)}...`
                                                : "Include industry-specific keywords to improve ATS matching."}
                                        </p>
                                    </div>
                                </div>

                                <ChevronRight className="w-5 h-5 text-gray-400 dark:text-stone-500" />
                            </div>

                            {/* 3rd Suggestion */}
                            <div
                                className="
                                    flex
                                    flex-col
                                    sm:flex-row
                                    sm:items-center
                                    justify-between
                                    gap-4
                                    py-5
                                    hover:bg-gray-50 
                                    dark:hover:bg-stone-700
                                    transition
                                    duration-200
                                    cursor-pointer
                                "
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className="
                                            h-9
                                            w-9
                                            rounded-full
                                            bg-teal-50
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >
                                        <TrendingUp className="w-5 h-5 text-teal-500" />
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            {analysisResult
                                                ? "Resume Enhancement"
                                                : "Quantify your achievements"}
                                        </h4>

                                        <p className="mt-1 text-sm text-gray-500 dark:text-stone-400">
                                        {analysisResult
                                            ? `${analysisResult.improvements[2].slice(0, 90)}...`
                                            : "Use numbers and measurable results to highlight your impact."}
                                    </p>
                                    </div>
                                </div>

                                <ChevronRight className="w-5 h-5 text-gray-400 dark:text-stone-500" />
                            </div>
                        </div>
                    </section>

                    {/* Skills Detected */}
                    <section className="mt-6">
                        <h3
                            className="
                                mb-4
                                text-lg
                                font-bold
                                text-gray-800 
                                dark:text-white
                                dark:text-white
                            "
                        >
                            Skills Detected
                        </h3>

                        <div
                            className="
                                rounded-2xl
                                border
                                border-stone-100 
                                dark:border-stone-700
                                bg-white 
                                dark:bg-stone-800
                                shadow-md
                                p-6
                            "
                        >
                            <div
                                className="
                                    flex
                                    flex-wrap
                                    gap-3
                                "
                            >
                                {analysisResult?.skills ? (
                                    analysisResult.skills.map((skill, index) => (
                                        <div
                                            key={index}
                                            className="
                                                px-3
                                                py-2
                                                rounded-full
                                                bg-teal-50
                                                text-teal-700
                                                dark:bg-teal-900/40
                                                dark:text-teal-300
                                                text-xs
                                                sm:text-sm
                                                font-medium
                                            "
                                        >
                                            {skill}
                                        </div>
                                    ))
                                ) : (
                                    <>
                                        <div className="
                                                    px-3
                                                    py-2
                                                    rounded-full
                                                    bg-teal-50
                                                    text-teal-700
                                                    dark:bg-teal-900/40
                                                    dark:text-teal-300
                                                    text-xs sm:text-sm
                                                    font-medium
                                            "
                                        >
                                            JavaScript
                                        </div>

                                        <div className="
                                                    px-3
                                                    py-2
                                                    rounded-full
                                                    bg-teal-50
                                                    text-teal-700
                                                    dark:bg-teal-900/40
                                                    dark:text-teal-300
                                                    text-xs sm:text-sm
                                                    font-medium
                                            "
                                        >
                                            React
                                        </div>

                                        <div className="
                                                    px-3
                                                    py-2
                                                    rounded-full
                                                    bg-teal-50
                                                    text-teal-700
                                                    dark:bg-teal-900/40
                                                    dark:text-teal-300
                                                    text-xs sm:text-sm
                                                    font-medium
                                            "
                                        >
                                            Node.js
                                        </div>

                                        <div className="
                                                    px-3
                                                    py-2
                                                    rounded-full
                                                    bg-teal-50
                                                    text-teal-700
                                                    dark:bg-teal-900/40
                                                    dark:text-teal-300
                                                    text-xs sm:text-sm
                                                    font-medium
                                            "
                                        >
                                            TypeScript
                                        </div>

                                        <div className="
                                                    px-3
                                                    py-2
                                                    rounded-full
                                                    bg-teal-50
                                                    text-teal-700
                                                    dark:bg-teal-900/40
                                                    dark:text-teal-300
                                                    text-xs sm:text-sm
                                                    font-medium
                                            "
                                        >
                                            SQL
                                        </div>

                                        <div className="
                                                    px-3
                                                    py-2
                                                    rounded-full
                                                    bg-teal-50
                                                    text-teal-700
                                                    dark:bg-teal-900/40
                                                    dark:text-teal-300
                                                    text-xs sm:text-sm
                                                    font-medium
                                            "
                                        >
                                            +8
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}

export default Hero;