import React, { useState, useEffect } from 'react';
import './style.css';

/**
 * A Toast Notification component that safely handles CSS exit animations
 * before unmounting from the React DOM.
 */
export const ToastNotification = ({ 
  message, 
  title = "Notification", 
  type = "info", 
  duration = 5000, 
  onClose 
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Auto-close functionality
  useEffect(() => {
    if (duration && duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsClosing(true);
    // Wait for the exit animation to finish (e.g., 300ms for ease-fade-out)
    // before actually triggering the parent's unmount callback.
    setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, 300);
  };

  if (!isVisible) return null;

  // Determine standard EaseMotion animation classes
  // Entrance: Slide in and fade in
  // Exit: Fade out (triggered by isClosing state)
  const animationClass = isClosing 
    ? "ease-fade-out" 
    : "ease-slide-in-from-right ease-fade-in";

  return (
    <div className={`ease-toast-container ${animationClass}`}>
      <div className={`ease-toast-card ease-toast-${type}`}>
        
        <div className="ease-toast-content">
          <h4 className="ease-toast-title">{title}</h4>
          <p className="ease-toast-message">{message}</p>
        </div>

        <button 
          className="ease-toast-close" 
          onClick={handleClose}
          aria-label="Close notification"
        >
          &times;
        </button>
        
      </div>
    </div>
  );
};

export default ToastNotification;
