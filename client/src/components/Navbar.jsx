import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
    X,
    Home,
    Star,
    Upload,
    Moon,
    Sun,
    Sparkles,
    ChevronRight,
} from "lucide-react";

function Navbar({ darkMode, setDarkMode }) {

    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

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

                <HashLink
                    smooth to="/#features"
                    className="text-stone-700 dark:text-stone-200 hover:text-yellow-500 transition-colors"
                >
                    Features
                </HashLink>

                <HashLink
                    smooth to="/#how-it-works"
                    className="text-stone-700 dark:text-stone-200 hover:text-yellow-500 transition-colors"
                >
                    How It Works
                </HashLink>

                {location.pathname !== "/upload" && (
                    <Link
                        to="/upload"
                        className="rounded-xl bg-yellow-400 px-5 py-2 hover:bg-yellow-500 transition"
                    >
                        Upload Resume
                    </Link>
                )}
            </div>

            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-3xl text-stone-700 dark:text-stone-200"
            >
                ☰
            </button>
            {menuOpen && (
                <>
                    {/* Background Overlay */}
                    <div
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                        onClick={() => setMenuOpen(false)}
                    />

                    {/* Sidebar */}
                    <div
                        className="
                            fixed
                            top-0
                            left-0
                            h-screen
                            overflow-y-auto
                            w-[82%]
                            max-w-sm
                            bg-white
                            dark:bg-stone-900
                            rounded-r-3xl
                            shadow-2xl
                            z-50
                            flex
                            flex-col
                            px-6
                            py-7
                            animate-[slideIn_.25s_ease]
                        "
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between">
                            <div>
                                <img
                                    src={
                                        darkMode
                                            ? "/resumeai-logo-dark.png"
                                            : "/resumeAi-logo.png"
                                    }
                                    className="h-12"
                                    alt=""
                                />
                            </div>

                            <button
                                onClick={() => setMenuOpen(false)}
                                className="text-stone-800 dark:text-white"
                            >
                                <X size={30} />
                            </button>
                        </div>

                        {/* Navigation */}
                        <div className="mt-8 space-y-2">

                            <Link
                                to="/"
                                onClick={() => setMenuOpen(false)}
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    rounded-2xl
                                    bg-yellow-50
                                    dark:bg-yellow-500/15
                                    px-4
                                    py-4
                                    text-stone-900
                                    dark:text-white
                                "
                            >

                                <div className="flex items-center gap-3">
                                    <Home size={22} className="text-yellow-500" />
                                    Home
                                </div>

                                <ChevronRight size={18} />
                            </Link>

                            <HashLink
                                smooth
                                to="/#features"
                                onClick={() => setMenuOpen(false)}
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    px-4
                                    py-4
                                    rounded-xl
                                    text-stone-700
                                    dark:text-stone-200
                                    hover:bg-stone-100
                                    dark:hover:bg-stone-800
                                    transition
                                "
                            >
                                <div className="flex items-center gap-3">
                                    <Star size={22} />
                                    Features
                                </div>

                                <ChevronRight size={18} />
                            </HashLink>

                            <HashLink
                                smooth
                                to="/#how-it-works"
                                onClick={() => setMenuOpen(false)}
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    px-4
                                    py-4
                                    rounded-xl
                                    text-stone-700
                                    dark:text-stone-200
                                    hover:bg-stone-100
                                    dark:hover:bg-stone-800
                                    transition
                                "
                            >
                                <div className="flex items-center gap-3">
                                    <Sparkles size={22} />
                                    How It Works
                                </div>

                                <ChevronRight size={18} />
                            </HashLink>

                            {location.pathname !== "/upload" && (
                                <Link
                                    to="/upload"
                                    onClick={() => setMenuOpen(false)}
                                    className="
                                            flex
                                            items-center
                                            justify-between
                                            px-4
                                            py-4
                                            rounded-xl
                                            text-stone-700
                                            dark:text-stone-200
                                            hover:bg-stone-100
                                            dark:hover:bg-stone-800
                                            transition
                                        "
                                >
                                    <div className="flex items-center gap-3">
                                        <Upload size={22} />
                                        Upload Resume
                                    </div>

                                    <ChevronRight size={18} />
                                </Link>
                            )}
                        </div>

                        {/* Divider */}
                        <div className="mt-8 border-t border-stone-200 dark:border-stone-700 pt-6">

                            <p className="text-xs uppercase text-stone-400 mb-4">
                                Preferences
                            </p>

                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="
                                    w-full
                                    flex
                                    items-center
                                    justify-between
                                    text-stone-800
                                    dark:text-white
                                "
                            >
                                <div className="flex items-center gap-3">
                                    {darkMode ? (
                                        <Sun size={22} className="text-yellow-400" />
                                    ) : (
                                        <Moon size={22} />
                                    )}

                                    Dark Mode
                                </div>

                                <div
                                    className={`
                                        w-12
                                        h-7
                                        rounded-full
                                        flex
                                        items-center
                                        transition-colors
                                        duration-300
                                        px-0.5
                                        ${darkMode ? "bg-yellow-400 justify-end" : "bg-stone-300 justify-start"}
                                    `}
                                >
                                    <div
                                        className="
                                            h-6
                                            w-6
                                            rounded-full
                                            bg-white
                                            shadow-sm
                                            transition-all
                                            duration-300
                                        "
                                    />
                                </div>
                            </button>
                        </div>

                        {/* Bottom Card */}
                        <div
                            className="
                                mt-8
                                mb-6
                                rounded-2xl
                                border
                                border-yellow-300/40
                                bg-yellow-50
                                dark:bg-stone-800
                                dark:border-yellow-500/20
                                p-4
                            "
                        >
                            <div className="flex items-center gap-4">
                                <div className="rounded-xl bg-yellow-400 p-3">
                                    <Sparkles size={20} className="text-stone-900" />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-stone-900 dark:text-white">
                                        AI Resume Analysis
                                    </h3>

                                    <p className="text-sm text-stone-600 dark:text-stone-400">
                                        Improve your resume with AI-powered insights.
                                    </p>
                                </div>
                            </div>
                        </div>  
                    </div>
                </>
            )}
        </nav>
    );
}

export default Navbar;