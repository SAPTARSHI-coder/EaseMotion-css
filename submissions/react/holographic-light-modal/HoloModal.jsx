import React, { useEffect } from 'react';
import './style.css';

/**
 * HoloModal Component
 * Features a Holographic Shimmer Pulse effect designed for premium, 
 * light-mode glassmorphic interfaces.
 */
const HoloModal = ({ 
  isOpen, 
  onClose, 
  title, 
  children 
}) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="holo-modal-overlay ease-fade-in">
      <div className="holo-modal-backdrop" onClick={onClose} aria-label="Close modal"></div>
      
      {/* The main modal box using EaseMotion utility classes for mounting */}
      <div 
        className="holo-modal-box ease-fade-in ease-zoom-in" 
        role="dialog" 
        aria-modal="true"
      >
        {/* The Holographic Shimmer Pulse Element */}
        <div className="holo-shimmer-overlay"></div>
        
        <div className="holo-modal-content">
          <div className="holo-modal-header">
            {title && <h3 className="holo-modal-title">{title}</h3>}
            <button className="holo-close-btn" onClick={onClose} aria-label="Close">
              ✕
            </button>
          </div>
          
          <div className="holo-modal-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoloModal;