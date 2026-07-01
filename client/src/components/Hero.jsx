import {
    Sparkles,
    Search,
    TrendingUp,
    ChevronRight,
    UploadCloud
} from "lucide-react";

function Hero() {
    return (
        <section
            className="
                flex
                min-h-screen
                items-center
                justify-between
                px-20
            "
        >
            {/* Left Side */}
            <div
                className="
                    w-1/2
                "
            >
                <h1
                    className="
                        text-6xl
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
                        text-lg
                        text-gray-600
                    "
                >
                    Upload your resume and receive ATS scoring,
                    AI-powered feedback, and personalized suggestions.
                </p>

                <div
                    className="
                        mt-8
                        flex
                        gap-4
                    "
                >
                    <button
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
                        "
                    >
                        <UploadCloud className="w-5 h-5" />
                        Upload Resume
                    </button>

                    <a
                        href="#features"
                        className="
                            px-6
                            py-3
                            font-medium
                            text-teal-700
                            transition-colors
                            duration-300
                            hover:text-teal-800
                        "
                    >
                        Learn More ➜
                    </a>
                </div>
            </div>

            {/* Right Side */}
            <div
                className="
                    w-1/2
                "
            >
                <div
                    className="
                        bg-white
                        shadow-xl
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
                        "
                    >
                        Resume Overview
                    </h2>

                    {/* Score Cards */}
                    <div
                        className="
                            flex
                            gap-6
                            mt-8
                        "
                    >
                        {/* Resume Score */}
                        <section
                            className="
                                w-1/2
                                rounded-2xl
                                border
                                border-gray-100
                                shadow-md
                                p-6
                            "
                        >
                            <p
                                className="
                                    text-sm
                                    font-medium
                                    text-gray-500
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
                                91 / 100
                            </p>

                            {/* Progress Bar */}
                            <div
                                className="
                                    w-full
                                    h-2
                                    mt-3
                                    rounded-full
                                    bg-gray-200
                                "
                            >
                                <div
                                    className="
                                        h-full
                                        w-[91%]
                                        rounded-full
                                        bg-teal-700
                                    "
                                ></div>
                            </div>
                        </section>

                        {/* ATS Compatibility */}
                        <section
                            className="
                                w-1/2
                                rounded-2xl
                                border
                                border-gray-100
                                shadow-md
                                p-6
                            "
                        >
                            <p
                                className="
                                    text-sm
                                    font-medium
                                    text-gray-500
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
                                94%
                            </p>

                            {/* Progress Bar */}
                            <div
                                className="
                                    w-full
                                    h-2
                                    mt-3
                                    rounded-full
                                    bg-gray-200
                                "
                            >
                                <div
                                    className="
                                        h-full
                                        w-[94%]
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
                            "
                        >
                            Top Suggestions
                        </h3>

                        <div
                            className="
                                rounded-2xl
                                border
                                border-gray-100
                                shadow-md
                                px-6
                                divide-y
                                divide-gray-100
                            "
                        >
                            {/* 1st Suggestion */}
                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    py-5
                                    hover:bg-gray-50
                                    transition
                                    duration-200
                                    cursor-pointer
                                "
                            >
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-4
                                    "
                                >
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
                                        <Sparkles
                                            className="
                                                w-5
                                                h-5
                                                text-yellow-500
                                            "
                                        />
                                    </div>

                                    <div>
                                        <h4
                                            className="
                                                text-lg
                                                font-semibold
                                                text-gray-900
                                            "
                                        >
                                            Improve your summary
                                        </h4>

                                        <p
                                            className="
                                                mt-1
                                                text-sm
                                                text-gray-500
                                            "
                                        >
                                            Make your summary more impactful and
                                            tailored.
                                        </p>
                                    </div>
                                </div>

                                <ChevronRight
                                    className="
                                        w-5
                                        h-5
                                        text-gray-400
                                    "
                                />
                            </div>

                            {/* 2nd Suggestion */}
                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    py-5
                                    hover:bg-gray-50
                                    transition
                                    duration-200
                                    cursor-pointer
                                "
                            >
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-4
                                    "
                                >
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
                                        <Search
                                            className="
                                                w-5
                                                h-5
                                                text-teal-500
                                            "
                                        />
                                    </div>

                                    <div>
                                        <h4
                                            className="
                                                text-lg
                                                font-semibold
                                                text-gray-900
                                            "
                                        >
                                            Add more relevant keywords
                                        </h4>

                                        <p
                                            className="
                                                mt-1
                                                text-sm
                                                text-gray-500
                                            "
                                        >
                                            Include industry-specific keywords
                                            to improve ATS matching.
                                        </p>
                                    </div>
                                </div>

                                <ChevronRight
                                    className="
                                        w-5
                                        h-5
                                        text-gray-400
                                    "
                                />
                            </div>

                            {/* 3rd Suggestion */}
                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    py-5
                                    hover:bg-gray-50
                                    transition
                                    duration-200
                                    cursor-pointer
                                "
                            >
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-4
                                    "
                                >
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
                                        <TrendingUp
                                            className="
                                                w-5
                                                h-5
                                                text-teal-500
                                            "
                                        />
                                    </div>

                                    <div>
                                        <h4
                                            className="
                                                text-lg
                                                font-semibold
                                                text-gray-900
                                            "
                                        >
                                            Quantify your achievements
                                        </h4>

                                        <p
                                            className="
                                                mt-1
                                                text-sm
                                                text-gray-500
                                            "
                                        >
                                            Use numbers and measurable results
                                            to highlight your impact.
                                        </p>
                                    </div>
                                </div>

                                <ChevronRight
                                    className="
                                        w-5
                                        h-5
                                        text-gray-400
                                    "
                                />
                            </div>
                        </div>
                    </section>

                    {/* Skills Detected */}
                    <section
                        className="
                            mt-6
                        "
                    >
                        <h3
                            className="
                                mb-4
                                text-lg
                                font-bold
                                text-gray-800
                            "
                        >
                            Skills Detected
                        </h3>

                        <div
                            className="
                                rounded-2xl
                                border
                                border-gray-100
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
                                <div
                                    className="
                                        px-4
                                        py-2
                                        rounded-full
                                        bg-teal-50
                                        text-teal-700
                                        text-sm
                                        font-medium
                                    "
                                >
                                    JavaScript
                                </div>

                                <div
                                    className="
                                        px-4
                                        py-2
                                        rounded-full
                                        bg-teal-50
                                        text-teal-700
                                        text-sm
                                        font-medium
                                    "
                                >
                                    React
                                </div>

                                <div
                                    className="
                                        px-4
                                        py-2
                                        rounded-full
                                        bg-teal-50
                                        text-teal-700
                                        text-sm
                                        font-medium
                                    "
                                >
                                    Node.js
                                </div>

                                <div
                                    className="
                                        px-4
                                        py-2
                                        rounded-full
                                        bg-teal-50
                                        text-teal-700
                                        text-sm
                                        font-medium
                                    "
                                >
                                    TypeScript
                                </div>

                                <div
                                    className="
                                        px-4
                                        py-2
                                        rounded-full
                                        bg-teal-50
                                        text-teal-700
                                        text-sm
                                        font-medium
                                    "
                                >
                                    SQL
                                </div>

                                <div
                                    className="
                                        px-4
                                        py-2
                                        rounded-full
                                        bg-gray-100
                                        text-gray-600
                                        text-sm
                                        font-medium
                                    "
                                >
                                    +8
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}

export default Hero;