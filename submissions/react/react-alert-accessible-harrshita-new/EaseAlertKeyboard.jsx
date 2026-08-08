import React from 'react';
import './ease-alert.scss';

/**
 * EaseAlertKeyboard
 * An alert component with ARIA live region and keyboard dismissal (Esc).
 *
 * Props:
 * - type: 'info' | 'success' | 'warning' | 'error'
 * - children: ReactNode – message content
 * - onClose: () => void – called when user dismisses the alert
 */
export default function EaseAlertKeyboard({ type = 'info', children, onClose }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose?.();
    }
  };

  return (
    <div
      className={`ease-alert ease-alert-${type}`}
      role="alert"
      aria-live="assertive"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <span className="ease-alert-content">{children}</span>
      <button className="ease-alert-close" onClick={onClose} aria-label="Close alert">
        ×
      </button>
    </div>
  );
}
