import React from 'react';
import './style.css';

/**
 * Badge Notification Component
 * Wraps any child element and displays an animated badge with a radar pulse.
 */
const BadgeNotification = ({ 
  count = 0, 
  maxCount = 99,
  showZero = false,
  color = "red", // options: "red", "blue", "green"
  position = "top-right", // options: "top-right", "top-left", "bottom-right", "bottom-left"
  pulsing = true,
  children
}) => {
  // If count is zero and we aren't showing zero, just return the children unwrapped structurally
  if (!showZero && count <= 0) {
    return <div className="badge-wrapper">{children}</div>;
  }

  // Handle count overflow styling (e.g. 99+)
  const displayCount = count > maxCount ? `${maxCount}+` : count;
  
  return (
    <div className="badge-wrapper">
      {children}
      <div className={`badge-indicator ${position} color-${color} ease-pop-in`}>
        {/* Render the EaseMotion continuous radar pulse behind the text if enabled */}
        {pulsing && <div className="badge-pulse ease-pulse-radar"></div>}
        <span className="badge-text">{displayCount}</span>
      </div>
    </div>
  );
};

export default BadgeNotification;
