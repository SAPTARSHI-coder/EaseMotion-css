import React, { useState } from 'react';
import './style.css';

const Tooltip = ({ content, position = 'top', children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getPositionStyles = () => {
    switch (position) {
      case 'bottom':
        return { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: '8px', zIndex: 10 };
      case 'left':
        return { top: '50%', right: '100%', transform: 'translateY(-50%)', marginRight: '8px', zIndex: 10 };
      case 'right':
        return { top: '50%', left: '100%', transform: 'translateY(-50%)', marginLeft: '8px', zIndex: 10 };
      case 'top':
      default:
        return { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: '8px', zIndex: 10 };
    }
  };

  return (
    <div 
      className="ease-tooltip-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <div 
          className="ease-absolute ease-fade-in ease-slide-up ease-card-glass ease-padding-16"
          style={{ 
            ...getPositionStyles(),
            whiteSpace: 'nowrap'
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
