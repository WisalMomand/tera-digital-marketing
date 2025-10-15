import React from "react";
import "./Process.css";  

const Process = () => {
  return (
    <section className="process-section">
      <div className="process-container">
        <div className="process-image-wrapper">
          <img 
            src="/Process.png" 
            alt="Our Dental Process" 
            className="process-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Process;
