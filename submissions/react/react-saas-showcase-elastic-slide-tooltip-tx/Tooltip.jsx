import React, { useState, useRef, useEffect } from 'react';
import './style.css';

/**
 * SaaS Showcase Tooltip Component
 * 
 * A clean, modern React tooltip wrapper utilizing a snappy elastic CSS transition.
 * Designed for modern SaaS dashboards, featuring soft drop shadows and crisp typography.
 */
const SaasTooltip = ({ 
  content, 
  children, 
  position = "top", 
  accentColor = "#4f46e5" 
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
      className="saas-tooltip-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      style={{ '--saas-accent': accentColor }}
    >
      {/* The Target Element */}
      {children}

      {/* The Tooltip Popover */}
      {isRendered && (
        <div 
          className={`saas-tooltip-content ease-fade-in ${position} ${isVisible ? 'visible' : ''}`}
          role="tooltip"
          aria-hidden={!isVisible}
        >
          <div className="saas-tooltip-inner">
            {content}
          </div>
          {/* Tooltip directional pointer */}
          <div className="saas-tooltip-arrow"></div>
        </div>
      )}
    </div>
  );
};

export default SaasTooltip;
