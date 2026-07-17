import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

function Navbar({ darkMode, setDarkMode }) {

    const location = useLocation();

    return (
        <nav className="
                    flex
                    items-center 
                    justify-between 
                    px-6 
                    py-5 
                    bg-stone-50 
                    dark:bg-stone-900 
                    transition-colors 
                    duration-300
            "
            >
            <Link to="/" className="flex items-center gap-3">
                <img
                    src={darkMode ? "/resumeai-logo-dark.png" : "/resumeAi-logo.png"}
                    alt="ResumeAI Logo"
                    className="h-20 w-auto"
                />
            </Link>

            <div className="hidden md:flex items-center gap-8 text-lg font-medium">

                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="
                        flex items-center justify-center
                        w-11 h-11
                        rounded-full
                        border border-stone-200
                        transition-all duration-200
                        hover:bg-stone-100
                        hover:border-stone-300
                        dark:border-stone-700
                        dark:hover:bg-stone-800
                        dark:hover:border-stone-500
                    ">
                    {darkMode ? (
                        <Sun
                            size={22}
                            className="text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.6)]"
                        />
                    ) : (
                        <Moon
                            size={22}
                            className="text-stone-700 dark:text-stone-200"
                        />
                    )}
                </button>

                <Link
                    to="/#features"
                    className="text-stone-700 dark:text-stone-200 hover:text-yellow-500 transition-colors"
                >
                    Features
                </Link>

                <Link
                    to="/#how-it-works"
                    className="text-stone-700 dark:text-stone-200 hover:text-yellow-500 transition-colors"
                >
                    How It Works
                </Link>

                {location.pathname !== "/upload" && (
                    <Link
                        to="/upload"
                        className="rounded-xl bg-yellow-400 px-5 py-2 hover:bg-yellow-500 transition"
                    >
                        Upload Resume
                    </Link>
                )}
            </div>

            <button className="md:hidden text-3xl text-stone-700 dark:text-stone-200">
                ☰
            </button>
        </nav>
    );
}

export default Navbar;