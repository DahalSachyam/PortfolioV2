import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Academics from "./components/Academics";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  const sectionRef = (id) => (node) => {
    if (!node) return;
    new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActiveSection(id); },
      { threshold: 0.35 }
    ).observe(node);
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans antialiased">
      <Navbar activeSection={activeSection} />
      <div ref={sectionRef("hero")}><Hero /></div>
      <div ref={sectionRef("about")}><About /></div>
      <div ref={sectionRef("projects")}><Projects /></div>
      <div ref={sectionRef("skills")}><Skills /></div>
      <div ref={sectionRef("academics")}><Academics /></div>
      <div ref={sectionRef("contact")}><Contact /></div>
      <Footer />
    </div>
  );
}