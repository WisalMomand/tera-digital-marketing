import React from 'react';
import './Testimonials.css';
// import Client1 from '../../assets/client1.jpg';
// import Client2 from '../../assets/client2.jpg';
// import Client3 from '../../assets/client3.jpg';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Bang Upin",
      position: "Pedagang Akongan",
      image: <img src="/client1.jpg" alt="Client 1" />,
      quote: "Terimakasih banyak, kini ruangangku menjadi lebih mewah dan terlihat mahal",
      rating: 4
    },
    {
      id: 2,
      name: "Ibuk Sukijan",
      position: "Ibu Rumah Tangga",
      image: <img src="/client2.jpg" alt="Client 2" />,
      quote: "Makasih Panto, aku sekarang berasa tinggal di apartmen karena barang-barang yang terlihat mewah",
      rating: 4
    },
    {
      id: 3,
      name: "Mpok Ing",
      position: "Karyawan Swasta",
      image: <img src="/client3.jpg" alt="Client 3" />,
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
