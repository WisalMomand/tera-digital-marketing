// src/components/Feature.jsx
import React from "react";
import { FileText, Clock, MessageCircle } from "lucide-react";
import "./Feature.css"; // Import CSS file

const Feature = () => {
  return (
    <section className="feature-section">
      <div className="feature-container">
        {/* Services Card */}
        <div className="feature-card">
          <div className="feature-icon">
            <FileText className="icon" />
          </div>
          <div className="feature-content">
            <h3>Services</h3>
            <p>High-Quality Services</p>
          </div>
        </div>

        {/* Deadline Card */}
        <div className="feature-card">
          <div className="feature-icon">
            <Clock className="icon" />
          </div>
          <div className="feature-content">
            <h3>Deadline</h3>
            <p>Fast Delivery</p>
          </div>
        </div>

        {/* Support Card */}
        <div className="feature-card">
          <div className="feature-icon">
            <MessageCircle className="icon" />
          </div>
          <div className="feature-content">
            <h3>Support</h3>
            <p>24/7 Quality Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
