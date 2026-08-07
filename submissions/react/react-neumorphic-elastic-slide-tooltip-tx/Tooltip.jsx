import React, { useState, useRef, useEffect } from 'react';
import './style.css';

/**
 * Neumorphic Soft Tooltip Component
 * 
 * A tactile React tooltip wrapper that utilizes a highly elastic CSS transition.
 * Features inset and outset box-shadows for a premium extruded Neumorphic aesthetic.
 */
const NeumorphicTooltip = ({ 
  content, 
  children, 
  position = "top", 
  accentColor = "#3182ce" 
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
      className="neu-tooltip-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      style={{ '--neu-accent': accentColor }}
    >
      {/* The Target Element */}
      {children}

      {/* The Tooltip Popover */}
      {isRendered && (
        <div 
          className={`neu-tooltip-content ease-fade-in ${position} ${isVisible ? 'visible' : ''}`}
          role="tooltip"
          aria-hidden={!isVisible}
        >
          <div className="neu-tooltip-inner">
            {content}
          </div>
          {/* Neumorphic Connector Pointer */}
          <div className="neu-tooltip-arrow"></div>
        </div>
      )}
    </div>
  );
};

export default NeumorphicTooltip;
