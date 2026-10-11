import React, { useState } from 'react';
import { propertiesData } from '../data/properties';
import { ArrowUpRight, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import './PropertySlider.css';

export const PropertySlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 3 slides per view on desktop, 2 on tablet, 1 on mobile
  const maxIndex = propertiesData.length - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section className="property-slider-section section-dark" id="properties" aria-label="Exclusive Properties">
      <div className="container">
        {/* Section Header */}
        <div className="property-slider-header">
          <div className="header-left">
            <span className="eyebrow eyebrow-dark">Exclusive Property Selection</span>
            <h2 className="property-slider-title">
              Exceptional Homes in Prime Locations
            </h2>
          </div>
          <div className="header-right">
            <p className="property-header-desc">
              Explore a handpicked selection of luxury residences located in the world’s most desirable areas.
            </p>
            <div className="header-action-row">
              <a href="#inquire" className="btn-primary">
                VIEW ALL PROPERTIES <ArrowUpRight size={16} />
              </a>
              {/* Slider Controls */}
              <div className="slider-nav-arrows">
                <button
                  type="button"
                  className="slider-arrow-btn"
                  onClick={handlePrev}
                  aria-label="Previous property slide"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  className="slider-arrow-btn"
                  onClick={handleNext}
                  aria-label="Next property slide"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="carousel-viewport">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(calc(-${currentIndex} * (33.333% + 16px)))`,
            }}
          >
            {propertiesData.map((prop) => (
              <article key={prop.id} className="property-card" aria-label={prop.title}>
                <div className="card-media-wrapper">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="card-media-img"
                    loading="lazy"
                    width={400}
                    height={480}
                  />
                  <div className="card-media-overlay" />
                  <div className="card-location-tag">
                    <MapPin size={14} className="tag-icon" /> {prop.location}
                  </div>
                </div>

                <div className="card-content">
                  <h3 className="card-title">{prop.title}</h3>
                  <p className="card-desc">{prop.description}</p>
                  <div className="card-footer">
                    <a href="#inquire" className="card-detail-link">
                      VIEW DETAILS <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="slider-dots" role="tablist" aria-label="Property slides">
          {propertiesData.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              role="tab"
              aria-selected={currentIndex === dotIdx}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`slider-dot ${currentIndex === dotIdx ? 'dot-active' : ''}`}
              onClick={() => setCurrentIndex(dotIdx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
