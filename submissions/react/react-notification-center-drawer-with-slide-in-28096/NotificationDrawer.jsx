import React, { useState, useEffect, useRef } from 'react';

/**
 * Notification Center Drawer with Slide-In
 * 
 * @param {Array} initialNotifications - List of notification objects
 * @param {Boolean} isOpen - Controls visibility of the drawer
 * @param {Function} onClose - Callback to handle closing the drawer
 */
const NotificationDrawer = ({ initialNotifications = [], isOpen, onClose }) => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [isRendered, setIsRendered] = useState(isOpen);
  const drawerRef = useRef(null);

  // Mount/Unmount logic to allow CSS exit animations
  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
    } else {
      const timeout = setTimeout(() => setIsRendered(false), 400); // match CSS duration
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  // Handle clicking outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && drawerRef.current && !drawerRef.current.contains(event.target)) {
        onClose();
      }
    };
    
    // Add small delay so the click that opened it doesn't immediately close it
    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 50);
    
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  if (!isRendered) return null;

  return (
    <div className={`ease-drawer-overlay ${isOpen ? 'is-open' : 'is-closed'}`}>
      <aside 
        ref={drawerRef}
        className={`ease-notification-drawer ${isOpen ? 'slide-in' : 'slide-out'}`}
      >
        <div className="ease-drawer-header">
          <div className="ease-drawer-title-group">
            <h3>Notifications</h3>
            {notifications.filter(n => !n.isRead).length > 0 && (
              <span className="ease-badge">
                {notifications.filter(n => !n.isRead).length} new
              </span>
            )}
          </div>
          <div className="ease-drawer-actions">
            <button className="ease-text-btn" onClick={markAllRead}>Mark all read</button>
            <button className="ease-close-btn" onClick={onClose} aria-label="Close drawer">
              &times;
            </button>
          </div>
        </div>

        <div className="ease-drawer-content">
          {notifications.length === 0 ? (
            <div className="ease-empty-state">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              <p>You're all caught up!</p>
            </div>
          ) : (
            <ul className="ease-notification-list">
              {notifications.map((notification) => (
                <li 
                  key={notification.id} 
                  className={`ease-notification-item ${!notification.isRead ? 'unread' : ''}`}
                >
                  <div className="ease-notification-avatar">
                    {notification.avatar ? (
                      <img src={notification.avatar} alt="" />
                    ) : (
                      <div className="ease-avatar-placeholder">
                        {notification.title.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="ease-notification-body">
                    <h4>{notification.title}</h4>
                    <p>{notification.message}</p>
                    <span className="ease-time">{notification.time}</span>
                  </div>
                  <button 
                    className="ease-dismiss-btn" 
                    onClick={() => removeNotification(notification.id)}
                    aria-label="Dismiss notification"
                  >
                    &times;
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </div>
  );
};

export default NotificationDrawer;
