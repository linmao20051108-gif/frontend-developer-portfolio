import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";

const sections = ["home", "about", "skills", "projects", "services", "experience", "contact"];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const current = sections.reduce((active, sectionId) => {
        const section = document.getElementById(sectionId);
        if (!section) return active;
        return window.scrollY >= section.offsetTop - 140 ? sectionId : active;
      }, "home");

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} isScrolled={isScrolled} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Experience />
        <Contact />
      </main>
      <footer className="site-footer">
        <span>© 2026 React.js Frontend Developer Portfolio</span>
        <a href="#home">Back to top</a>
      </footer>
    </>
  );
}
