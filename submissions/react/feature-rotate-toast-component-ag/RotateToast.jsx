import React, { useState, useEffect } from 'react';
import './style.css';

/**
 * RotateToast
 * 
 * A React component representing a toast notification.
 * It applies a smooth 3D rotation enter animation and offers an interactive hover state 
 * that slightly rotates the toast to encourage interaction or simply draw attention.
 * 
 * @param {Object} props
 * @param {string} props.message - The toast message.
 * @param {string} [props.type='info'] - The type of toast ('info', 'success', 'warning', 'error').
 * @param {Function} [props.onClose] - Callback when the toast is closed.
 * @param {number} [props.duration=5000] - Auto-close duration in ms (0 to disable).
 */
const RotateToast = ({ 
  message, 
  type = 'info', 
  onClose,
  duration = 5000 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  // Handle auto-close
  useEffect(() => {
    if (duration > 0 && isVisible && !isExiting) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, isVisible, isExiting]);

  const handleClose = () => {
    setIsExiting(true);
  };

  const handleAnimationEnd = (e) => {
    if (e.animationName === 'toastRotateExit-ag' || e.animationName === 'toastFadeOut-ag') {
      setIsVisible(false);
      if (onClose) onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`ease-rotate-toast-ag toast-${type}-ag ${isExiting ? 'exiting-ag' : ''}`}
      onAnimationEnd={handleAnimationEnd}
      role="alert"
      aria-live="assertive"
    >
      <div className="ease-rotate-toast-content-ag">
        <span>{message}</span>
        {onClose && (
          <button 
            className="ease-rotate-toast-close-ag" 
            onClick={handleClose}
            aria-label="Close"
          >
            &times;
          </button>
        )}
      </div>
    </div>
  );
};

export default RotateToast;
