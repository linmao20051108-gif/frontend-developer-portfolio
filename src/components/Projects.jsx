const projects = [
  {
    title: "Personal Portfolio Website",
    technologies: ["React.js", "CSS", "Responsive Design"],
    description:
      "A modern responsive portfolio website designed to showcase frontend skills, projects, and professional services.",
    tone: "forest",
    demoUrl: "#home",
    githubUrl: "https://github.com/linmao20051108-gif/frontend-developer-portfolio"
  },
  {
    title: "AI Chat Assistant Platform",
    technologies: ["React.js", "API Integration", "JavaScript"],
    description:
      "A modern AI chat assistant interface with simulated AI responses, local chat history, and an API-ready structure.",
    tone: "teal",
    demoUrl: "",
    githubUrl: "https://github.com/linmao20051108-gif/ai-chat-assistant-platform"
  },
  {
    title: "E-commerce React Store",
    technologies: ["React.js", "React Router", "Shopping Cart"],
    description:
      "A responsive shopping website with product browsing, search, filtering, cart functionality, and checkout UI.",
    tone: "gold",
    demoUrl: "",
    githubUrl: "https://github.com/linmao20051108-gif/ecommerce-react-store"
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
                  {project.demoUrl && (
                    <a className="text-link" href={project.demoUrl}>Live Demo</a>
                  )}
                  <a
                    className="text-link"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
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
