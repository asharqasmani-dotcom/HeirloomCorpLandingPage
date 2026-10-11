import React, { useState } from 'react';
import { testimonialsData } from '../data/testimonials';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonialsData.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < testimonialsData.length - 1 ? prev + 1 : 0));
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="testimonials-section section-light" id="testimonials" aria-label="Client Testimonials">
      <div className="container">
        {/* Section Header */}
        <div className="testimonials-header">
          <div className="header-left">
            <span className="eyebrow eyebrow-light">Client Trust Stories</span>
            <h2 className="testimonials-title">
              Trusted by Global Luxury Clients
            </h2>
          </div>
          <div className="header-right">
            <p className="testimonials-header-desc">
              Our clients value discretion, expertise, and results. Here’s what they say about their experience working with our team.
            </p>
            <div className="action-row">
              <a href="#inquire" className="btn-outline-on-light">
                MORE TESTIMONIALS
              </a>
              <div className="carousel-buttons">
                <button
                  type="button"
                  className="carousel-btn"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  className="carousel-btn"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Active Display Card */}
        <div className="testimonial-card-wrapper">
          <article className="testimonial-card" key={current.id}>
            <div className="quote-icon-box">
              <Quote size={40} className="quote-icon" />
            </div>

            <p className="testimonial-quote-text">
              {current.quote}
            </p>

            <div className="testimonial-author-block">
              <img
                src={current.avatar}
                alt={current.author}
                className="author-avatar"
                width={64}
                height={64}
                loading="lazy"
              />
              <div className="author-details">
                <h4 className="author-name">{current.author}</h4>
                <span className="author-role">{current.role}</span>
                <div className="author-rating" aria-label={`${current.rating} stars`}>
                  ★★★★★
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Small avatar carousel list */}
        <div className="avatar-preview-row">
          {testimonialsData.map((t, idx) => (
            <button
              key={t.id}
              type="button"
              className={`avatar-preview-btn ${currentIndex === idx ? 'avatar-active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Select testimonial by ${t.author}`}
            >
              <img src={t.avatar} alt={t.author} className="preview-img" width={48} height={48} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
