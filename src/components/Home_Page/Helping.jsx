// Helping.jsx
import React from 'react';
import './Helping.css';
import bestImage from '../../assets/Best.png';

const Helping = () => {
  return (
    <section className="helping-section">
      <div className="helping-container">
        <div className="helping-content">
          <h2 className="helping-title">Helping you grow beyond services</h2>
          <p className="helping-description">
            At The Expert Ranking, we provide top-notch digital marketing services with a focus on 
            professionalism, transparency, and results. Our expert team creates custom strategies 
            to help businesses grow and boost revenue.
          </p>
          
          <h3 className="subtitle">What Sets Us Apart?</h3>
          
          <ul className="features-list">
            <li>Transparent & Results-Driven Marketing</li>
            <li>Experienced & Certified Team</li>
            <li>Custom, Industry-Specific Strategies</li>
            <li>Proven Track Record with 100+ Clients</li>
            <li>Data-Driven Approach for Maximum ROI</li>
            <li>Dedicated Support & Clear Communication</li>
          </ul>
          
          <p className="priority-text">Your success is our priority!</p>
        </div>
        
        <div className="helping-image">
          <img src={bestImage} alt="Best Services" className="best-image" />
        </div>
      </div>
    </section>
  );
};

export default Helping;