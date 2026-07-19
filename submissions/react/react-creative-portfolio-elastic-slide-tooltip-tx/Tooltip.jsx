import React, { useState, useRef, useEffect } from 'react';
import './style.css';

/**
 * Creative Portfolio Tooltip Component
 * 
 * A bold, neo-brutalist React tooltip wrapper utilizing an elastic CSS transition.
 * Designed for modern creative portfolios, featuring thick borders, offset solid shadows,
 * and high-contrast typography.
 */
const PortfolioTooltip = ({ 
  content, 
  children, 
  position = "top", 
  accentColor = "#ffeb3b" 
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
      className="portfolio-tooltip-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      style={{ '--portfolio-accent': accentColor }}
    >
      {/* The Target Element */}
      {children}

      {/* The Tooltip Popover */}
      {isRendered && (
        <div 
          className={`portfolio-tooltip-content ease-fade-in ${position} ${isVisible ? 'visible' : ''}`}
          role="tooltip"
          aria-hidden={!isVisible}
        >
          <div className="portfolio-tooltip-inner">
            {content}
          </div>
          {/* Tooltip directional pointer (bold styling) */}
          <div className="portfolio-tooltip-arrow"></div>
        </div>
      )}
    </div>
  );
};

export default PortfolioTooltip;
