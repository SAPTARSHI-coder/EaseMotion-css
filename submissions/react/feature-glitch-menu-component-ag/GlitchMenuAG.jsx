import React, { useState } from 'react';
import './style.css';

const GlitchMenuAG = ({ items, onSelect }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <nav className="glitch-menu-ag" aria-label="Main Navigation">
      <ul className="glitch-menu-list-ag">
        {items.map((item, index) => (
          <li key={index} className="glitch-menu-item-ag">
            <button
              onClick={() => onSelect && onSelect(item)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`glitch-menu-btn-ag ${hoveredIndex === index ? 'is-glitching-ag' : ''}`}
              data-text={item.label}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default GlitchMenuAG;
