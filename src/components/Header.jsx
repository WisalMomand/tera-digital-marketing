import React from 'react';
import './Header.css';
import logo from '../assets/hlogo.png'; // ✅ correct relative path

const Header = () => {
  return (
    <header className="header">
      {/* ✅ Correct class name to match CSS */}
      <div className="logo-container">
        <img src={logo} alt="TERA Logo" className="logo-img" />
        <div className="logo-text">
          <h1>TERA</h1>
          <span>The expert ranking</span>
        </div>
      </div>

      <nav className="nav">
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <a href="#">SEO</a>
        <a href="#">Social Media Marketing</a>
        <a href="#">Content Marketing</a>
      </nav>

      <button className="login-btn">Get started</button>
    </header>
  );
};

export default Header;
