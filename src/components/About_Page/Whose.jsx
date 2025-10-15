import React from 'react';
import './Whose.css';
import { Link } from 'react-router-dom';
import CompanyRoadmap from '../Home_Page/CompanyRoadmap';
import ClientSection from '../../Service_page/ClientSection';
const Whose = () => {
  return (
    <>
      <div className="whose-container">
        <div className="whose-content">
          {/* Left Section - Who We Are */}
          <div className="who-we-are-section">
            <p className="section-label">Who We Are</p>
            <h1 className="section-title">Who We Are</h1>
            <p className="section-description">
              Established in [2025], [Tera Agency Company] has been dedicated to creating unforgettable travel experiences. 
              Our journey started with a simple idea: to make travel extraordinary. Today, we continue to turn dreams into reality.
            </p>
            <div className="image-container">
              <img
                src="/software.jpg"       // Image from public folder
                alt="Software Development"
                className="section-image"
              />
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="vertical-divider"></div>

          {/* Right Section - Why Us */}
          <div className="why-us-section">
            <p className="section-label">Why Us</p>
            <h1 className="section-title">Why Us</h1>
            <p className="section-description">
              What makes us unique is our unwavering commitment to excellence. We're not just a travel agency; 
              we're your trusted travel companion. Discover the reasons why travelers like you choose us for their adventures.
            </p>
            <div className="image-container">
              <img
                src="/Developer.jpg"
                alt="Developer"
                className="section-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ✅ CompanyRoadmap section placed BELOW the Whose section */}
      <CompanyRoadmap />
        <ClientSection />
    </>
  );
};

export default Whose;


