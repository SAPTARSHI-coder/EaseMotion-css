import React, { useState } from 'react';
import './style.css';

/**
 * WiggleAccordion
 * 
 * A React component representing an accordion item.
 * The header area applies a subtle wiggle animation when hovered to encourage interaction.
 * 
 * @param {Object} props
 * @param {string} props.title - The text for the accordion header.
 * @param {React.ReactNode} props.children - The collapsible content.
 * @param {boolean} [props.defaultExpanded=false] - Whether the accordion starts open.
 */
const WiggleAccordion = ({ 
  title, 
  children,
  defaultExpanded = false,
  ...props 
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleAccordion = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={`ease-wiggle-accordion-ag ${isExpanded ? 'expanded-ag' : ''}`} {...props}>
      <button 
        className="ease-wiggle-accordion-header-ag" 
        onClick={toggleAccordion}
        aria-expanded={isExpanded}
      >
        <span className="ease-wiggle-accordion-title-ag">{title}</span>
        <svg 
          className="ease-wiggle-accordion-icon-ag" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      
      <div 
        className="ease-wiggle-accordion-content-wrapper-ag" 
        aria-hidden={!isExpanded}
      >
        <div className="ease-wiggle-accordion-content-inner-ag">
          {children}
        </div>
      </div>
    </div>
  );
};

export default WiggleAccordion;
