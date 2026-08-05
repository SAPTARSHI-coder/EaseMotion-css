import React, { useState, useEffect } from 'react';
import './style.css';

const ZoomModalAG = ({ isOpen, onClose, title, children }) => {
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
      }, 400); // Wait for exit animation to complete
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  if (!shouldRender) return null;

  return (
    <div className={`zoom-modal-backdrop-ag ${isClosing ? 'is-closing-ag' : ''}`} aria-hidden={!isOpen}>
      <div 
        className={`zoom-modal-dialog-ag ${isClosing ? 'is-closing-ag' : ''}`}
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="modal-title-ag"
      >
        <div className="zoom-modal-header-ag">
          <h2 id="modal-title-ag">{title}</h2>
          <button onClick={onClose} aria-label="Close Modal" className="zoom-modal-close-ag">&times;</button>
        </div>
        <div className="zoom-modal-body-ag">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ZoomModalAG;
