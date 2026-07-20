const services = [
  {
    title: "Website Development",
    description: "Building responsive websites using modern frontend technologies."
  },
  {
    title: "React Development",
    description: "Creating reusable React components and interactive interfaces."
  },
  {
    title: "UI Implementation",
    description: "Turning designs into functional websites."
  }
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="section-inner">
        <div className="section-heading">
          <p className="section-kicker">Services</p>
          <h2>Frontend services for clear, responsive business websites.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
