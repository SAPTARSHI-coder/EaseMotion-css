import React, { useState, useRef } from 'react';
import './style.css';

const ExpandBannerAG = ({ title, children, defaultExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const contentRef = useRef(null);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="expand-banner-wrapper-ag">
      <button 
        className="expand-banner-header-ag" 
        onClick={toggleExpand}
        aria-expanded={isExpanded}
      >
        <span className="expand-banner-title-ag">{title}</span>
        <svg 
          className={`expand-banner-icon-ag ${isExpanded ? 'is-expanded-ag' : ''}`}
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div 
        className={`expand-banner-content-wrapper-ag ${isExpanded ? 'is-open-ag' : ''}`}
        aria-hidden={!isExpanded}
      >
        <div className="expand-banner-content-inner-ag" ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ExpandBannerAG;
