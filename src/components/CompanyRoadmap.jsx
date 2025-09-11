
import React from 'react';
import './CompanyRoadmap.css';

const roadmapData = [
  {
    name: "Asad Ullah",
    role: "Graphic UI/UX Designer, Have 3+ Years Experience",
    img: "/src/assets/image1.jpg"
  },
  {
    name: "Ibrahim Khan",
    role: "Mobile App Developer, Have 8+ Years Of Experience",
    img: "/src/assets/image2.jpg"
  },
  {
    name: "Hamza Gohar",
    role: "Content Writer, Have 5+ Years Of Experience",
    img: "/src/assets/image3.jpg"
  },
  {
    name: "Adnan Sami",
    role: "UX Designer, Have 6+ Years Of Experience",
    img: "/src/assets/image4.jpg"
  },
  {
    name: "Muhammad Wisal",
    role: "Web-Developer, Have 2+ Years Of Experience",
    img: "/src/assets/wisal.jpg"
  },
  {
    name: "Badar Islam",
    role: "World Press Developer, Have 11+ Years Of Experience",
    img: "/src/assets/image5.jpg"
  }
];

const CompanyRoadmap = () => {
  return (
    <section className="company-roadmap">
      <h2>Company Roadmap</h2>
      <p>
        At The Expert Ranking, our journey from humble beginnings to a trusted digital marketing leader reflects our commitment to innovation and growth. Through hard work and result-driven strategies, we help businesses worldwide achieve online success.
      </p>
      <div className="roadmap-cards">
        {roadmapData.map((item, i) => (
          <div key={i} className="roadmap-card">
            <img src={item.img} alt={item.name} />
            <div className="info">
              <h5>{item.name}</h5>
              <p>{item.role}</p>
              <a href="#">View portfolio</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyRoadmap;