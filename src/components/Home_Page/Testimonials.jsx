
import React from 'react';
import './Testimonials.css';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Bang Upin",
      position: "Pedagang Akongan",
      image: "/client1.jpg", // ✅ from public folder
      quote: "Terimakasih banyak, kini ruangangku menjadi lebih mewah dan terlihat mahal",
      rating: 4
    },
    {
      id: 2,
      name: "Ibuk Sukijan",
      position: "Ibu Rumah Tangga",
      image: "/client2.jpg", // ✅ from public folder
      quote: "Makasih Panto, aku sekarang berasa tinggal di apartmen karena barang-barang yang terlihat mewah",
      rating: 4
    },
    {
      id: 3,
      name: "Mpok Ing",
      position: "Karyawan Swasta",
      image: "/client3.jpg", // ✅ from public folder
      quote: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
      rating: 4
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span 
        key={index} 
        className={`star ${index < rating ? 'filled' : ''}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="testimonial-header">
          <h2 className="testimonial-title">Our Clients Testimonials</h2>
          <p className="testimonial-description">
            We take pride in delivering exceptional results, and our clients' success stories speak for themselves. 
            See how businesses have grown with our digital marketing, SEO, and advertising solutions.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="avatar-container">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="avatar-image"
                  loading="eager" // ✅ loads immediately, no delay
                />
              </div>
              
              <div className="testimonial-content">
                <h3 className="client-name">{testimonial.name}</h3>
                <p className="client-position">{testimonial.position}</p>
                
                <blockquote className="testimonial-quote">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="rating">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
