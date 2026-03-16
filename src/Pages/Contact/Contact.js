import React, { useEffect } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 data-aos="fade-up">Let’s Talk</h2>
        <p className="section-intro" data-aos="fade-up" data-aos-delay="150">
          Ready to discuss your next project?
        </p>

        <div className="contact-grid">
          <div className="contact-info" data-aos="fade-right">
            <h3>Contact Information</h3>
            <p>📞 +91 98765 43210</p>
            <p>📧 info@vaishnavienterprises.com</p>
            <p>📍 Ghaziabad, Uttar Pradesh</p>
            <p>⏰ Mon–Fri, 9AM–6PM</p>
          </div>

          <form className="contact-form" data-aos="fade-left">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
