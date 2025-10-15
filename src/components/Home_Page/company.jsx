import React from "react";
import "./company.css";          
import YoungImage from "../../assets/Young.png"; 

const Company = () => {
  return (
    <section className="company-section">
      <img
        src={YoungImage}
        alt="About Section"
        className="company-image"
      />
    </section>
  );
};

export default Company;

