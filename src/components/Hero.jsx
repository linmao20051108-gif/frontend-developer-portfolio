export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Portfolio introduction">
      <img
        className="hero-image"
        src="/assets/portfolio-workspace.png"
        alt="A modern workspace illustration for React frontend development"
      />
      <div className="hero-overlay" />
      <div className="hero-content reveal">
        <p className="eyebrow">React.js Frontend Developer Portfolio</p>
        <h1>
          Frontend Developer
          <span>Building Modern Web Experiences</span>
        </h1>
        <p className="hero-copy">
          I build responsive and user-friendly web applications using React.js,
          JavaScript, and modern frontend technologies.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">View My Work</a>
          <a className="button secondary" href="#contact">Hire Me</a>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
        <span />
      </a>
    </section>
  );
}
