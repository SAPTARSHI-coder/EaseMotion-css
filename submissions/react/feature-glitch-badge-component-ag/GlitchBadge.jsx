import React, { useState } from 'react';
import './style.css';

/**
 * GlitchBadge Component
 * 
 * A badge that applies a temporary glitch effect when updated or interacted with,
 * useful for drawing attention to new notifications or status changes.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The content of the badge (e.g., number or text)
 * @param {string} props.status - Visual style ('default', 'success', 'warning', 'error')
 */
const GlitchBadge = ({ children, status = 'default' }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  // Trigger glitch effect manually, for instance on click or when receiving new data
  const triggerGlitch = () => {
    if (isGlitching) return;
    setIsGlitching(true);
    // Remove class after animation completes (0.3s)
    setTimeout(() => {
      setIsGlitching(false);
    }, 300);
  };

  return (
    <span
      className={`glitch-badge-ag status-${status}-ag ${isGlitching ? 'is-glitching-ag' : ''}`}
      onClick={triggerGlitch}
      role="status"
    >
      <span className="glitch-content-ag" data-text={typeof children === 'string' || typeof children === 'number' ? children : ''}>
        {children}
      </span>
    </span>
  );
};

export default GlitchBadge;
