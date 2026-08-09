import React, { useEffect, useRef } from 'react';
import './style.css';

export default function DynamicModal({
  isOpen,
  onClose,
  title,
  children,
  footerActions,
  maxWidth = '500px',
  closeOnBackdropClick = true
}) {
  const modalRef = useRef(null);
  const previouslyFocusedElement = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      previouslyFocusedElement.current = document.activeElement;
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Basic focus trap setup
      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else {
      document.body.style.overflow = '';
      if (previouslyFocusedElement.current) {
        previouslyFocusedElement.current.focus();
      }
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="ease-modal-backdrop ease-fade-in-blur" 
      onClick={handleBackdropClick}
      aria-hidden="true"
    >
      <div 
        className="ease-modal-dialog ease-scale-up"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "ease-modal-title" : undefined}
        style={{ maxWidth }}
        tabIndex={-1}
        ref={modalRef}
      >
        <div className="ease-modal-header">
          {title && <h2 id="ease-modal-title" className="ease-modal-title">{title}</h2>}
          <button 
            className="ease-modal-close-btn ease-squish-button" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="ease-modal-body">
          {children}
        </div>

        {footerActions && (
          <div className="ease-modal-footer">
            {footerActions}
          </div>
        )}
      </div>
    </div>
  );
}
