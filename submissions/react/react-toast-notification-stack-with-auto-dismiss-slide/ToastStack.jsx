import React, { useState, useEffect, useCallback, useRef } from 'react';

// --- Individual Toast Component ---
const Toast = ({ id, type = 'info', message, duration = 3000, onRemove }) => {
  const [isLeaving, setIsLeaving] = useState(false);
  const timerRef = useRef(null);

  // Handle the CSS-based removal animation
  const initiateRemoval = useCallback(() => {
    setIsLeaving(true);
    // Wait for the slide-out animation (400ms) to finish before actually unmounting
    setTimeout(() => {
      onRemove(id);
    }, 400); 
  }, [id, onRemove]);

  useEffect(() => {
    // Auto-dismiss timer
    if (duration > 0) {
      timerRef.current = setTimeout(() => {
        initiateRemoval();
      }, duration);
    }
    return () => clearTimeout(timerRef.current);
  }, [duration, initiateRemoval]);

  // Pause timer on hover
  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
  };

  // Resume timer on mouse leave
  const handleMouseLeave = () => {
    if (duration > 0) {
      timerRef.current = setTimeout(() => {
        initiateRemoval();
      }, duration);
    }
  };

  // Icons based on type
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
      
      {/* Progress Bar (pure CSS animation) */}
      {duration > 0 && (
        <div 
          className={`ease-toast-progress ${type}`} 
          style={{ animationDuration: `${duration}ms`, animationPlayState: isLeaving ? 'paused' : 'running' }}
        ></div>
      )}
    </div>
  );
};

// --- Toast Stack Manager ---
/**
 * Toast Stack Component
 * Place this once at the root of your app. 
 * Pass `toasts` array and `removeToast` callback from your global state manager (e.g. Context, Zustand).
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
