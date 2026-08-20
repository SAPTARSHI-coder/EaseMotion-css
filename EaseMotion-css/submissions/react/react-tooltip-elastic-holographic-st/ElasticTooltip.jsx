import React, { useState, useRef, useEffect, useId } from 'react';
import './style.css';

const ElasticTooltip = ({
  position = 'top',
  content,
  children,
  delay = 200,
  disabled = false,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);
  const tooltipId = useId();

  const allowedPositions = ['top', 'bottom', 'left', 'right'];
  const finalPosition = allowedPositions.includes(position) ? position : 'top';

  const showTooltip = () => {
    if (disabled) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const positionClass = `tooltip-${finalPosition}`;

  return (
    <div 
      className="tooltip-container"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      <div 
        className="tooltip-trigger ease-hover-lift" 
        aria-describedby={!disabled ? tooltipId : undefined}
      >
        {children}
      </div>

      {!disabled && (
        <div
          id={tooltipId}
          role="tooltip"
          className={`tooltip-content ease-fade-in ease-zoom-in ${positionClass} ${isVisible ? 'tooltip-visible' : ''} ${className}`}
          aria-hidden={!isVisible}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default ElasticTooltip;
