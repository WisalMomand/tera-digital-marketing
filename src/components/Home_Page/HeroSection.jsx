import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="header hero-section"> {/* ✅ Reuse header class */}
      <img
        src="/HeroSection.png"
        alt="Hero Section"
        className="hero-image"
      />
    </section>
  );
};

export default HeroSection;
