import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App(){
  return (
    <div className="bg-stone-50 min-h-screen">
      <Navbar/>
      <Hero/>
      <Features/>
      <HowItWorks/>
      <CTA/>
      <Footer />
    </div>
  );
}

export default App; 