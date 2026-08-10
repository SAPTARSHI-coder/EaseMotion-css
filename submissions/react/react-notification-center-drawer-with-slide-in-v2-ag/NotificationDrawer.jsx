import React, { useState, useEffect } from 'react';
import './style.css'; 

/**
 * Notification Center Drawer
 * A modular React component showcasing EaseMotion animations for drawer slide-ins and list cascades.
 */
const NotificationDrawer = ({
  notifications = [],
  isOpen,
  onClose,
  title = "Notifications",
  onClearAll
}) => {
  // Local state to manage unread status and removal animations independently of the parent if needed
  const [localNotifications, setLocalNotifications] = useState([]);
  
  useEffect(() => {
    // Sync props to local state
    setLocalNotifications(notifications);
  }, [notifications]);

  const markAsRead = (id) => {
    setLocalNotifications(prev => 
      prev.map(notif => notif.id === id ? { ...notif, unread: false } : notif)
    );
  };

  const removeNotification = (e, id) => {
    e.stopPropagation();
    setLocalNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  if (!isOpen) return null;

  const unreadCount = localNotifications.filter(n => n.unread).length;

  return (
    <div className="drawer-overlay ease-fade-in" onClick={onClose}>
      <div 
        className="notification-drawer ease-slide-in-right" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        {/* Header */}
        <header className="drawer-header">
          <div className="header-title-group">
            <h2 className="drawer-title">{title}</h2>
            {unreadCount > 0 && (
              <span className="unread-badge ease-bounce">{unreadCount}</span>
            )}
          </div>
          <div className="header-actions">
            {localNotifications.length > 0 && (
              <button 
                className="clear-btn ease-hover-glow" 
                onClick={() => {
                  setLocalNotifications([]);
                  if(onClearAll) onClearAll();
                }}
              >
                Clear All
              </button>
            )}
            <button className="close-btn ease-hover-scale" onClick={onClose} aria-label="Close drawer">
              &times;
            </button>
          </div>
        </header>

        {/* Body / List */}
        <div className="drawer-body">
          {localNotifications.length === 0 ? (
            <div className="empty-state ease-fade-in-up">
              <div className="empty-icon ease-pulse-slow">📭</div>
              <p>You're all caught up!</p>
            </div>
          ) : (
            <ul className="notification-list">
              {localNotifications.map((notif, index) => (
                <li 
                  key={notif.id} 
                  className={`notification-item ease-slide-left ${notif.unread ? 'unread' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => markAsRead(notif.id)}
                >
                  <div className="notif-avatar">{notif.avatar || '🔔'}</div>
                  <div className="notif-content">
                    <h4 className="notif-title">{notif.title}</h4>
                    <p className="notif-desc">{notif.description}</p>
                    <span className="notif-time">{notif.time}</span>
                  </div>
                  {notif.unread && <div className="unread-dot ease-pulse"></div>}
                  <button 
                    className="delete-btn" 
                    onClick={(e) => removeNotification(e, notif.id)}
                    aria-label="Remove notification"
                  >
                    &times;
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationDrawer;
