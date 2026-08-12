import React, { useState, useRef, useEffect, useCallback } from 'react';

/**
 * Interactive Comparison Slider (Before/After Reveal)
 * 
 * @param {String} beforeImage - URL of the 'before' image
 * @param {String} afterImage - URL of the 'after' image
 * @param {String} beforeLabel - Label text for the 'before' state (default: "Before")
 * @param {String} afterLabel - Label text for the 'after' state (default: "After")
 */
const ComparisonSlider = ({ 
  beforeImage, 
  afterImage, 
  beforeLabel = 'Before', 
  afterLabel = 'After' 
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    // Calculate mouse position relative to the container width (0 to 1)
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(percentage);
  }, [isDragging]);

  const handleMouseMove = useCallback((e) => {
    handleMove(e.clientX);
  }, [handleMove]);

  const handleTouchMove = useCallback((e) => {
    handleMove(e.touches[0].clientX);
  }, [handleMove]);

  // Global event listeners to handle dragging outside the container bounds
  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleTouchMove]);

  return (
    <div 
      className="ease-comparison-container"
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* Background (After Image) */}
      <div className="ease-comparison-layer ease-comparison-after">
        <img src={afterImage} alt="After" draggable="false" />
        <span className="ease-comparison-label ease-label-after">{afterLabel}</span>
      </div>

      {/* Foreground (Before Image) Clipped by sliderPosition */}
      <div 
        className="ease-comparison-layer ease-comparison-before"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={beforeImage} alt="Before" draggable="false" />
        <span className="ease-comparison-label ease-label-before">{beforeLabel}</span>
      </div>

      {/* Interactive Slider Handle */}
      <div 
        className="ease-comparison-handle"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="ease-comparison-handle-line"></div>
        <div className="ease-comparison-handle-button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlider;
