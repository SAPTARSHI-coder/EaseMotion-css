import React from 'react';

/**
 * BadgeNotification
 * A modular React component displaying an icon (e.g., a bell) with a pulsing 
 * notification badge indicator using EaseMotion CSS animations.
 *
 * Props:
 * - count: number | string - The number to display in the badge. If 0, the badge is hidden.
 * - icon: ReactNode - Custom SVG or element to display as the main icon.
 * - pulsing: boolean - If true, the badge displays an outward pulse animation effect.
 * - onClick: () => void - Optional click handler for the entire badge container.
 */
export default function BadgeNotification({ 
  count = 0, 
  icon, 
  pulsing = true,
  onClick 
}) {
  const displayCount = count > 99 ? '99+' : count;
  const hasNotifications = count > 0;

  return (
    <button className="ease-badge-btn" onClick={onClick} aria-label={`${count} unread notifications`}>
      <div className="ease-icon-container">
        {icon || (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        )}
      </div>
      
      {hasNotifications && (
        <div className="ease-badge-wrapper">
          <span className="ease-badge-count">{displayCount}</span>
          {pulsing && <span className="ease-badge-pulse"></span>}
        </div>
      )}
    </button>
  );
}
