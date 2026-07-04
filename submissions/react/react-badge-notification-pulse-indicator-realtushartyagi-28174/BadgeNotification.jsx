import React from 'react';

/**
 * BadgeNotification
 * Displays an icon with an animated pulsing notification badge using EaseMotion CSS.
 *
 * Props:
 * - count: number - Notification count. Badge hidden when 0. Displays "99+" beyond 99.
 * - pulsing: boolean - Enables the outward pulse ring animation on the badge.
 * - icon: ReactNode - Custom icon element (defaults to a bell SVG).
 * - onClick: () => void - Optional click handler for the badge button.
 */
export default function BadgeNotification({
  count = 0,
  pulsing = true,
  icon,
  onClick,
}) {
  const displayCount = count > 99 ? '99+' : count;
  const hasNotifications = count > 0;

  return (
    <button
      className="ease-badge-btn"
      onClick={onClick}
      aria-label={`${count} notification${count !== 1 ? 's' : ''}`}
    >
      <span className="ease-badge-icon">
        {icon || (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        )}
      </span>

      {hasNotifications && (
        <span className="ease-badge-wrap">
          <span className="ease-badge-count">{displayCount}</span>
          {pulsing && <span className="ease-badge-pulse" aria-hidden="true" />}
        </span>
      )}
    </button>
  );
}
