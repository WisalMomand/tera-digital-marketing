import React from 'react';
import './ServicesSection.css';
import CsmIcon from '../../assets/csm.png';
import VolunteerIcon from '../../assets/voluntear.png';
import FundraisingIcon from '../../assets/fundrisng.png';

/* ✅ Stats Array */
const stats = [
  { number: "100%", label: "Projects Success" },
  { number: "3K+", label: "Trusted Client" },
  { number: "78", label: "Award And Recognition" },
  { number: "35+", label: "Professional Team" }
];

/* ✅ Services Array */
const services = [
  {
    icon: CsmIcon,
    title: "A CSM built just for nonprofits",
    desc: "Helps you reach a stronger community of donors",
    author: "Brian More Downs"
  },
  {
    icon: VolunteerIcon,
    title: "Volunteer management tool",
    desc: "Makes it easy to grow your volunteer base and save time",
    author: "Brian More Downs"
  },
  {
    icon: FundraisingIcon,
    title: "Fundraising tools",
    desc: "Increase donations with relationship-focused tools",
    author: "Brian More Downs"
  },
  {
    icon: CsmIcon,
    title: "A CSM built just for nonprofits",
    desc: "Helps you reach a stronger community of donors",
    author: "Brian More Downs"
  },
  {
    icon: VolunteerIcon,
    title: "Volunteer management tool",
    desc: "Makes it easy to grow your volunteer base and save time",
    author: "Brian More Downs"
  },
  {
    icon: FundraisingIcon,
    title: "Fundraising tools",
    desc: "Increase donations with relationship-focused tools",
    author: "Brian More Downs"
  },
  {
    icon: CsmIcon,
    title: "A CSM built just for nonprofits",
    desc: "Helps you reach a stronger community of donors",
    author: "Brian More Downs"
  },
  {
    icon: VolunteerIcon,
    title: "Volunteer management tool",
    desc: "Makes it easy to grow your volunteer base and save time",
    author: "Brian More Downs"
  }
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      {/* ✅ Stats Section FIRST */}
      <div className="stats-section">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* ✅ Services Header */}
      <div className="services-header">
        <h2 className="browse-by">Browse By</h2>
        <h2 className="browse-by">Services Categories</h2>
        <p className="services-description">
          At The Expert Ranking, we offer customised digital marketing services to boost SEO, 
          drive traffic, and increase conversions for businesses of all sizes.
        </p>
      </div>

      {/* ✅ Services Cards */}
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
            <p className="service-author">{service.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
