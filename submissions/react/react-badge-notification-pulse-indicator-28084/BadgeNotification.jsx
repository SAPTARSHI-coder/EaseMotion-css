import React from 'react';

/**
 * Badge Notification Pulse Indicator
 * 
 * @param {Number|String} count - The number/text to display in the badge. If 0 or null, badge hides (unless showZero is true).
 * @param {Boolean} showZero - Whether to show the badge if count is 0.
 * @param {Boolean} pulsing - Whether the ripple/pulse animation is currently active.
 * @param {String} color - Optional custom hex/rgb color for the badge (defaults to theme red).
 * @param {String} position - 'top-right' (default), 'top-left', 'bottom-right', 'bottom-left'.
 * @param {ReactNode} children - The element the badge is attached to (e.g., an icon or button).
 */
const BadgeNotification = ({ 
  count = 0, 
  showZero = false,
  pulsing = true,
  color = null,
  position = 'top-right',
  children 
}) => {
  
  const isVisible = count > 0 || showZero;
  
  // Format count (e.g., "99+" if over 99)
  const displayCount = typeof count === 'number' && count > 99 ? '99+' : count;

  return (
    <div className="ease-badge-container">
      {/* The wrapped element (e.g., an icon) */}
      {children}
      
      {/* The Badge */}
      {isVisible && (
        <div 
          className={`ease-badge-wrapper pos-${position}`}
          aria-label={`${count} unread notifications`}
        >
          {/* 
            The pulsing ring behind the badge.
            We separate this from the badge itself so the text doesn't distort.
          */}
          {pulsing && (
            <div 
              className="ease-badge-pulse-ring" 
              style={color ? { backgroundColor: color } : {}}
            />
          )}
          
          {/* The solid badge containing the count */}
          <span 
            className="ease-badge-core"
            style={color ? { backgroundColor: color } : {}}
          >
            {displayCount}
          </span>
        </div>
      )}
    </div>
  );
};

export default BadgeNotification;
