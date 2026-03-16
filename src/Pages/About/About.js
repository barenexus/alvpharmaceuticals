import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Innovation from "../../assets/icons/Innovation.svg";
import Team from "../../assets/icons/Team.svg";
import Shield from "../../assets/icons/Shield.svg";
import Growth from "../../assets/icons/Growth.svg";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 data-aos="fade-up">Who We Are</h2>
        <p className="section-intro" data-aos="fade-up" data-aos-delay="150">
          Values that drive innovation, trust, and long-term success.
        </p>

        <div className="content-grid">
          <div className="content-card" data-aos="zoom-in">
            <img src={Innovation} className="svg-icon" alt="" />
            <h3>Innovation</h3>
            <p>Modern solutions that create real business impact.</p>
          </div>

          <div className="content-card" data-aos="zoom-in" data-aos-delay="150">
            <img src={Team} className="svg-icon" alt="" />
            <h3>Collaboration</h3>
            <p>Teams working together to deliver meaningful outcomes.</p>
          </div>

          <div className="content-card" data-aos="zoom-in" data-aos-delay="300">
            <img src={Shield} className="svg-icon" alt="" />
            <h3>Integrity</h3>
            <p>Trust, transparency, and accountability in everything.</p>
          </div>

          <div className="content-card" data-aos="zoom-in" data-aos-delay="450">
            <img src={Growth} className="svg-icon" alt="" />
            <h3>Performance</h3>
            <p>Focused on measurable and sustainable growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
