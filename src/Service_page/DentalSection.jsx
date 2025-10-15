import React from "react";
import "./Dental.css";

const DentalSection = () => {
  return (
    <section className="dental-section">
      <div className="dental-container">
        <div className="dental-image-wrapper">
          <img
            src="/dental-image.jpg"     
            alt="Dental treatment"
            className="dental-image"
          />
          <div className="medical-cross">+</div>
        </div>
        <div className="dental-content">
          <h4 className="dental-subtitle">Why Choose Us?</h4>
          <h2 className="dental-heading">
            When You <span className="highlight">Need</span> It Most
            <br />
                     Urgent <span className="highlight">Dental Care</span>
          </h2>

          <p className="dental-description">
            We offer professional dental care tailored to your needs.
            Our team ensures fast, comfortable, and effective treatments
            so you can smile with confidence again.
          </p>
          <div className="dental-features">
            
            <div className="feature">
              
              <h3>Quick Visits</h3>
              <p>Book appointments easily and avoid long waiting times.</p>
            </div>

            <div className="feare">
              
              <h3>Efficiency</h3>
              <p>Our dentists use advanced tools to deliver fast results.</p>
            </div>

            <div className="fea">
              
              <h3>Durability</h3>
              <p>We use high-quality materials for long-lasting treatments.</p>
            </div>

            <div className="f">
              
              <h3>Comfort</h3>
              <p>Enjoy a relaxed experience with our gentle dental care.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalSection;
