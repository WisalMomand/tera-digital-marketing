import React from 'react';
import './Footer.css';
import logo from "../../assets/hlogo.png";
import FacebookIcon from "../../assets/Faebook.png";
import TwitterIcon from "../../assets/twiter.png";
import InstagramIcon from '../../assets/insta.png';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* Top section */}
        <div className="footer-main">
          {/* Left Section */}
          <div className="footer-left">
            <div className="logo-container">
              <img src={logo} alt="TERA Logo" className="logo-img" />
              <div className="logo-text">
                <h1 className="logo-main">TERA</h1>
                <span className="logo-tag">The expert ranking</span>
              </div>
            </div>
            <p className="footer-text">
              Let’s bring your vision to reality.
            </p>
          </div>

          {/* Right Section */}
          <div className="footer-right">
            <div className="footer-links">
              <a href="#">Blog</a>
              <a href="#">Contact</a>
              <a href="#">About</a>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="footer-bottom">
          <p>©2025 Flowbase, Powered by Muhammad Wisal.</p>

          {/* ✅ Social icons moved here */}
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <img src={FacebookIcon} alt="Facebook" className="social-icon" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src={TwitterIcon} alt="Twitter" className="social-icon" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={InstagramIcon} alt="Instagram" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

