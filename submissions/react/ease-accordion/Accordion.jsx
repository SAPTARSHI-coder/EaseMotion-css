import React, { useState, useRef, useEffect } from 'react';
import './style.css';

/**
 * AccordionItem Component
 */
export const AccordionItem = ({ title, children, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="ease-accordion-item">
      <button 
        className="ease-accordion-header ease-hover-lift"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="ease-accordion-title">{title}</span>
        <span className={`ease-accordion-icon ${isOpen ? 'open' : ''}`}>
          &#9660;
        </span>
      </button>
      
      <div 
        className="ease-accordion-collapse"
        style={{ height: `${height}px` }}
      >
        <div 
          ref={contentRef} 
          className={`ease-accordion-content ${isOpen ? 'ease-slide-down ease-fade-in' : ''}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

/**
 * Accordion Container Component
 */
export const Accordion = ({ items = [], allowMultiple = false }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (index) => {
    if (allowMultiple) {
      setOpenIndexes((prev) => 
        prev.includes(index) 
          ? prev.filter((i) => i !== index) 
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => 
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div className="ease-accordion-container">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndexes.includes(index)}
          onClick={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
