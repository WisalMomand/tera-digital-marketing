import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";

import EmailIcon from '../../assets/Email_icon.png';
import AddressIcon from '../../assets/Addres.png';  
import PhoneIcon from '../../assets/phone_icon.png';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceID = 'service_g8fsrki';
    const templateID = 'template_7otsked';
    const publicKey = 'mkCY2IZRBTnsDhal3';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setSubmitStatus('success');
        form.current.reset();
      }, (error) => {
        console.error('Email sending failed:', error.text);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* ================= Left Side Info ================= */}
        <div className="contact-info">
          <h2>Find us</h2>

          <div className="contact-detail">
            <img src={PhoneIcon} alt="Call Icon" className="contact-icon" />
            <div>
              <h3>Call Us</h3>
              <p>+ (08) 255 201 888</p>
            </div>
          </div>

          <div className="contact-detail">
            <img src={EmailIcon} alt="Email Icon" className="contact-icon" />
            <div>
              <h3>Email Now</h3>
              <p>Hello@procleaning.com</p>
            </div>
          </div>

          <div className="contact-detail">
            <img src={AddressIcon} alt="Address Icon" className="contact-icon" />
            <div>
              <h3>Address</h3>
              <p>7510, Brand Tower, New York, USA</p>
            </div>
          </div>
        </div>

        {/* ================= Right Side Form ================= */}
        <div className="contact-form-section">
          <div className="form-header">
            <h2>Contact Info</h2>
            <h3>Keep In Touch</h3>
            <p>
              We prioritize responding to your inquiries promptly to ensure you 
              receive the assistance you need in a timely manner
            </p>
          </div>

          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="from_email"
                placeholder="Email"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                required
              ></textarea>
            </div>

            {/* Hidden field for reply-to */}
            <input type="hidden" name="reply_to" value="from_email" />

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <div className="status-message success">
                ✅ Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="status-message error">
                ❌ Failed to send message. Please try again or contact us directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
