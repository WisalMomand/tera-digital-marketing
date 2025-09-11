import React from 'react';
import './Testimonials.css';
import Client1 from '../assets/client1.jpg';
import Client2 from '../assets/client2.jpg';
import Client3 from '../assets/client3.jpg';

const testimonials = [
  {
    name: "Bang Upin",
    company: "Redaping Alangan",
    review: "Technolosinh bonyok, kiri rungozhia maurai lacin mawan can tellther mana!",
    stars: 5,
    image: Client1
  },
  {
    name: "Ibuk Sukiʃən",
    company: "Iba Runan Tonga",
    review: "Makashi Rama, oku sakaonga berasa tingada di apartment karena boenga boeng yang telltheri mevori?",
    stars: 5,
    image: Client2
  },
  {
    name: "Mpok Ina",
    company: "Kayuvani Shazha",
    review: "Sangeri tejprayasu untuk kemong yang yang tidak terkula banyak?",
    stars: 5,
    image: Client3
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h2>What Our Clients Say About Us</h2>
        <p>
          We take pride in delivering exceptional results, and our clients' success stories 
          speak for themselves. See how businesses have grown with our digital marketing, 
          SEO, and advertising solutions.
        </p>
        <div className="divider"></div>
      </div>

      <div className="testimonial-cards">
        {testimonials.map((item, i) => (
          <div className="testimonial-card" key={i}>
            <div className="client-image-container">
              <img src={item.image} alt={item.name} className="client-image" />
            </div>
            <div className="client-info">
              <h4 className="client-name">{item.name}</h4>
              <p className="client-company">{item.company}</p>
            </div>
            <p className="review-text">"{item.review}"</p>
            <div className="stars">{'★'.repeat(item.stars)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;