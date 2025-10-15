import React from 'react';
import './WhyBest.css';
import myVideo from '/src/assets/video.mp4'; // import your video

const WhyBest = () => {
  return (
    <section className="why-best">
      <div className="video">
        <video
          src={myVideo}
          controls
          autoPlay
          muted
          loop
          style={{ width: '100%', borderRadius: '12px' }}
        />
      </div>
      <div className="text">
        <h2>What Makes Us the Best</h2>
        <ul>
          <li>All the Expert Services in One Place</li>
          <li>We provide end-to-end support</li>
          <li>More than just marketing: We help you grow!</li>
          <li>3K+ Happy Clients</li>
          <li>100% Project Success</li>
          <li>Multiple Awards</li>
          <li>Expert Advisors</li>
        </ul>
      </div>
    </section>
  );
};

export default WhyBest;
