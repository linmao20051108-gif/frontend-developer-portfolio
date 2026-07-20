const projects = [
  {
    title: "Personal Portfolio Website",
    technologies: ["React.js", "CSS", "Responsive Design"],
    description:
      "A modern responsive portfolio website designed to showcase frontend skills, projects, and professional services.",
    tone: "forest"
  },
  {
    title: "Business Landing Page",
    technologies: ["React.js", "UI Design", "Responsive Layout"],
    description:
      "A professional landing page created for business presentation and customer conversion.",
    tone: "gold"
  },
  {
    title: "AI Chat Interface",
    technologies: ["React.js", "API Integration", "JavaScript"],
    description:
      "An interactive AI chat interface with modern user experience design.",
    tone: "teal"
  }
];

export default function Projects() {
  return (
    <section className="section contrast-band" id="projects">
      <div className="section-inner">
        <div className="section-heading">
          <p className="section-kicker">Featured Projects</p>
          <h2>Client-style projects that show practical frontend delivery.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.tone}`} key={project.title}>
              <div className="project-preview">
                <img src="/assets/project-preview.png" alt="" />
                <span>{project.title}</span>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <a className="text-link" href="#home">Live Demo</a>
                  <a className="text-link" href="https://github.com/username" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
