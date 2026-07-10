import { useRef , useState } from "react";
import { UploadCloud } from "lucide-react";

function ResumeUpload(){

        const fileInputRef = useRef(null);

        const [selectedFile, setSelectedFile] = useState(null);
        const [error, setError] = useState("");
        const [isDragging, setIsDragging] = useState(false);

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

        /// Handling file selection
        function handleFileChange(event) {
            const file = event.target.files[0];

            validateAndSetFile(file);
        }


        function handleDragOver(event) {
            event.preventDefault();
            setIsDragging(true);
        }

        // Handling drag and drop
        function handleDrop(event) {
            event.preventDefault();
            setIsDragging(false);

            const file = event.dataTransfer.files[0];

            validateAndSetFile(file);
        }

        function handleDragLeave() {
            setIsDragging(false);
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
                                    ? "border-yellow-500 bg-yellow-50 scale-[1.02]"
                                    : "border-yellow-200 bg-white hover:border-yellow-400"
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
                                <p
                                    className="
                                        mt-6
                                        max-w-md
                                        break-all
                                        text-sm
                                        font-medium
                                        text-green-600
                                    "
                                >
                                    Selected File: {selectedFile.name}
                                </p>
                            )}

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