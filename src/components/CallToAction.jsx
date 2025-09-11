import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">Let's Build The Future Together</h2>
        <p className="cta-description">
          Join The Expert Ranking and grow your business with proven marketing strategies that deliver real success.
        </p>
        <form className="cta-form">
          <input 
            type="email" 
            placeholder="Your email here" 
            className="cta-input"
            required
          />
          <button type="submit" className="cta-button">Subscribe Now</button>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;