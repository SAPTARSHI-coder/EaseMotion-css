import React, { useState, useRef } from 'react';
import './style.css';

const EaseAccordionGroup = ({ 
  items = [], 
  allowMultiple = false, 
  className = '' 
}) => {
  const [expandedIndices, setExpandedIndices] = useState(new Set());
  const headerRefs = useRef([]);

  const toggleItem = (index) => {
    setExpandedIndices(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleKeyDown = (e, index) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        toggleItem(index);
        break;
      case 'ArrowDown':
        e.preventDefault();
        const nextIndex = (index + 1) % items.length;
        headerRefs.current[nextIndex]?.focus();
        break;
      case 'ArrowUp':
        e.preventDefault();
        const prevIndex = (index - 1 + items.length) % items.length;
        headerRefs.current[prevIndex]?.focus();
        break;
      case 'Home':
        e.preventDefault();
        headerRefs.current[0]?.focus();
        break;
      case 'End':
        e.preventDefault();
        headerRefs.current[items.length - 1]?.focus();
        break;
      default:
        break;
    }
  };

  return (
    <div className={`ease-accordion-group ease-fade-in ${className}`}>
      {items.map((item, index) => {
        const isExpanded = expandedIndices.has(index);
        const headerId = `accordion-header-${index}`;
        const panelId = `accordion-panel-${index}`;

        return (
          <div 
            key={index} 
            className={`ease-accordion-item ${isExpanded ? 'is-expanded' : ''}`}
          >
            <button
              ref={el => headerRefs.current[index] = el}
              id={headerId}
              aria-expanded={isExpanded}
              aria-controls={panelId}
              className="ease-accordion-trigger"
              onClick={() => toggleItem(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              <span className="ease-accordion-title">{item.title}</span>
              <svg 
                className="ease-accordion-icon" 
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
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className="ease-accordion-panel-wrapper"
              hidden={!isExpanded && typeof document === 'undefined'}
            >
              <div className="ease-accordion-panel-content">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EaseAccordionGroup;
