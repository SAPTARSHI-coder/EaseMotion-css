import React, { useEffect, useState, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';

/**
 * Dynamic Modal Dialog Component
 * 
 * @param {Boolean} isOpen - Controls visibility
 * @param {Function} onClose - Callback fired when close button or backdrop is clicked
 * @param {String} title - Modal header title
 * @param {ReactNode} children - Modal content
 * @param {ReactNode} footer - Optional footer content (e.g. action buttons)
 * @param {Boolean} closeOnBackdrop - Whether clicking outside closes the modal (default: true)
 */
const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  footer,
  closeOnBackdrop = true 
}) => {
  const [isRendered, setIsRendered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const modalRef = useRef(null);

  // Handle the two-step mount/unmount animation logic
  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      // Small delay ensures the component is in the DOM before adding the 'show' class
      // which triggers the CSS transition.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    } else {
      setIsAnimating(false);
      // Wait for CSS animation to finish (400ms) before removing from DOM
      const timer = setTimeout(() => {
        setIsRendered(false);
      }, 400); 
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle Escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when open
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

  const handleBackdropClick = (e) => {
    if (closeOnBackdrop && e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isRendered) return null;

  const modalContent = (
    <div 
      className={`ease-modal-backdrop ${isAnimating ? 'is-visible' : ''}`}
      onClick={handleBackdropClick}
      aria-hidden={!isOpen}
    >
      <div 
        className="ease-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ease-modal-title"
        ref={modalRef}
      >
        <div className="ease-modal-header">
          <h2 id="ease-modal-title" className="ease-modal-title">{title}</h2>
          <button 
            className="ease-modal-close-btn" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="ease-modal-body">
          {children}
        </div>

        {footer && (
          <div className="ease-modal-footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );

  // Render into a portal at the root of the document body
  // Note: For SSR environments (like Next.js), you might need to check if document exists first.
  return typeof document !== 'undefined' 
    ? createPortal(modalContent, document.body) 
    : null;
};

export default Modal;
