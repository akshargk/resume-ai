import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import UploadPage from "./pages/UploadPage";
import ScrollToHash from "./components/ScrollToHash";

function Home({ analysisResult, darkMode, setDarkMode }) {
    return (
        <>
            <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            <Hero analysisResult={analysisResult} />

            <Features />

            <HowItWorks />

            <CTA />

            <Footer />
        </>
    );
}

function App() {
    const [analysisResult, setAnalysisResult] = useState(null);

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <BrowserRouter>
            <ScrollToHash />

            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 3000,
                    style: {
                        background: "#171717",
                        color: "#ffffff",
                        borderRadius: "12px",
                    },
                }}
            />

            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            analysisResult={analysisResult}
                            darkMode={darkMode}
                            setDarkMode={setDarkMode}
                        />
                    }
                />

                <Route
                    path="/upload"
                    element={
                        <UploadPage
                            analysisResult={analysisResult}
                            setAnalysisResult={setAnalysisResult}
                            darkMode={darkMode}
                            setDarkMode={setDarkMode}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;