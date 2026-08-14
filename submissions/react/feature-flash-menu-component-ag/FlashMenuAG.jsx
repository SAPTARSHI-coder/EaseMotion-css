import React from 'react';
import './style.css';

const FlashMenuAG = ({ items, onSelect }) => {
  return (
    <ul className="flash-menu-ag" role="menu">
      {items.map((item, index) => (
        <li key={index} role="none">
          <button 
            className="flash-menu-item-ag"
            role="menuitem"
            onClick={() => onSelect && onSelect(item)}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FlashMenuAG;
