// Header.jsx
import React, { useState, useEffect } from "react";
import Logo from "../../Images/logo.png";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      // Prevent scrolling on body when menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when menu is closed
      document.body.style.overflow = "unset";
    }
    

    // Cleanup function to ensure scroll is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <div>
      <header className="my-header">
        <nav className="nav-container">
          <div className="logo-section">
            <img src={Logo} alt="Nishue" className="logo" />
          </div>

          {/* Nav Links */}
          <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              Packages
            </a>
            <a href="#" className="nav-link">
              Stake
            </a>
            <a href="#" className="nav-link">
              Merchant
            </a>
            <a href="#" className="nav-link">
              B2X
            </a>
            <a href="#" className="nav-link">
              Quick Exchange
            </a>
          </div>

          <div className={`auth-buttons ${isMenuOpen ? "active" : ""}`}>
            <button className="login-btn">Login</button>
            <button className="register-btn">Registration</button>
            {/* Hamburger Menu Button */}
            <div
              className="menu-icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
