import React, { useState, useEffect } from 'react';
import './style.css';

const WiggleModalAG = ({ isOpen, onClose, title, children }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
    } else if (shouldRender) {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, 300); // match exit animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  if (!shouldRender) return null;

  return (
    <div className={`wiggle-modal-backdrop-ag ${isClosing ? 'is-closing-ag' : ''}`} aria-hidden={!isOpen}>
      <div 
        className={`wiggle-modal-dialog-ag ${isClosing ? 'is-closing-ag' : ''}`}
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="wiggle-modal-title-ag"
      >
        <div className="wiggle-modal-header-ag">
          <h2 id="wiggle-modal-title-ag">{title}</h2>
          <button onClick={onClose} aria-label="Close Modal" className="wiggle-modal-close-ag">&times;</button>
        </div>
        <div className="wiggle-modal-body-ag">
          {children}
        </div>
      </div>
    </div>
  );
};

export default WiggleModalAG;
