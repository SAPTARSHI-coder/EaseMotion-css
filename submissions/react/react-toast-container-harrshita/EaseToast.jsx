import React, { useState, useEffect } from 'react';
import './style.css';

export const EaseToast = ({ message, type = 'info', duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => { if (onClose) onClose(); }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`ease-toast ease-toast--${type}`}>
      <span class="ease-toast-message">{message}</span>
      <button class="ease-toast-close" onClick={onClose}>&times;</button>
    </div>
  );
};

export default EaseToast;
