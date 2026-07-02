import React, { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Individual Toast Component
 *
 * @param {String} id - Unique identifier for the toast
 * @param {String} type - Visual variant: 'success' | 'error' | 'info'
 * @param {String} message - Text content to display
 * @param {Number} duration - Auto-dismiss timeout in ms (0 = no auto-dismiss)
 * @param {Function} onRemove - Callback to remove toast from parent stack
 */
const Toast = ({ id, type = 'info', message, duration = 3000, onRemove }) => {
  const [isLeaving, setIsLeaving] = useState(false);
  const timerRef = useRef(null);

  const initiateRemoval = useCallback(() => {
    setIsLeaving(true);
    setTimeout(() => {
      onRemove(id);
    }, 400);
  }, [id, onRemove]);

  useEffect(() => {
    if (duration > 0) {
      timerRef.current = setTimeout(() => {
        initiateRemoval();
      }, duration);
    }
    return () => clearTimeout(timerRef.current);
  }, [duration, initiateRemoval]);

  const handleMouseEnter = useCallback(() => {
    clearTimeout(timerRef.current);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (duration > 0) {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        initiateRemoval();
      }, duration);
    }
  }, [duration, initiateRemoval]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg className="ease-toast-icon ease-toast-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        );
      case 'error':
        return (
          <svg className="ease-toast-icon ease-toast-error" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        );
      default:
        return (
          <svg className="ease-toast-icon ease-toast-info" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        );
    }
  };

  return (
    <div
      className={`ease-toast ease-toast-enter ${isLeaving ? 'ease-toast-leave' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="alert"
    >
      <div className="ease-toast-content">
        {getIcon()}
        <span className="ease-toast-message">{message}</span>
      </div>
      <button
        className="ease-toast-close"
        onClick={initiateRemoval}
        aria-label="Close notification"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      {duration > 0 && (
        <div
          className={`ease-toast-progress ${type}`}
          style={{ animationDuration: `${duration}ms`, animationPlayState: isLeaving ? 'paused' : 'running' }}
        ></div>
      )}
    </div>
  );
};

/**
 * Toast Stack Manager
 *
 * @param {Array} toasts - Array of toast objects { id, type, message, duration }
 * @param {Function} removeToast - Callback invoked with toast id to remove it
 */
const ToastStack = ({ toasts, removeToast }) => {
  return (
    <div className="ease-toast-stack" aria-live="polite">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          type={toast.type}
          message={toast.message}
          duration={toast.duration}
          onRemove={removeToast}
        />
      ))}
    </div>
  );
};

export default ToastStack;
