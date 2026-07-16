import React, { useEffect } from 'react';

/**
 * DynamicModalDialog
 * A modal that appears with a backdrop blur and a fluid scale-up entrance animation using EaseMotion CSS.
 *
 * Props:
 *   isOpen: boolean - Controls the visibility of the modal.
 *   onClose: () => void - Callback triggered when the backdrop or close button is clicked.
 *   children: ReactNode - Content rendered inside the modal.
 */
export default function DynamicModalDialog({ isOpen, onClose, children }) {
  // Prevent background scrolling when modal is open
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
    <div className="ease-modal-backdrop" onClick={onClose}>
      <div
        className="ease-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="ease-modal-close" 
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
