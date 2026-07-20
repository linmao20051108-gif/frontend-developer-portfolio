const skillGroups = [
  {
    title: "Frontend Development",
    items: ["React.js", "JavaScript", "HTML5", "CSS3"]
  },
  {
    title: "UI & Design",
    items: ["Responsive Design", "UI Implementation", "Mobile First Design"]
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code"]
  }
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-inner">
        <div className="section-heading">
          <p className="section-kicker">Skills</p>
          <h2>Frontend skills for building responsive web applications.</h2>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <span className="skill-icon">{group.title.split(" ")[0]}</span>
              <h3>{group.title}</h3>
              <ul className="clean-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
