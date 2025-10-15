// MainServices.jsx
import React from 'react';
import './MainServices.css';

const MainServices = () => {
  return (
    <div className="services-page">
      {/* ========== HEADER SECTION ========== */}
      <header className="services-header">
        <div className="services-header-content">
          
          {/* Title on the Left */}
          <div className="services-title">
            <h1>We Always Provide  The<br /> <b>Best Service</b></h1>
          </div>

          {/* Info Block on the Right */}
          <div className="services-info">
            <h3>Services</h3>
            <p>
              While we can customize your cleaning plan to suit your needs,
              most clients schedule regular cleaning services.
            </p>
          </div>

        </div>
      </header>

      {/* ========== SERVICE CARDS ========== */}
      <div className="services-container">
        
        {/* Frontend Development */}
        <section className="service-section">
          <img
            src="/Frontend.png"
            alt="Frontend Development"
            className="service-img"
          />
          <h2>Frontend Development</h2>
          <ol className="service-list">
            <li><strong>HTML (HyperText Markup Language)</strong> – Structure of a webpage</li>
            <li><strong>CSS (Cascading Style Sheets)</strong> – Styling and layout</li>
            <li><strong>JavaScript (JS)</strong> – Adds interactivity and functionality</li>
            <li><strong>Frontend Framework/Libraries</strong> – React.js, Vue.js, or Angular</li>
          </ol>
          <button className="book-now-btn">Book Now</button>
        </section>

        {/* Backend Development */}
        <section className="service-section">
          <img
            src="/Backend.png"
            alt="Backend Development"
            className="service-img"
          />
          <h2>Backend Development</h2>
          <ol className="service-list">
            <li><strong>Programming Languages</strong> – JavaScript (Node.js), Python (Django, Flask), PHP, Ruby (Rails)</li>
            <li><strong>Databases</strong> – MySQL, PostgreSQL, MongoDB, Firebase</li>
            <li><strong>APIs & RESTful Services</strong> – Fetching and sending data between client and server</li>
          </ol>
          <button className="book-now-btn">Book Now</button>
        </section>

        {/* Version Control & Deployment */}
        <section className="service-section">
          <img
            src="/Version.png"
            alt="Version Control & Deployment"
            className="service-img"
          />
          <h2>Version Control & Deployment</h2>
          <ul className="services-features">
            <li>
              <strong>Advantages</strong>
              <ul>
                <li>Advantages of Using Version Control System</li>
              </ul>
            </li>
            <li><strong>Version Control</strong> – Git & GitHub for version control and collaboration</li>
            <li><strong>Hosting & Deployment</strong> – Netlify, Vercel, AWS, Firebase, or traditional hosting services</li>
          </ul>
          <button className="book-now-btn">Book Now</button>
        </section>

      </div>
    </div>
  );
};

export default MainServices;


