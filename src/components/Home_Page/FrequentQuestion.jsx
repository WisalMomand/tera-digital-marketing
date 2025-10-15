import React, { useState } from "react";
import "./FrequentQuestion.css";

const faqs = [
  {
    question: "What makes Prism Digital the best digital marketing agency in the UAE?",
    answer: "Prism Digital stands out due to its client-focused strategies, innovative campaigns, and measurable results that help businesses grow.",
  },
  {
    question: "What digital marketing services does Prism Digital offer?",
    answer: "We offer SEO, social media marketing, PPC advertising, email campaigns, web design, and much more.",
  },
  {
    question: "How does Prism Digital approach digital advertising strategies?",
    answer: "Our strategies combine data-driven insights, creativity, and ongoing optimization to ensure high ROI and growth for clients.",
  },
  {
    question: "Why is social media management important for businesses in the UAE?",
    answer: "Social media builds brand awareness, boosts customer engagement, and drives traffic that converts into leads and sales.",
  },
];

const FrequentQuestion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <h2>Frequently Asked Questions</h2>
        <button className="view-faqs-btn">View FAQs</button>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrequentQuestion;
