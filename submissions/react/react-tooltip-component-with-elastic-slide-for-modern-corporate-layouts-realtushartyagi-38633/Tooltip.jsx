import React, { useState, useRef, useEffect } from 'react';
import './style.css';

/**
 * Tooltip Component
 * 
 * A React Tooltip component utilizing a smooth Elastic Slide interaction 
 * transition, designed for Modern Corporate interfaces.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The element that triggers the tooltip.
 * @param {string} props.content - The text content to display inside the tooltip.
 * @param {number} [props.delay=100] - Delay in milliseconds before showing the tooltip.
 */
const Tooltip = ({ children, content, delay = 100 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);

  const showTooltip = () => {
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

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="ease-corp-tooltip-wrapper"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {/* 
        We wrap the children to ensure events fire correctly, 
        or assume the user passes a valid element. 
        For full accessibility, the trigger should be focusable.
      */}
      {children}
      
      <div 
        className={`ease-corp-tooltip ${isVisible ? 'is-active' : ''}`}
        role="tooltip"
        aria-hidden={!isVisible}
      >
        {content}
      </div>
    </div>
  );
};

export default Tooltip;
