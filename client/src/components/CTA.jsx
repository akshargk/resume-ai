import {
    Upload,
    CheckCircle,
} from "lucide-react";  

function CTA() {
    return (
        <section
            className="
                    bg-stone-50
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
                        border-gray-100
                        bg-white
                        shadow-xl
                        px-10
                        py-16
                        text-center
                    "
                >

                    {/* CTA Heading */}
                    <h2 
                        className="
                                text-5xl
                                font-bold
                                text-stone-900
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
                        <button
                            type="button"
                            className="
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
                                hover:-translate-y-1
                                hover:scale-105
                                hover:bg-yellow-500
                                hover:shadow-lg
                                flex
                                items-center
                                gap-2
                            "
                        >   
                            <Upload className="h-5 w-5" />
                            Upload Resume
                        </button>
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