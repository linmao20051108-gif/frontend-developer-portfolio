import { useEffect, useState } from "react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar({ activeSection, isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth > 760) setIsOpen(false);
    };

    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  const headerClass = ["site-header", isScrolled ? "is-scrolled" : "", isOpen ? "is-open" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass}>
      <a className="brand" href="#home" aria-label="Go to home">
        <span className="brand-mark">R</span>
        <span>React.js Portfolio</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => {
          const sectionId = item.href.replace("#", "");
          return (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === sectionId ? "is-active" : ""}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
