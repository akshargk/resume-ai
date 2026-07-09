import { useRef } from "react";
import { UploadCloud } from "lucide-react";

function ResumeUpload(){

        const fileInputRef = useRef(null);

        // Handling the upload button
        function handleBrowseClick(){
                fileInputRef.current.click();
        }

        return(
            <section
                    className="
                            bg-stone-50
                            px-6
                            py-20
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
                            "
                    >
                        Upload your resume in PDF format and let our AI analyze it 
                        for ATS compatibility, formatting, and personalized improvement suggestions.
                    </p>
                    
                    {/* Card Upload */}
                    <div
                        className="
                                mt-12
                                group
                                rounded-3xl
                                border-2
                                border-dashed
                                border-yellow-200
                                bg-white
                                shadow-lg
                                p-10
                                transition-all
                                duration-300
                                hover:border-yellow-400
                        "
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
                                <UploadCloud className="h-10 w-10 text-yellow-600" />
                            </div>

                            {/* Card Heading */}
                            <h3
                                className="
                                    text-2xl
                                    font-bold
                                    text-stone-900
                                "
                            >
                                Drag & Drop Your Resume
                            </h3>

                            {/* Card Description */}
                            <p
                                className="
                                    mt-3
                                    max-w-md
                                    leading-7
                                    text-stone-500
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
                                className="hidden"
                            />

                            {/* Card Browse Button */}
                            <button
                                type="button"
                                onClick={handleBrowseClick}
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
                                    flex
                                    items-center
                                    gap-2
                                "
                            >
                                Browse Files
                            </button>
                            
                            {/* Card Upload Size Info */}
                            <p
                                className="
                                    mt-8
                                    text-sm
                                    text-stone-500
                                "
                            >
                                Supported format: PDF • Max size: 5 MB
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
}

export default ResumeUpload;