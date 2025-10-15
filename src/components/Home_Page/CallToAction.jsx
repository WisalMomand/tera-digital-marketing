import React from 'react';
import './CallToAction.css';

import G1 from '../../assets/G1.jpg';
import G2 from '../../assets/G2.jpg';
import Boy1 from '../../assets/B1.jpg';
import Boy2 from '../../assets/Boy2.jpg';
import B1 from '../../assets/Boy1.jpg';
import B2 from '../../assets/Boy2.jpg';
import F1 from '../../assets/F1.jpg';
import F2 from '../../assets/F2.jpg';

const CallToAction = () => {
  return (
    <section className="cta-section">
      {/* Floating images */}
      <img src={G1} alt="Girl 1" className="floating-img img-g1" />
      <img src={G2} alt="Girl 2" className="floating-img img-g2" />
      <img src={Boy1} alt="Boy 1" className="floating-img img-boy1" />
      <img src={Boy2} alt="Boy 2" className="floating-img img-boy2" />
      <img src={B1} alt="Building 1" className="floating-img img-b1" />
      <img src={B2} alt="Building 2" className="floating-img img-b2" />
      <img src={F1} alt="Extra 1" className="floating-img img-f1" />
      <img src={F2} alt="Extra 2" className="floating-img img-f2" />

      <div className="cta-content">
        <h2 className="cta-title">Helping you grow beyond services</h2>
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
