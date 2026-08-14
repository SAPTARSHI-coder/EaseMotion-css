import React, { useState, useEffect } from 'react';
import './style.css';

const FlashDrawerAG = ({ children, isOpen, onClose }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsExiting(false);
    } else if (!isOpen && shouldRender) {
      setIsExiting(true);
    }
  }, [isOpen, shouldRender]);

  const handleAnimationEnd = (e) => {
    // We only care about the animation on the drawer itself, not its children
    if (e.target !== e.currentTarget) return;
    
    if (isExiting) {
      setShouldRender(false);
      setIsExiting(false);
    }
  };

  // Allow clicking outside the drawer to close it
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('flash-drawer-overlay-ag')) {
      onClose();
    }
  };

  if (!shouldRender) return null;

  return (
    <div 
      className={`flash-drawer-overlay-ag ${isExiting ? 'is-exiting-ag' : 'is-entering-ag'}`}
      onClick={handleBackdropClick}
      aria-hidden="true"
    >
      <div 
        className={`flash-drawer-content-ag ${isExiting ? 'ease-flash-out-ag' : ''}`}
        onAnimationEnd={handleAnimationEnd}
        role="dialog"
        aria-modal="true"
        aria-label="Side Drawer"
      >
        <button 
          className="drawer-close-btn-ag" 
          onClick={onClose} 
          aria-label="Close drawer"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default FlashDrawerAG;
