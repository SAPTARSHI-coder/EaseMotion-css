import React, { useEffect, useState, useRef } from 'react';

/**
 * Modal — A dynamic dialog with backdrop blur and spring scale-up entrance.
 *
 * @param {boolean}  isOpen   - Controls whether the modal is visible
 * @param {function} onClose  - Callback fired when the backdrop or close button is clicked
 * @param {string}   title    - Modal header title
 * @param {ReactNode} children- The main content of the modal
 * @param {ReactNode} footer  - Optional footer content (e.g. action buttons)
 * @param {string}   size     - 'sm' | 'md' (default) | 'lg' | 'full'
 */
const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
}) => {
  // We use an internal state to handle the unmount animation delay
  const [shouldRender, setShouldRender] = useState(false);
  const modalRef = useRef(null);

  // Sync internal render state with the open prop to allow CSS exit animations
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Wait for exit animation to complete (250ms matches CSS)
      const timer = setTimeout(() => setShouldRender(false), 250);
      return () => clearTimeout(timer);
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Handle outside click
  const handleBackdropClick = (e) => {
    // Only close if clicking exactly on the backdrop, not inside the modal
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!shouldRender) return null;

  return (
    <div 
      className={`ease-modal-backdrop ${isOpen ? 'is-open' : 'is-closed'}`}
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div
        ref={modalRef}
        className={`ease-modal-dialog ease-modal-dialog--${size} ${isOpen ? 'is-open' : 'is-closed'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="ease-modal-title"
      >
        {/* ── Header ── */}
        <div className="ease-modal-header">
          <h2 id="ease-modal-title" className="ease-modal-title">{title}</h2>
          <button 
            className="ease-modal-close" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* ── Body ── */}
        <div className="ease-modal-body">
          {children}
        </div>

        {/* ── Footer ── */}
        {footer && (
          <div className="ease-modal-footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
