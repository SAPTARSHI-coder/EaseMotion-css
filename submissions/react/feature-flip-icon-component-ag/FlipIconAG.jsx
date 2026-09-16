import React, { useState, useEffect } from 'react';
import './style.css';

const FlipIconAG = ({ isExiting, children, onExited }) => {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => {
        setShouldRender(false);
        if (onExited) onExited();
      }, 500); // match transition duration
      return () => clearTimeout(timer);
    }
  }, [isExiting, onExited]);

  if (!shouldRender) return null;

  return (
    <span className={`flip-icon-wrapper-ag ${isExiting ? 'is-exiting-ag' : ''}`} aria-hidden="true">
      {children}
    </span>
  );
};

export default FlipIconAG;
