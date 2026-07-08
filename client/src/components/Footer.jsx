import { 
    FaGithub, 
    FaLinkedin, 
    FaTwitter 
} from "react-icons/fa";

function Footer(){
    return(
        <footer
            className="
                    bg-stone-950
                    text-white
                    px-6
                    py-16
            "
        >
            <div
                className="
                        mx-auto
                        max-w-7xl
                "
            >
                {/* Grid Footer */}
                <div
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-4
                        gap-12
                    "
                >
                    <div>
                        <h3
                            className="
                            text-2xl
                            font-bold
                            text-white
                            "
                        >
                            ResumeAI
                        </h3>

                        <p
                            className="
                            mt-4
                            max-w-xs
                            leading-7
                            text-stone-400
                            "
                        >
                            Transform your resume with AI-powered analysis and
                            personalized career insights.
                        </p>
                    </div>
                    <div>
                            <h4 className="text-lg font-semibold text-white">
                                Quick Links
                            </h4>
                        
                            <ul className="mt-4 space-y-3 text-stone-400">

                                <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                                Features
                                </li>
                                <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                                How It Works
                                </li>
                                <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                                Upload Resume
                                </li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h4 className="
                                    text-lg
                                    font-semibold
                                    text-white
                                "
                            >
                                Resources
                            </h4>

                            <ul className="mt-4 space-y-3 text-stone-400">

                                {/* Privacy Policy */}
                                <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                                    Privacy Policy
                                </li>

                                {/* Terms of Service */}
                                <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                                    Terms of Service
                                </li>

                                {/* contact */}
                                <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                                    Contact
                                </li>
                            </ul>
                        </div>

                        {/* Follow Us */}
                        <div>
                            <h4 className="
                                    text-lg
                                    font-semibold 
                                    text-white
                            "
                            >
                                Follow Us
                            </h4>

                            <div className="
                                        mt-4
                                        flex 
                                        gap-5
                                        text-2xl
                                        items-center
                                "
                            >
                                <FaGithub
                                    className="
                                        cursor-pointer
                                        text-stone-400
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:text-yellow-400
                                    "
                                />

                                <FaLinkedin
                                    className="
                                        cursor-pointer
                                        text-stone-400
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:text-yellow-400
                                    "
                                />

                                <FaTwitter
                                    className="
                                        cursor-pointer
                                        text-stone-400
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:text-yellow-400
                                    "
                                />
                            </div>
                        </div>
                </div>
                {/* Bottom Footer */}
                        <div
                            className="
                                mt-12
                                border-t
                                border-stone-800
                                pt-8
                                flex
                                justify-center
                                text-sm
                                text-stone-500
                            "
                        >
                            © 2026 ResumeAI. All rights reserved.
                        </div>
            </div>
        </footer>
    )
}

export default Footer;