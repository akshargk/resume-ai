import {
    UploadCloud,
    CheckCircle,
} from "lucide-react";  

import { Link } from "react-router-dom";

function CTA() {
    return (
        <section
            className="
                    bg-stone-50
                    dark:bg-stone-900
                    transition-colors
                    duration-300
                    px-6
                    py-16
            "
        >
            <div
                className="
                    mx-auto
                    max-w-5xl
                "
            >
                {/* CTA Card */}
                <div
                    className="
                        mx-auto
                        max-w-4xl
                        rounded-3xl
                        border
                        border-stone-100
                        dark:border-stone-700
                        bg-white
                        dark:bg-stone-800
                        shadow-xl
                        px-6
                        md:px-10
                        py-12
                        md:py-16
                        text-center
                    "
                >

                    {/* CTA Heading */}
                    <h2 
                        className="
                                text-3xl
                                md:text-5xl
                                font-bold
                                text-stone-900
                                dark:text-white
                        "       
                    >
                        Ready to Improve Your Resume?
                    </h2>
                    
                    {/* CTA Description */}
                    <p
                        className="
                            mx-auto
                            mt-5
                            max-w-2xl
                            text-base
                            md:text-lg
                            leading-8
                            text-stone-500
                            dark:text-stone-300
                        "
                    >
                        Upload your resume today and receive AI-powered insights,
                        an ATS compatibility score, and personalized feedback in seconds.
                    </p>

                    <div 
                        className="
                            mt-10
                            flex
                            justify-center
                        "
                    >
                        {/* CTA Upload Button */}
                        <Link
                            to="/upload"
                            className="
                                w-full
                                sm:w-auto
                                rounded-xl
                                bg-yellow-400
                                px-10
                                md:px-14
                                py-4
                                text-base
                                md:text-lg
                                font-semibold
                                text-stone-900
                                shadow-md
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:scale-105
                                hover:bg-yellow-500
                                hover:shadow-lg
                                inline-flex
                                items-center
                                justify-center
                                gap-2
                            "
                        >
                            <UploadCloud className="h-5 w-5" />
                            Upload Resume
                        </Link>
                    </div>

                    <div 
                        className="
                            mt-8
                            flex
                            flex-wrap
                            justify-center
                            gap-6
                        "
                    >

                        <span
                            className="
                                flex
                                items-center
                                gap-2
                                text-sm
                                font-medium
                                text-stone-500
                                dark:text-stone-300
                            "
                        >
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            Secure Upload
                        </span>

                        <span
                            className="
                                flex
                                items-center
                                gap-2
                                text-sm
                                font-medium
                                text-stone-500
                                dark:text-stone-300
                            "
                        >
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            ATS Friendly
                        </span>

                        <span
                            className="
                                flex
                                items-center
                                gap-2
                                text-sm
                                font-medium
                                text-stone-500
                                dark:text-stone-300
                            "
                        >
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            AI-powered Analysis
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTA;