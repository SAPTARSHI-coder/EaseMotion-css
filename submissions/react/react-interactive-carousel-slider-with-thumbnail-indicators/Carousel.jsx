import React, { useState, useEffect, useCallback } from 'react';

/**
 * Interactive Carousel Slider with Thumbnail Indicators
 * 
 * @param {Array} images - Array of objects with { url, alt }
 * @param {Number} autoPlayInterval - Interval in ms (default 5000), 0 to disable
 */
const Carousel = ({ images = [], autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (autoPlayInterval === 0 || isHovered) return;
    const timer = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlayInterval, isHovered, nextSlide]);

  if (!images || images.length === 0) {
    return <div className="ease-carousel-empty">No images provided</div>;
  }

  return (
    <div 
      className="ease-carousel-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Display Area */}
      <div className="ease-carousel-main">
        {/* Navigation Arrows */}
        <button 
          className="ease-carousel-arrow ease-carousel-prev" 
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          &#10094;
        </button>
        <button 
          className="ease-carousel-arrow ease-carousel-next" 
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          &#10095;
        </button>

        {/* Slides Track */}
        <div 
          className="ease-carousel-track" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <div key={idx} className="ease-carousel-slide">
              <img src={img.url} alt={img.alt || `Slide ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnail Indicators */}
      <div className="ease-carousel-thumbnails">
        {images.map((img, idx) => (
          <button
            key={idx}
            className={`ease-carousel-thumbnail-btn ${currentIndex === idx ? 'active' : ''}`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          >
            <img src={img.url} alt={`Thumbnail ${idx + 1}`} />
            <div className="ease-carousel-thumbnail-overlay"></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
