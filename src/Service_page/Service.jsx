// Service.jsx
import React from 'react';
import './Service.css';
import MainServices from './MainServices';
import DentalSection from './DentalSection';
import Process from './Process';
import ClientSection from './ClientSection';
import UpdatedCource from './UpdatedCource';
const Service = () => {
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero-overlay">
          <div className="service-hero-content">
            <h1 className="service-main-heading">LET US MAKE YOUR</h1>
            <h2 className="service-sub-heading">DIGITAL MARKETING</h2>
            <p className="service-description">
               Unlock your business potential with our full-spectrum digital marketing services. 
              We combine innovative strategies with proven methodologies to enhance your online 
              visibility, engage your audience, and convert prospects into loyal customers. 
               Experience growth-driven marketing that delivers tangible business outcomes.
            </p>
            <div className="service-divider"></div>
            <button className="contact-button">CONTACT US</button>
          </div>
        </div>
      </section>
      <MainServices />
      <DentalSection />
      <Process />
      <UpdatedCource />
      <ClientSection />
    </div>
  );
};

export default Service;