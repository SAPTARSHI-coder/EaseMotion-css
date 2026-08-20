import React, { useState, useRef, useEffect } from 'react';
import './style.css';

/**
 * Sci-Fi Console Tooltip Component
 * 
 * A futuristic React tooltip wrapper that utilizes a highly elastic CSS transition.
 * Features neon glowing borders and a scanline effect for a premium sci-fi aesthetic.
 */
const SciFiTooltip = ({ 
  content, 
  children, 
  position = "top", 
  delay = 100, 
  glowColor = "#00f0ff" 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsRendered(true);
    // Slight delay before making it visible to allow DOM to paint
    setTimeout(() => setIsVisible(true), 10);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
    // Wait for the slide-out animation to finish before unmounting
    timeoutRef.current = setTimeout(() => {
      setIsRendered(false);
    }, 400); // matches CSS transition duration
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div 
      className="scifi-tooltip-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      style={{ '--tooltip-glow': glowColor }}
    >
      {/* The Target Element */}
      {children}

      {/* The Tooltip Popover */}
      {isRendered && (
        <div 
          className={`scifi-tooltip-content ease-fade-in ${position} ${isVisible ? 'visible' : ''}`}
          role="tooltip"
          aria-hidden={!isVisible}
        >
          <div className="scifi-scanline"></div>
          <div className="scifi-tooltip-inner">
            {content}
          </div>
          {/* Cyberpunk corner decors */}
          <span className="scifi-corner top-left"></span>
          <span className="scifi-corner bottom-right"></span>
        </div>
      )}
    </div>
  );
};

export default SciFiTooltip;
