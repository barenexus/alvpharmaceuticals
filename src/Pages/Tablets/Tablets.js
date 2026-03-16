import React, { useEffect } from "react";
import "./Tablets.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Tablets = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section id="tablets" className="section tablets-section">
      <div className="container">
        <h2 data-aos="fade-up">What We Do Best</h2>
        <p className="section-intro" data-aos="fade-up" data-aos-delay="150">
          Scalable solutions tailored to your business.
        </p>

        <div className="tablets-grid">
          {[
            "Consulting",
            "Technology Solutions",
            "Supply Chain",
            "Training & Development",
          ].map((title, index) => (
            <div
              className="tablet-card"
              key={title}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <h3>{title}</h3>
              <p>
                Professional tablets designed to drive efficiency and growth.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tablets;
