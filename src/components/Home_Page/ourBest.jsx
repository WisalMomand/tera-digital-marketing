import React from "react";
import "./ourBest.css";             
import BestImage from "../../assets/Best.png"; 

const OurBest = () => {
  return (
    <section className="ourbest-section">
      <div className="ourbest-container">
        {/* Left Image */}
        <div className="ourbest-image-container">
          <img
            src={BestImage}
            alt="Best Services"
            className="ourbest-image"
          />
        </div>

        {/* Right Content */}
        <div className="ourbest-content">
          <h2 className="ourbest-heading">What makes us the best</h2>
          <p className="ourbest-text">
            At The Expert Ranking, we don’t just provide services—we deliver real results!
            Our expert team uses smart strategies, advanced tools, and creative ideas to help
            your business grow. Here’s what makes us stand out:
          </p>
          <ul className="ourbest-list">
            <li><strong>What Sets Us Apart?</strong></li>
            <li>Awesome Result</li>
            <li>All Size Business</li>
            <li>Significant ROI</li>
            <li>Expert Advisor</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurBest;
