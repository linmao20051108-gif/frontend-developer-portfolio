export default function About() {
  return (
    <section className="section intro-band" id="about">
      <div className="section-inner two-column">
        <div className="section-heading">
          <p className="section-kicker">About Me</p>
          <h2>React-focused frontend development for modern web applications.</h2>
        </div>
        <div className="body-copy about-copy">
          <p>
            I am a frontend developer specializing in React.js and responsive web development.
          </p>
          <p>
            I focus on creating clean interfaces, smooth user experiences, and scalable
            frontend solutions.
          </p>
          <div className="stats-grid" aria-label="Portfolio highlights">
            <div>
              <strong>React</strong>
              <span>Core frontend focus</span>
            </div>
            <div>
              <strong>2026</strong>
              <span>Active project work</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Responsive layouts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
