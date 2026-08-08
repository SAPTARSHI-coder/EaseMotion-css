import React, { useState, useEffect } from 'react';
import './style.css';

export default function TestimonialCarousel({ 
  testimonials = [], 
  autoPlay = true, 
  interval = 5000 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextSlide = () => {
    if (isAnimating || testimonials.length <= 1) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    if (isAnimating || testimonials.length <= 1) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    let timer;
    if (autoPlay && testimonials.length > 1) {
      timer = setInterval(nextSlide, interval);
    }
    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval, testimonials.length]);

  // Reset animation flag after the fade completes (assuming 400ms duration)
  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 400); 
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isAnimating]);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <div className="ease-testimonial-wrapper">
      <div className="ease-testimonial-container">
        {/* Render all slides, but only the active one has full opacity and the fade-in class */}
        {testimonials.map((t, index) => {
          const isActive = index === currentIndex;
          return (
            <div 
              key={t.id || index}
              className={`ease-testimonial-slide ${isActive ? 'ease-fade-in-active' : 'ease-fade-out-inactive'}`}
              aria-hidden={!isActive}
            >
              <div className="ease-testimonial-card">
                <div className="ease-quote-icon">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="ease-testimonial-text">{t.text}</p>
                
                <div className="ease-testimonial-author">
                  <img 
                    src={t.avatar || 'https://via.placeholder.com/60'} 
                    alt={t.name} 
                    className="ease-author-avatar"
                  />
                  <div className="ease-author-info">
                    <h4 className="ease-author-name">{t.name}</h4>
                    <p className="ease-author-role">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {testimonials.length > 1 && (
        <div className="ease-carousel-controls">
          <button 
            className="ease-control-btn ease-squish-button" 
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          
          <div className="ease-carousel-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`ease-indicator-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button 
            className="ease-control-btn ease-squish-button" 
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
