import React, { useState } from 'react';
import './style.css';

export const EaseAccordion = ({ items = [] }) => {
  const [activeIdx, setActiveIdx] = useState(null);

  const toggle = (idx) => {
    setActiveIdx(activeIdx === idx ? null : idx);
  };

  return (
    <div className="ease-accordion-group">
      {items.map((item, idx) => (
        <div key={idx} className={`ease-acc-item ${activeIdx === idx ? 'ease-acc-open' : ''}`}>
          <button className="ease-acc-header" onClick={() => toggle(idx)}>
            <span>{item.title}</span>
            <span className="ease-acc-icon">&#10095;</span>
          </button>
          {activeIdx === idx && (
            <div className="ease-acc-body">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EaseAccordion;
