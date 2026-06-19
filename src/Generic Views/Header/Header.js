import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="logo">
        <h1>ALV Pharmaceuticals</h1>
      </div>

      <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/about" onClick={toggleMenu}>
          About
        </Link>

        {/* ===== Service DROPDOWN START ===== */}
        <div className={`dropdown ${isMenuOpen ? "active" : ""}`}>
          <span className="dropbtn">
            Services <span className="arrow">▾</span>
          </span>

          <div className="dropdown-content">
            <Link to="/services/machinery" onClick={toggleMenu}>
              Machinery
            </Link>

            <Link to="/services/surgical--items" onClick={toggleMenu}>
              Surgical Items
            </Link>

            <Link to="/services/hospital--furniture" onClick={toggleMenu}>
              Hospital Furniture
            </Link>
          </div>
        </div>
        {/* ===== Service DROPDOWN END ===== */}

        {/* ===== PRODUCTS DROPDOWN START ===== */}
        <div className={`dropdown ${isMenuOpen ? "active" : ""}`}>
          <span className="dropbtn">
            Products <span className="arrow">▾</span>
          </span>

          <div className="dropdown-content">
            <Link to="/products/tablets" onClick={toggleMenu}>
              Tablets
            </Link>

            <Link to="/products/capsules" onClick={toggleMenu}>
              Capsules
            </Link>

            <Link to="/products/syrups" onClick={toggleMenu}>
              Syrups
            </Link>

            <Link to="/products/protien&drops" onClick={toggleMenu}>
              Protien Powder & Drops
            </Link>
          </div>
        </div>
        {/* ===== PRODUCTS DROPDOWN END ===== */}

        <Link to="/contact" onClick={toggleMenu}>
          Contact
        </Link>
      </nav>

      <div
        className={`nav-toggle ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
