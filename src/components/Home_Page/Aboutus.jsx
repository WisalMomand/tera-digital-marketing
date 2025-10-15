import React from 'react';
import './Aboutus.css';

const Aboutus = () => {
  const features = [
    "Transparent & Results-Driven Marketing",
    "Experienced & Certified Team",
    "Custom, Industry-Specific Strategies",
    "Proven Track Record with 100+ Clients",
    "Data-Driven Approach for Maximum ROI",
    "Dedicated Support & Clear Communication"
  ];

  return (
    <section className="aboutus-section">
      <div className="aboutus-card image-card">
        <div className="image-container">
          <img 
            src="/src/assets/laptop.jpg" 
            alt="Digital marketing professional working on laptop"
            className="about-image"
          />
        </div>
      </div>

      {/* Card 2: Content */}
      <div className="aboutus-card content-card">
        <div className="content-container">
          <h2 className="about-title">About Us</h2>
          
          <p className="about-description">
            At The Expert Ranking, we provide top-notch digital marketing 
            services with a focus on professionalism, transparency, and 
            results. Our expert team creates custom strategies to help 
            businesses grow and boost revenue.
          </p>

          <div className="what-sets-us-apart">
            <h3 className="subtitle">What Sets Us Apart?</h3>
            
            <ul className="features-list">
              {features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <span className="checkmark"></span>
                  <span className="feature-text">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="priority-text">Your success is our priority!</p>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;

