import React, { useEffect, useRef } from 'react';
import './style.css';

/**
 * ZoomModal — an accessible modal with a smooth zoom-in entrance
 * and zoom-out exit animation.
 *
 * Props:
 *  - isOpen (bool): whether the modal is visible
 *  - onClose (func): called when the modal should close
 *  - title (string, optional): accessible modal title
 *  - children: modal body content
 */
export default function ZoomModal({ isOpen, onClose, title, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', handleKeyDown);
    modalRef.current?.focus();

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="ease-zoom-modal-backdrop-sh"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="ease-zoom-modal-sh"
        role="dialog"
        aria-modal="true"
        aria-label={title || 'Dialog'}
        tabIndex={-1}
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="ease-zoom-modal-close-sh"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ✕
        </button>
        {title && <h2 className="ease-zoom-modal-title-sh">{title}</h2>}
        <div className="ease-zoom-modal-body-sh">{children}</div>
      </div>
    </div>
  );
}
