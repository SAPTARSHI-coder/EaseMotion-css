import React, { useEffect } from 'react';
import './style.css';

export default function EaseDrawerPanel({ isOpen, onClose, children, position = 'right' }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="ease-drawer-overlay" onClick={onClose}>
      <div
        className={`ease-drawer-content position-${position}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="ease-drawer-close" onClick={onClose} aria-label="Close drawer">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
