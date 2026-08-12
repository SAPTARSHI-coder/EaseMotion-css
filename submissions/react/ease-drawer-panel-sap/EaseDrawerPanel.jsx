import React, { useState, useRef, useEffect } from 'react';
import './style.css';

const EaseDrawerPanel = ({ 
  isOpen, 
  onClose, 
  direction = 'bottom', // 'bottom' or 'left' or 'right'
  children 
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [translate, setTranslate] = useState(0);
  const startPos = useRef(0);
  const currentPos = useRef(0);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTranslate(0);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    startPos.current = direction === 'bottom' ? e.touches[0].clientY : e.touches[0].clientX;
    currentPos.current = startPos.current;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const pos = direction === 'bottom' ? e.touches[0].clientY : e.touches[0].clientX;
    currentPos.current = pos;
    const diff = pos - startPos.current;
    
    // Only allow dragging in the direction of closing
    if (direction === 'bottom' && diff > 0) {
      setTranslate(diff);
    } else if (direction === 'left' && diff < 0) {
      setTranslate(diff);
    } else if (direction === 'right' && diff > 0) {
      setTranslate(diff);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    const diff = currentPos.current - startPos.current;
    
    const threshold = 100; // Swipe threshold to close
    
    if (direction === 'bottom' && diff > threshold) {
      onClose();
    } else if (direction === 'left' && diff < -threshold) {
      onClose();
    } else if (direction === 'right' && diff > threshold) {
      onClose();
    } else {
      setTranslate(0);
    }
  };

  if (!isOpen && !isDragging && translate === 0) return null;

  const panelStyle = {
    transform: isDragging 
      ? `translate${direction === 'bottom' ? 'Y' : 'X'}(${translate}px)` 
      : '',
    transition: isDragging ? 'none' : 'transform 0.3s ease-out'
  };

  return (
    <div className="ease-drawer-overlay ease-fade-in" onClick={onClose}>
      <div 
        className={`ease-drawer-panel ease-drawer-${direction}`}
        style={panelStyle}
        onClick={e => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        tabIndex="-1"
      >
        <div className="ease-drawer-handle"></div>
        <div className="ease-drawer-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default EaseDrawerPanel;
