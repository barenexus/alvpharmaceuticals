import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="container">
          <h1 data-aos="fade-up">About ALV Pharmaceuticals</h1>
          <p data-aos="fade-up" data-aos-delay="150">
            Delivering Quality. Innovation. Trust.
          </p>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="about-section container">
        <div className="about-grid">
          <div data-aos="fade-right">
            <h2>Who We Are</h2>
            <p>
              ALV Pharmaceuticals is a premier healthcare company in India,
              committed to delivering excellence through internationally
              recognized quality standards. With a strong focus on innovation
              and reliability, we strive to meet the evolving needs of the
              global pharmaceutical industry.
            </p>
            <p>
              Our manufacturing processes strictly adhere to WHO-GMP guidelines,
              ensuring the highest levels of safety and efficacy across our wide
              range of products including capsules, tablets, liquid orals, and
              injectables covering both Beta Lactam and Non-Beta Lactam
              segments.
            </p>
          </div>
          <div className="image-placeholder" data-aos="fade-left">
            Image Here
          </div>
        </div>
      </section>

      {/* MISSION VISION */}
      <section className="mission-vision">
        <div className="container mv-grid">
          <div className="mv-card" data-aos="zoom-in">
            <h3>Our Mission</h3>
            <p>
              To provide high-quality, safe, and affordable pharmaceutical
              products that improve global healthcare standards.
            </p>
          </div>
          <div className="mv-card" data-aos="zoom-in" data-aos-delay="150">
            <h3>Our Vision</h3>
            <p>
              To become a globally recognized pharmaceutical company known for
              innovation, quality, and trust.
            </p>
          </div>
          <div className="mv-card" data-aos="zoom-in" data-aos-delay="300">
            <h3>Our Values</h3>
            <p>
              Quality, Integrity, Innovation, Customer Satisfaction, and
              Teamwork are the core values that drive our organization.
            </p>
          </div>
        </div>
      </section>

      {/* QUALITY SECTION */}
      <section className="about-section container">
        <div className="about-grid">
          <div className="image-placeholder" data-aos="fade-right">
            Image Here
          </div>
          <div data-aos="fade-left">
            <h2>Quality & Manufacturing</h2>
            <p>
              Quality remains the foundation of our operations. We maintain
              stringent quality control measures at every stage of production,
              supported by a team of highly skilled and technically proficient
              professionals.
            </p>
            <p>
              Our state-of-the-art manufacturing facilities are equipped with
              advanced machinery and centrally air-conditioned units to ensure
              optimal production conditions.
            </p>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat-card" data-aos="fade-up">
            <h2>10+</h2>
            <p>Years Experience</p>
          </div>
          <div className="stat-card" data-aos="fade-up" data-aos-delay="150">
            <h2>500+</h2>
            <p>Products</p>
          </div>
          <div className="stat-card" data-aos="fade-up" data-aos-delay="300">
            <h2>25+</h2>
            <p>Countries Served</p>
          </div>
          <div className="stat-card" data-aos="fade-up" data-aos-delay="450">
            <h2>100+</h2>
            <p>Employees</p>
          </div>
        </div>
      </section>

      {/* DIRECTOR MESSAGE */}
      <section className="about-section container">
        <div data-aos="fade-right" className="director-card">
          <div className="about-grid">
            <div data-aos="fade-right">
              <h2>Director's Message</h2>
              <p>
                At ALV Pharmaceuticals, we are committed to delivering
                world-class pharmaceutical products that meet international
                quality standards. Our goal is to expand globally while
                maintaining the highest level of trust and customer
                satisfaction.
              </p>
              <p>
                We believe in innovation, quality manufacturing, and long-term
                partnerships with our clients across the world.
              </p>
            </div>
            <div className="image-placeholder" data-aos="fade-left">
              Director Image
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
