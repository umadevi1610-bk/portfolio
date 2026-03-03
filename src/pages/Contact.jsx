import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <p className="contact-sub">
        I’m open to full-time opportunities, internships, and collaboration on exciting projects.
      </p>

      <div className="contact-container">

        <div className="contact-item">
          <span>📞</span>
          <p>+91 63794 12144</p>
        </div>

        <div className="contact-item">
          <span>📧</span>
          <p>
            <a href="mailto:umadevibalakrishnan39@gmail.com">
              umadevibalakrishnan39@gmail.com
            </a>
          </p>
        </div>

        <div className="contact-item">
          <span>📍</span>
          <p>Virudhunagar, Tamil Nadu, India</p>
        </div>

        <div className="contact-item">
          <span>🔗</span>
          <p>
            <a
              href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn – Umadevi Balakrishnan
            </a>
          </p>
        </div>

        <div className="contact-item">
          <span>💻</span>
          <p>
            <a
              href="https://github.com/umadevi1610-bk"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub – umadevi1610-bk
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;