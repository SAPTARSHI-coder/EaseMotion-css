import React, { useEffect } from 'react';
import './style.css';

export const EaseModal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="ease-modal-overlay" onClick={onClose}>
      <div className="ease-modal-container" onClick={e => e.stopPropagation()}>
        <div className="ease-modal-header">
          <h3>{title}</h3>
          <button className="ease-modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="ease-modal-body">{children}</div>
      </div>
    </div>
  );
};

export default EaseModal;
