import React, { useState } from 'react';
import './style.css';

const FadeTooltipAG = ({ isLoading, message, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="fade-tooltip-trigger-ag"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
      tabIndex={0}
      aria-describedby="fade-tooltip-ag"
    >
      {children}
      
      {isVisible && (
        <div 
          id="fade-tooltip-ag" 
          className={`fade-tooltip-ag ${isLoading ? 'is-loading-ag' : ''}`}
          role="status"
          aria-live="polite"
        >
          {isLoading ? (
            <span className="fade-tooltip-loading-ag">
              <span className="dot-ag">.</span>
              <span className="dot-ag">.</span>
              <span className="dot-ag">.</span>
              Saving
            </span>
          ) : (
            message
          )}
        </div>
      )}
    </div>
  );
};

export default FadeTooltipAG;
