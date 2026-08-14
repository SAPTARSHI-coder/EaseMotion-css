import React, { useState } from 'react';
import './style.css';

export default function EaseAccordionGroup({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="ease-accordion-group">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={`ease-accordion-item ${isOpen ? 'is-open' : ''}`}>
            <button className="ease-accordion-header" onClick={() => toggle(index)}>
              <span>{item.title}</span>
              <span className="ease-accordion-icon">▼</span>
            </button>
            <div className="ease-accordion-body">
              <div className="ease-accordion-content">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
