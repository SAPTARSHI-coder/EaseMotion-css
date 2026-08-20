import React, { useState, useEffect, useRef } from 'react';

/**
 * Fullscreen Gallery Overlay with Swipe Motions
 * 
 * @param {boolean} isOpen - Controls visibility of the gallery overlay
 * @param {function} onClose - Callback when the overlay should close
 * @param {Array} images - Array of image objects { src, alt, title }
 * @param {number} initialIndex - Starting index when opened
 */
const GalleryOverlay = ({ 
  isOpen, 
  onClose, 
  images = [], 
  initialIndex = 0 
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [slideDirection, setSlideDirection] = useState('next'); // 'next' | 'prev'
  const [isSwiping, setIsSwiping] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Reset index when opened
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case 'ArrowLeft':
          handlePrev();
          break;
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length]);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setSlideDirection('next');
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSlideDirection('prev');
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Touch Swipe Logic
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchMove = (e) => {
    setIsSwiping(true);
    touchEndX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
    const threshold = 50; // Minimum swipe distance
    const diffX = touchEndX.current - touchStartX.current;
    
    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        handlePrev(); // Swiped right -> go to previous
      } else {
        handleNext(); // Swiped left -> go to next
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="ease-gallery-overlay">
      {/* Background Backdrop */}
      <div className="ease-gallery-backdrop" onClick={onClose} />
      
      {/* Header / Controls */}
      <div className="ease-gallery-header">
        <div className="ease-gallery-counter">
          {currentIndex + 1} / {images.length}
        </div>
        <button className="ease-gallery-close" onClick={onClose} aria-label="Close Gallery">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Navigation Buttons */}
      {currentIndex > 0 && (
        <button className="ease-gallery-nav is-prev" onClick={handlePrev} aria-label="Previous Image">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      )}

      {currentIndex < images.length - 1 && (
        <button className="ease-gallery-nav is-next" onClick={handleNext} aria-label="Next Image">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      )}

      {/* Main Image Viewport */}
      <div 
        className="ease-gallery-viewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* We use a React key mapped to the index to force re-render for CSS animations */}
        <div 
          key={currentIndex} 
          className={`ease-gallery-slide ${slideDirection === 'next' ? 'slide-in-right' : 'slide-in-left'} ${isSwiping ? 'is-swiping' : ''}`}
        >
          {images[currentIndex] && (
            <img 
              src={images[currentIndex].src} 
              alt={images[currentIndex].alt || 'Gallery image'} 
              className="ease-gallery-image"
            />
          )}
          {images[currentIndex]?.title && (
            <div className="ease-gallery-caption">
              {images[currentIndex].title}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryOverlay;
