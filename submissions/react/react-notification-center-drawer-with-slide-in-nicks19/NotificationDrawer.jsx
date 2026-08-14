import React, { useEffect, useRef } from 'react';
import './style.css';

export default function NotificationDrawer({
  isOpen,
  onClose,
  notifications = [],
  title = "Notifications",
  onNotificationClick,
  onClearAll,
}) {
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="ease-drawer-overlay ease-fade-in" onClick={onClose} aria-hidden="true">
      <div 
        className="ease-drawer ease-slide-in-right"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
        ref={drawerRef}
      >
        <div className="ease-drawer__header">
          <h2 className="ease-drawer__title">{title}</h2>
          <div className="ease-drawer__actions">
            {notifications.length > 0 && onClearAll && (
              <button 
                className="ease-drawer__btn-clear ease-squish-button"
                onClick={onClearAll}
              >
                Clear all
              </button>
            )}
            <button 
              className="ease-drawer__btn-close ease-squish-button" 
              onClick={onClose}
              aria-label="Close drawer"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="ease-drawer__body">
          {notifications.length === 0 ? (
            <div className="ease-drawer__empty ease-fade-in">
              <svg viewBox="0 0 24 24" width="48" height="48" className="ease-drawer__empty-icon">
                <path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <p>You're all caught up!</p>
            </div>
          ) : (
            <ul className="ease-drawer__list">
              {notifications.map((notif, index) => (
                <li 
                  key={notif.id || index}
                  className={`ease-drawer__item ${!notif.read ? 'ease-drawer__item--unread' : ''}`}
                  onClick={() => onNotificationClick && onNotificationClick(notif)}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="ease-drawer__item-content">
                    <p className="ease-drawer__item-title">{notif.title}</p>
                    <p className="ease-drawer__item-desc">{notif.message}</p>
                    <span className="ease-drawer__item-time">{notif.time}</span>
                  </div>
                  {!notif.read && <div className="ease-drawer__item-dot" aria-label="Unread" />}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
