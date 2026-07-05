import React, { useState, useEffect } from 'react';

/**
 * NotificationDrawer
 * A sliding off-canvas notification center drawer with smooth EaseMotion CSS
 * slide-in and slide-out transitions.
 *
 * Props:
 * - isOpen: boolean - Controls the visibility of the drawer.
 * - onClose: () => void - Callback to close the drawer.
 * - notifications: Array<{ id, title, message, time, read }> - List of notifications.
 */
export default function NotificationDrawer({ isOpen, onClose, notifications = [] }) {
  const [isVisible, setIsVisible] = useState(false);
  const [renderDrawer, setRenderDrawer] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setRenderDrawer(true);
      setTimeout(() => setIsVisible(true), 10);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setRenderDrawer(false);
        document.body.style.overflow = '';
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  if (!renderDrawer) return null;

  return (
    <div className="ease-nd-backdrop" onClick={onClose}>
      <div
        className={`ease-nd-panel ${isVisible ? 'ease-nd-panel--open' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="ease-nd-header">
          <div className="ease-nd-title-wrap">
            <h2 className="ease-nd-title">Notifications</h2>
            {unreadCount > 0 && (
              <span className="ease-nd-badge">{unreadCount}</span>
            )}
          </div>
          <button className="ease-nd-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        <div className="ease-nd-body">
          {notifications.length === 0 ? (
            <p className="ease-nd-empty">You're all caught up!</p>
          ) : (
            <ul className="ease-nd-list">
              {notifications.map((n) => (
                <li key={n.id} className={`ease-nd-item ${n.read ? '' : 'ease-nd-item--unread'}`}>
                  <div className="ease-nd-item-header">
                    <span className="ease-nd-item-title">{n.title}</span>
                    <span className="ease-nd-item-time">{n.time}</span>
                  </div>
                  <p className="ease-nd-item-msg">{n.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
