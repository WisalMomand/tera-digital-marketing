import React from 'react';
import './Brands.css';

const Brands = () => {
  return (
    <section className="brands">
      {["stack", "NETFLIX", "fristi", "Google", "slack", "UBER"].map((brand, index) => (
        <div className="brand" key={index}>{brand}</div>
      ))}
    </section>
  );
};

export default Brands;