import React, { useState, useEffect, useCallback, useRef } from 'react';

// --- Individual Toast Component ---
const Toast = ({ id, type = 'info', title, message, duration = 3000, onRemove }) => {
  const [isLeaving, setIsLeaving] = useState(false);
  const timerRef = useRef(null);

  // Handle the CSS-based unmounting delay
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

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
  };

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
          <svg className="ease-toast-icon ease-toast-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        );
      case 'error':
        return (
          <svg className="ease-toast-icon ease-toast-error" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        );
      case 'warning':
        return (
          <svg className="ease-toast-icon ease-toast-warning" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        );
      default:
        return (
          <svg className="ease-toast-icon ease-toast-info" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        );
    }
  };

  const displayTitle = title || (type === 'info' ? 'Information' : type.charAt(0).toUpperCase() + type.slice(1));

  return (
    <div 
      className={`ease-toast ease-toast-enter ease-toast-${type} ${isLeaving ? 'ease-toast-leave' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="alert"
    >
      <div className="ease-toast-content">
        <div className="ease-toast-icon-container">
          {getIcon()}
        </div>
        <div className="ease-toast-text">
          <div className="ease-toast-title">{displayTitle}</div>
          <div className="ease-toast-message">{message}</div>
        </div>
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
const ToastStack = ({ toasts, removeToast }) => {
  return (
    <div className="ease-toast-stack" aria-live="polite">
      {toasts.map((toast) => (
        <Toast 
          key={toast.id}
          id={toast.id}
          type={toast.type}
          title={toast.title}
          message={toast.message}
          duration={toast.duration}
          onRemove={removeToast}
        />
      ))}
    </div>
  );
};

export default ToastStack;
