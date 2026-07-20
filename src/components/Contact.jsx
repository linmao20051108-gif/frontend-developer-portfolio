import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name")?.toString().trim() || "there";
    setStatus(`Thanks, ${name}. Your message is ready to send.`);
    event.currentTarget.reset();
  };

  return (
    <section className="section contact-band" id="contact">
      <div className="section-inner contact-layout">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Let's Work Together</h2>
          <p className="body-copy">
            Have a project idea? Feel free to contact me.
          </p>
          <div className="contact-list">
            <a href="mailto:linmao20051108@gmail.com">linmao20051108@gmail.com</a>
            <a href="https://github.com/linmao20051108-gif" target="_blank" rel="noreferrer">
              github.com/linmao20051108-gif
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" autoComplete="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" autoComplete="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>
          <button className="button primary" type="submit">Send Message</button>
          <p className="form-status" role="status">{status}</p>
        </form>
      </div>
    </section>
  );
}
