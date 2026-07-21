import React, { useState, useRef, useEffect } from 'react';
import './style.css';

/**
 * Glassmorphism UI Tooltip Component
 * 
 * A beautiful, frosted-glass React tooltip wrapper utilizing an elastic CSS transition.
 * Designed for modern interfaces featuring layered elements and vibrant backgrounds.
 */
const GlassTooltip = ({ 
  content, 
  children, 
  position = "top", 
  glassBlur = "12px" 
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
      className="glass-tooltip-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      style={{ '--glass-blur': glassBlur }}
    >
      {/* The Target Element */}
      {children}

      {/* The Tooltip Popover */}
      {isRendered && (
        <div 
          className={`glass-tooltip-content ease-fade-in ${position} ${isVisible ? 'visible' : ''}`}
          role="tooltip"
          aria-hidden={!isVisible}
        >
          <div className="glass-tooltip-inner">
            {content}
          </div>
          {/* Tooltip directional pointer (also frosted) */}
          <div className="glass-tooltip-arrow"></div>
        </div>
      )}
    </div>
  );
};

export default GlassTooltip;
