import React, { useState, useRef, useEffect } from 'react';
import './style.css';

const EaseVirtualScroll = ({ items, itemHeight, viewportHeight }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef(null);

  const totalHeight = items.length * itemHeight;
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - 2);
  const endIndex = Math.min(items.length - 1, Math.ceil((scrollTop + viewportHeight) / itemHeight) + 2);

  const visibleItems = items.slice(startIndex, endIndex + 1).map((item, index) => ({
    ...item,
    index: startIndex + index
  }));

  const onScroll = (e) => {
    setScrollTop(e.target.scrollTop);
  };

  return (
    <div 
      className="ease-virtual-viewport" 
      style={{ height: viewportHeight }} 
      onScroll={onScroll} 
      ref={containerRef}
    >
      <div className="ease-virtual-container" style={{ height: totalHeight }}>
        {visibleItems.map(item => (
          <div 
            key={item.index} 
            className="ease-virtual-item"
            style={{ top: item.index * itemHeight, height: itemHeight }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EaseVirtualScroll;
