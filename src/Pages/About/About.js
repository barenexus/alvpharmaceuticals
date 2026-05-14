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
      {/* MISSION VISION */}
      <section className="mission-vision">
        <div className="container mv-grid">
          <div className="mv-card" data-aos="zoom-in">
            <h3>Our Mission</h3>
            <p>
              To improve lives by delivering high-quality, safe, and affordable
              pharmaceutical products. We are committed to innovation, ethical
              practices, and customer-centric healthcare solutions that meet
              global standards.
            </p>
            <p>
              At ALV Pharmaceuticals, our mission is to be an innovation-driven,
              transnational pharmaceutical company committed to improving global
              healthcare. We focus on developing safe, effective, and affordable
              medicines through a strong scientific approach while making quality
              healthcare accessible to a wider population.
            </p>
          </div>

          <div className="mv-card" data-aos="zoom-in" data-aos-delay="150">
            <h3>Our Vision</h3>
            <p>
              To become a trusted and leading pharmaceutical company recognized
              for excellence, innovation, and commitment to enhancing global
              health and well-being.
            </p>
          </div>

          <div className="mv-card" data-aos="zoom-in" data-aos-delay="300">
            <h3>Our Values</h3>

            <p>
              <strong>Innovation –</strong> We continuously explore, experiment,
              and develop solutions that enhance human health and improve
              quality of life.
            </p>

            <p>
              <strong>Quality –</strong> We are committed to delivering
              excellence through reliable and effective healthcare solutions,
              benchmarked against global best practices.
            </p>

            <p>
              <strong>Collaboration –</strong> We believe in teamwork, diverse
              perspectives, and fostering an inclusive environment that delivers
              meaningful results.
            </p>

            <p>
              <strong>Courage –</strong> We encourage openness, confidence, and
              constructive feedback to drive continuous growth and improvement.
            </p>

            <p>
              <strong>Performance –</strong> We empower our teams to innovate,
              take ownership, and create exceptional value through leadership,
              accountability, and passion.
            </p>

            <p>
              <strong>Integrity –</strong> We uphold the highest ethical
              standards with honesty, transparency, and trust in everything we
              do.
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

      {/* CEO MESSAGE */}
      <section className="ceo-section">
        <div className="container">
          <div className="ceo-card" data-aos="fade-up">
            <div className="ceo-grid">
              <div className="ceo-image" data-aos="fade-right">
                CEO Image
              </div>

              <div className="ceo-content" data-aos="fade-left">
                <span className="ceo-tag">Leadership Message</span>

                <h2>CEO Message</h2>

                <p>
                  At ALV Pharmaceuticals, our journey is driven by a clear
                  purpose — to improve lives through quality, innovation, and
                  accessible healthcare solutions. We believe that healthcare is
                  not just a service, but a responsibility towards society, and
                  we are committed to fulfilling it with integrity and
                  excellence.
                </p>

                <p>
                  In a rapidly evolving pharmaceutical landscape, our focus
                  remains on developing safe, effective, and affordable
                  medicines that meet the needs of people across diverse
                  communities. Innovation and scientific advancement are at the
                  core of our approach, enabling us to continuously enhance our
                  products and processes.
                </p>

                <p>
                  Our success is built on the trust of our customers, the
                  dedication of our team, and the support of our stakeholders.
                  We take pride in fostering a culture of collaboration,
                  diversity, and accountability, where every individual is
                  empowered to contribute and grow.
                </p>

                <p>
                  As we move forward, ALV Pharmaceuticals remains committed to
                  maintaining the highest standards of quality and ethics while
                  expanding our reach to serve more people globally. Together,
                  we strive to create a healthier and better future.
                </p>

                <h4 className="ceo-name">— CEO, ALV Pharmaceuticals</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
