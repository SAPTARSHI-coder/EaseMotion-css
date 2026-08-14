import React, { useState, useRef } from 'react';
import './style.css';

/**
 * CollapseAccordion Component
 * 
 * An accessible accordion component that uses a CSS grid trick
 * to smoothly expand and collapse its content area.
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - The header text for the accordion
 * @param {React.ReactNode} props.children - The content to reveal
 */
const CollapseAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useRef(`accordion-content-${Math.random().toString(36).substr(2, 9)}`);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="accordion-wrapper-ag">
      <h3>
        <button
          type="button"
          className="accordion-header-ag"
          aria-expanded={isOpen}
          aria-controls={contentId.current}
          onClick={toggleAccordion}
        >
          <span>{title}</span>
          <span className="accordion-icon-ag" aria-hidden="true">
            {isOpen ? '−' : '+'}
          </span>
        </button>
      </h3>
      
      <div
        id={contentId.current}
        className={`accordion-content-grid-ag ${isOpen ? 'is-open-ag' : ''}`}
        role="region"
        aria-labelledby={contentId.current + '-btn'}
      >
        <div className="accordion-content-inner-ag">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapseAccordion;
