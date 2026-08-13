import React, { useEffect, useState } from 'react';
import './style.css';

const SlideModalAG = ({ isOpen, onClose, title, children }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setShouldRender(true);
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (!isOpen) setShouldRender(false);
  };

  if (!shouldRender) return null;

  return (
    <div 
      className={`slide-modal-overlay-ag ${isOpen ? 'is-open-ag' : 'is-closed-ag'}`}
      aria-hidden={!isOpen}
      onClick={onClose}
    >
      <div 
        className="slide-modal-content-ag" 
        role="dialog" 
        aria-labelledby="slide-modal-title-ag" 
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className="slide-modal-header-ag">
          <h3 id="slide-modal-title-ag">{title}</h3>
          <button onClick={onClose} aria-label="Close modal" className="slide-modal-close-ag">&times;</button>
        </div>
        <div className="slide-modal-body-ag">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SlideModalAG;
