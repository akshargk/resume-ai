import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                });
            }
        }
    }, [location]);

    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <HowItWorks />
            <Footer />
        </>
    );
}

export default Home;