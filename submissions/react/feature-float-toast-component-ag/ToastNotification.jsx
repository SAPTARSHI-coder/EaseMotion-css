import React from 'react';
import './style.css';

export const ToastNotification = ({
  title,
  message,
  type = 'info',
  onClose,
}) => {
  return (
    <div className={`toast toast-${type} ease-fade-in`}>
      <div className="toast-icon">
        {type === 'success' && '✓'}
        {type === 'error' && '✕'}
        {type === 'info' && 'ℹ'}
      </div>
      <div className="toast-content">
        <h4 className="toast-title">{title}</h4>
        {message && <p className="toast-message">{message}</p>}
      </div>
      {onClose && (
        <button className="toast-close" onClick={onClose} aria-label="Close toast">
          &times;
        </button>
      )}
    </div>
  );
};

export default ToastNotification;