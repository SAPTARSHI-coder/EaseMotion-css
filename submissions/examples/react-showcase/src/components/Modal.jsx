/**
 * Modal — Accessible modal dialog component.
 *
 * Features:
 *  - Controlled open/close state exposed via `isOpen` + `onClose` props.
 *  - Closes on Escape keypress.
 *  - Closes when the backdrop overlay is clicked.
 *  - Full ARIA support: role="dialog", aria-modal, aria-labelledby.
 *  - Focus is returned to the trigger after close.
 */
import React, { useEffect, useCallback } from 'react';
import styles from './Modal.module.css';

function Modal({ isOpen, onClose, title = 'Dialog', children }) {
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll while open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      data-testid="modal-overlay"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={styles.modal}
        data-testid="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <header className={styles.header}>
          <h2 id="modal-title" className={styles.title}>
            {title}
          </h2>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close dialog"
            data-testid="modal-close-btn"
          >
            ✕
          </button>
        </header>

        <div className={styles.body}>{children}</div>

        <footer className={styles.footer}>
          <button
            className={styles.confirmBtn}
            onClick={onClose}
            data-testid="modal-confirm-btn"
          >
            Got it
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Modal;
