import React from 'react';
import './BadgeNotification.css';

/**
 * Badge Notification Pulse Indicator
 * 
 * A reusable React component that wraps any UI element (like an icon or button)
 * and displays an attention-grabbing pulsing badge in the top-right corner.
 * Ideal for unread messages, new features, or live status indicators.
 * 
 * @param {React.ReactNode} children - The target element to wrap
 * @param {boolean} active - If true, displays the pulsing badge
 * @param {string} color - The CSS color of the badge (hex, rgb, etc.)
 * @param {string} ariaLabel - Screen reader text for the badge (e.g. "3 unread messages")
 */
const BadgeNotification = ({ 
  children, 
  active = true, 
  color = '#ef4444', // Default EaseMotion Red
  ariaLabel = 'New notification'
}) => {
  return (
    <div className="ease-badge-wrapper">
      {/* Target Content (e.g. Bell Icon) */}
      {children}
      
      {/* Conditionally Render the Pulse Indicator */}
      {active && (
        <span 
          className="ease-badge-indicator"
          role="status"
          aria-label={ariaLabel}
          style={{ 
            backgroundColor: color,
            // Pass the color to a CSS variable to drive the box-shadow pulse
            '--badge-pulse-color': color 
          }}
        >
          {/* 
            The inner pulse ring. 
            Separated into its own span to prevent the core dot from fading out.
          */}
          <span 
            className="ease-badge-pulse-ring" 
            aria-hidden="true"
          />
        </span>
      )}
    </div>
  );
};

export default BadgeNotification;
