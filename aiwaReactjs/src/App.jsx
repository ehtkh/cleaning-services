import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Contact from "./components/Contact";
import "./index.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds before revealing main content
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen w-full text-white">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Services />
          <About />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}
