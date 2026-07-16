import React, { useState, useEffect } from 'react';

/**
 * NotificationCenterDrawer
 * A sliding drawer component to display notifications using EaseMotion CSS animations.
 *
 * Props:
 * - isOpen: boolean - Controls the visibility of the drawer
 * - onClose: () => void - Callback triggered to close the drawer
 * - notifications: Array<{ id: string, title: string, message: string, time: string, read: boolean }>
 */
export default function NotificationCenterDrawer({ isOpen, onClose, notifications = [] }) {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [renderDrawer, setRenderDrawer] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setRenderDrawer(true);
      // Small delay to ensure the component is rendered before applying the slide-in class
      setTimeout(() => setIsVisible(true), 10);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      // Wait for the slide-out animation to finish before unmounting
      const timer = setTimeout(() => {
        setRenderDrawer(false);
        document.body.style.overflow = '';
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!renderDrawer) return null;

  return (
    <div className="ease-drawer-backdrop" onClick={onClose}>
      <div 
        className={`ease-drawer-content ${isVisible ? 'ease-drawer-open' : 'ease-drawer-closed'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="ease-drawer-header">
          <h2>Notifications</h2>
          <button className="ease-drawer-close-btn" onClick={onClose}>×</button>
        </div>
        <div className="ease-drawer-body">
          {notifications.length === 0 ? (
            <p className="ease-empty-state">No new notifications.</p>
          ) : (
            <ul className="ease-notification-list">
              {notifications.map((notif) => (
                <li key={notif.id} className={`ease-notification-item ${notif.read ? 'read' : 'unread'}`}>
                  <div className="ease-notification-meta">
                    <span className="ease-notification-title">{notif.title}</span>
                    <span className="ease-notification-time">{notif.time}</span>
                  </div>
                  <p className="ease-notification-message">{notif.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
