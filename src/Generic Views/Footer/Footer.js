import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Footer.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-grid">
            
            {/* About Us */}
            <div data-aos="fade-up">
              <h3 className="footer-title gradient-text">About Us</h3>
              <p className="footer-text">
                Lorem34
              </p>

              <h5 className="footer-subtitle">Follow Us</h5>
              <div className="social-icons">
                <a href="https://www.facebook.com/profile.php?id=61578192187504" className="social fb">
                  <img src="/Logo_Facebook.jpg" alt="Facebook" />
                </a>
                <a href="https://www.linkedin.com/company/barenexus/" className="social linkedin">
                  <img src="/Logo_Linkedin.jpg" alt="LinkedIn" />
                </a>
                <a href="https://www.instagram.com/barenexus_consultants" className="social insta">
                  <img src="/Logo_Insta.jpg" alt="Instagram" />
                </a>
                <a href="https://www.threads.com/@barenexus_consultants" className="social threads">
                  <img src="/Logo_Thread.jpg" alt="Threads" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/products">Our Products</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Service Areas */}
            <div data-aos="fade-up" data-aos-delay="400">
              <h3 className="footer-title">Service Areas</h3>
              <ul className="footer-links purple">
                <li><a href="#">Technology Solutions</a></li>
                <li><a href="#">Digital Marketing</a></li>
                <li><a href="#">Business Solutions</a></li>
                <li><a href="#">Human Resources</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div data-aos="fade-up" data-aos-delay="600">
              <h3 className="footer-title">Get in Touch</h3>
              <ul className="footer-contact">
                <li>
                  <strong>Call Us:</strong>
                  <a href="tel:+917818835004">+91 7818835004</a>
                </li>
                <li>
                  <strong>Email Us:</strong>
                  <a href="mailto:info@barenexus.com">info@barenexus.com</a>
                </li>
                <li>
                  <strong>Office:</strong>
                  <a
                    href="https://maps.app.goo.gl/nJHyPe8V2UBm2gHW7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PT-62/3 LGF, Kalkaji, New Delhi 110019
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom" data-aos="fade-up">
            <p>© 2026 Vaishnavi Enterprises. All Rights Reserved.</p>
            <div className="footer-policy">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/term-and-conditions">Terms & Conditions</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
