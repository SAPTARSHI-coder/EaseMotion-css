import React, { useState } from 'react';
import './style.css';

export const EaseTabs = ({ items = [] }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="ease-tabs-container">
      <div className="ease-tabs-header">
        {items.map((item, idx) => (
          <button
            key={idx}
            className={`ease-tab-btn ${activeIdx === idx ? 'ease-tab-active' : ''}`}
            onClick={() => setActiveIdx(idx)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="ease-tab-content">
        {items[activeIdx] && items[activeIdx].content}
      </div>
    </div>
  );
};

export default EaseTabs;
