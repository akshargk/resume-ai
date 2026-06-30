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
                     <span className="text-yellow-500">Strongest</span> {" "}Asset.
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
                            transition-all
                            duration-300
                            hover:bg-yellow-500
                            hover:-translate-y-1
                            hover:shadow-lg
                        "
                    >
                        ☁ Upload Resume
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

            <div
                className="
                    w-1/2
                "
            >
            </div>
        </section>
    );
}

export default Hero;