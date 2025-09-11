import React from 'react';
import './Hero.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Boost Your Business With <span>Expert Digital Marketing!</span></h1>
        <p>We provide expert digital marketing services to boost SEO, content reach, social media, and strategies for sustainable growth.</p>
        <button>Learn More</button>
      </div>
      <div className="hero-right">
        <img src="src/assets/marketing.PNG" alt="Marketing graphic" />
      </div>
    </section>
  );
};

export default HeroSection;