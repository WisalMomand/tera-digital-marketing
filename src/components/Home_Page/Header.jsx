import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/TERA logo.svg';
 

const Header = () => {
  return (
    <header className="header-container">
      <div className="header">

        {/* Logo - Now visually dominant */}
        <div className="logo-container">
          <img src={logo} alt="TERA Logo" className="logo-img" />
        </div>

        {/* Navigation */}
        <nav className="nav">
          <Link to="/services">Services</Link>
          <Link to="/Meeting">Contact</Link>
          <Link to="/Whose">About</Link>
          <Link to="#smm">Social Media Marketing</Link>
          <Link to="#content">Content Marketing</Link>
        </nav>

        {/* Button */}
        <button className="login-btn">Get started</button>
      </div>
    </header>
  );
};

export default Header;
