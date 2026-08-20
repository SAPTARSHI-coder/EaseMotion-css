import React, { useState, useEffect, useRef } from 'react';
import './style.css';

const RubberBandDrawer = ({ children, isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const drawerRef = useRef(null);

  // Trigger rubberband effect when open state changes
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  // Reset animation class after keyframes finish running
  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="drawer-overlay-nv" 
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={drawerRef}
        className={`drawer-panel-nv ${isAnimating ? 'rubberband-active-nv' : ''}`}
        onClick={(e) => e.stopPropagation()}
        onAnimationEnd={handleAnimationEnd}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        tabIndex="-1"
      >
        <header className="drawer-header-nv">
          <button 
            type="button" 
            className="drawer-close-btn-nv" 
            onClick={onClose}
            aria-label="Close drawer"
          >
            ✕
          </button>
        </header>
        <div className="drawer-body-nv">
          {children}
        </div>
      </div>
    </div>
  );
};

export default RubberBandDrawer;
