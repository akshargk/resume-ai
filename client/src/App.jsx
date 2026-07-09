import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ResumeUpload from "./components/ResumeUpload";

function App(){
  return (
    <div className="bg-stone-50 min-h-screen">
      <Navbar/>
      <Hero/>
      <Features/>
      <HowItWorks/>
      <CTA/>
      <Footer/>
      <ResumeUpload/>
    </div>
  );
}

export default App; 