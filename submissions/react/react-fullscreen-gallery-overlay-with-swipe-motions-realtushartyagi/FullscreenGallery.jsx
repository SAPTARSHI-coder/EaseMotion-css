import React, { useState, useEffect, useRef } from 'react';

const FullscreenGallery = ({ images, initialIndex = 0, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');
  
  // Swipe mechanics
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const minSwipeDistance = 50;

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  // Reset index if opened with a new initialIndex
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen, initialIndex]);

  const handleNext = () => {
    if (isAnimating || images.length <= 1) return;
    setDirection('next');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setIsAnimating(false);
    }, 300); // Matches CSS transition duration
  };

  const handlePrev = () => {
    if (isAnimating || images.length <= 1) return;
    setDirection('prev');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setIsAnimating(false);
    }, 300);
  };

  const onTouchStart = (e) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();
  };

  if (!isOpen) return null;

  return (
    <div className="ease-gallery-overlay">
      {/* Backdrop */}
      <div className="ease-gallery-backdrop" onClick={onClose}></div>
      
      {/* Close Button */}
      <button className="ease-gallery-close" onClick={onClose} aria-label="Close Gallery">
        &times;
      </button>

      {/* Main Container */}
      <div 
        className="ease-gallery-container ease-scale-up-entrance"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <button className="ease-gallery-nav ease-nav-prev" onClick={handlePrev} aria-label="Previous image">
          &#10094;
        </button>

        <div className="ease-gallery-viewport">
          <div 
            className={`ease-gallery-track ${isAnimating ? `animating-${direction}` : ''}`}
          >
            <img 
              src={images[currentIndex].url} 
              alt={images[currentIndex].alt || `Image ${currentIndex + 1}`} 
              className="ease-gallery-image"
              draggable="false"
            />
          </div>
          <div className="ease-gallery-caption">
             {images[currentIndex].caption || `${currentIndex + 1} / ${images.length}`}
          </div>
        </div>

        <button className="ease-gallery-nav ease-nav-next" onClick={handleNext} aria-label="Next image">
          &#10095;
        </button>
      </div>
      
      {/* Thumbnails (Optional Feature) */}
      <div className="ease-gallery-thumbnails ease-slide-up-thumbnails">
        {images.map((img, idx) => (
          <button 
            key={idx}
            className={`ease-thumbnail-btn ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setDirection(idx > currentIndex ? 'next' : 'prev');
              setIsAnimating(true);
              setTimeout(() => {
                setCurrentIndex(idx);
                setIsAnimating(false);
              }, 300);
            }}
          >
            <img src={img.url} alt={`Thumbnail ${idx + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default FullscreenGallery;
