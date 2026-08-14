import React, { useState } from 'react';
import './style.css';

/**
 * FitnessTooltip Component
 * Features a Shimmer Pulse effect utilizing EaseMotion utility classes.
 */
const FitnessTooltip = ({ 
  children, 
  content, 
  position = 'top', 
  colorTheme = 'cyan' 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div 
      className="fitness-tooltip-container"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      
      {isVisible && (
        <div 
          className={`fitness-tooltip-box tooltip-${position} theme-${colorTheme} ease-fade-in ease-zoom-in`}
          role="tooltip"
        >
          {/* The Shimmer Pulse Element */}
          <div className="shimmer-pulse-overlay"></div>
          
          <div className="tooltip-content">
            {content}
          </div>
          
          <div className={`tooltip-arrow arrow-${position}`}></div>
        </div>
      )}
    </div>
  );
};

export default FitnessTooltip;