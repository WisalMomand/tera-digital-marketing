import React from 'react';
import './Features.css';
import ServicesIcon from '../assets/services.png';
import DeadlineIcon from '../assets/timelogo.png';
import SupportIcon from '../assets/support.png';

const features = [
  { 
    icon: ServicesIcon,
    heading: "Services",
    title: "High-Quality Services" 
  },
  { 
    icon: DeadlineIcon,
    heading: "Deadline",
    title: "Fast Delivery" 
  },
  { 
    icon: SupportIcon,
    heading: "Support",
    title: "24/7 Quality Support" 
  }
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.icon} alt={feature.heading} className="feature-icon" />
            <h5 className="feature-header">{feature.heading}</h5>
            <h4 className="feature-content">{feature.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;