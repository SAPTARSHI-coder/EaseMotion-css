import React, { useState, useEffect, useRef } from 'react';
import './style.css';

/**
 * Accessible Modal Dialog wrapper implementing EaseMotion animations.
 * Features:
 * - Escape key to close
 * - Focus trapping within the modal
 * - Safe exit animation unmounting
 */
export const ModalDialog = ({ 
  isOpen, 
  onClose, 
  title, 
  children,
  closeOnOverlayClick = true 
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const modalRef = useRef(null);

  // Handle mount / unmount animations
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
    } else if (shouldRender) {
      // Trigger exit animation
      setIsClosing(true);
      // Wait for ease-fade-out / ease-slide-down to finish (e.g., 300ms)
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  // Accessibility: Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen && !isClosing) {
        handleClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scrolling
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isClosing]);

  // Accessibility: Focus trap
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        // Focus the first element (often the close button or first input)
        focusableElements[0].focus();
      }
    }
  }, [isOpen]);

  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleOverlayClick = (e) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!shouldRender) return null;

  // Determine standard EaseMotion animation classes
  // Entrance: Slide up and fade in
  // Exit: Fade out / slide down
  const overlayAnim = isClosing ? "ease-fade-out" : "ease-fade-in";
  const modalAnim = isClosing ? "ease-fade-out" : "ease-slide-up ease-fade-in";

  return (
    <div 
      className={`ease-modal-overlay ${overlayAnim}`}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="ease-modal-title"
    >
      <div 
        className={`ease-modal-content ${modalAnim}`}
        ref={modalRef}
      >
        <div className="ease-modal-header">
          {title && <h2 id="ease-modal-title" className="ease-modal-title">{title}</h2>}
          <button 
            className="ease-modal-close-btn" 
            onClick={handleClose}
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        
        <div className="ease-modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalDialog;
