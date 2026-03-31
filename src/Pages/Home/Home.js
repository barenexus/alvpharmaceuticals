import React, { useEffect } from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

import About from "../About/About";
import Tablets from "../Tablets/Tablets";
import Contact from "../Contact/Contact";

// Optional SVG icon (hero accent)
import Growth from "../../assets/icons/Growth.svg";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <section id="home" className="section hero">
        <div className="hero-content">
          
          <img
            src={Growth}
            alt=""
            className="hero-icon"
            data-aos="zoom-in"
          />

          <h1 data-aos="fade-up" data-aos-delay="150">
            Empowering Business Excellence
          </h1>

          <p data-aos="fade-up" data-aos-delay="300">
            ALV Pharmaceuticals delivers innovative solutions with unwavering
            commitment to quality, growth, and performance.
          </p>

          <div
            className="hero-actions"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <a href="#services" className="btn primary">
              Our Services
            </a>
            <a href="#contact" className="btn secondary">
              Contact Us
            </a>
          </div>
          <div className="scroll-down"></div>
        </div>
      </section>

      {/* REST OF PAGE */}
      <About />
      <Tablets />
      <Contact />
    </div>
  );
};

export default Home;
