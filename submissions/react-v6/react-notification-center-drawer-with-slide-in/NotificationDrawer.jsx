import React, { useState } from 'react';

/**
 * NotificationDrawer Component
 * Renders a side drawer that slides in from the right edge.
 * Displays notifications list and provides clear/read actions.
 * 
 * @param {Object} props
 * @param {boolean} props.isOpen - Controls if drawer is visible
 * @param {Function} props.onClose - Callback triggered to close the drawer
 * @param {Array} props.initialNotifications - Initial notifications array: { id, title, text, time, type, read }
 * @param {string} [props.accentColor='#8b5cf6'] - Active highlight styling theme color
 */
export default function NotificationDrawer({
  isOpen,
  onClose,
  initialNotifications = [],
  accentColor = '#8b5cf6'
}) {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const dismissNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const toggleRead = (id) => {
    setNotifications(
      notifications.map(n => (n.id === id ? { ...n, read: !n.read } : n))
    );
  };

  const getIcon = (type) => {
    switch (type) {
      case 'warning': return '⚠️';
      case 'error': return '🚨';
      case 'success': return '✅';
      default: return 'ℹ️';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'warning': return '#f59e0b';
      case 'error': return '#f43f5e';
      case 'success': return '#10b981';
      default: return '#3b82f6';
    }
  };

  if (!isOpen) return null;

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div
      className="notif-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(3, 7, 18, 0.6)',
        backdropFilter: 'blur(3px)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'flex-end'
      }}
      onClick={onClose}
    >
      {/* Sliding Drawer Container */}
      <div
        className="notif-drawer ease-slide-in-right ease-duration-normal"
        style={{
          width: '100%',
          maxWidth: '400px',
          height: '100vh',
          backgroundColor: '#0b0f19',
          borderLeft: '1px solid #1f2937',
          boxShadow: '-10px 0 30px -5px rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '1.5rem',
            borderBottom: '1px solid #1f2937',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textAlign: 'left' }}>
            <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800, color: '#f9fafb' }}>
              Notifications
            </h3>
            {unreadCount > 0 && (
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  backgroundColor: accentColor,
                  color: '#fff',
                  padding: '0.15rem 0.4rem',
                  borderRadius: '9999px'
                }}
              >
                {unreadCount} new
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#9ca3af',
              fontSize: '1.25rem',
              cursor: 'pointer',
              padding: 0
            }}
          >
            ×
          </button>
        </div>

        {/* Toolbar Actions */}
        {notifications.length > 0 && (
          <div
            style={{
              padding: '0.75rem 1.5rem',
              borderBottom: '1px solid #1f2937',
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '0.8rem'
            }}
          >
            <button
              onClick={markAllAsRead}
              style={{
                background: 'none',
                border: 'none',
                color: accentColor,
                fontWeight: 700,
                cursor: 'pointer',
                padding: 0
              }}
            >
              Mark all as read
            </button>
            <button
              onClick={clearAll}
              style={{
                background: 'none',
                border: 'none',
                color: '#f43f5e',
                fontWeight: 700,
                cursor: 'pointer',
                padding: 0
              }}
            >
              Clear all
            </button>
          </div>
        )}

        {/* Notification Scroll List */}
        <div
          className="notif-scroll-list"
          style={{
            flexGrow: 1,
            overflowY: 'auto',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}
        >
          {notifications.length === 0 ? (
            <div
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                color: '#6b7280'
              }}
            >
              <span style={{ fontSize: '2rem' }}>🔔</span>
              <span style={{ fontSize: '0.85rem' }}>All caught up! No notifications.</span>
            </div>
          ) : (
            notifications.map((notif) => (
              <div
                key={notif.id}
                className="notif-item ease-hover-lift"
                style={{
                  backgroundColor: notif.read ? 'rgba(31, 41, 55, 0.3)' : 'rgba(31, 41, 55, 0.7)',
                  border: notif.read ? '1px solid #1f2937' : `1px solid ${accentColor}`,
                  borderRadius: '10px',
                  padding: '1rem',
                  display: 'flex',
                  gap: '0.75rem',
                  position: 'relative',
                  transition: 'all 0.2s ease',
                  textAlign: 'left'
                }}
              >
                {/* Type Icon badge */}
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(3, 7, 18, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    flexShrink: 0,
                    border: `1px solid ${getTypeColor(notif.type)}`
                  }}
                >
                  {getIcon(notif.type)}
                </div>

                {/* Details Content */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', flexGrow: 1, paddingRight: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f9fafb', margin: 0 }}>
                      {notif.title}
                    </h4>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: '#9ca3af', margin: 0, lineHeight: '1.4' }}>
                    {notif.text}
                  </p>
                  <span style={{ fontSize: '0.7rem', color: '#6b7280', marginTop: '0.25rem' }}>
                    {notif.time}
                  </span>
                </div>

                {/* Individual Actions Drawer buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <button
                    onClick={() => dismissNotification(notif.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#6b7280',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      padding: 0
                    }}
                    title="Dismiss"
                  >
                    ×
                  </button>
                  <button
                    onClick={() => toggleRead(notif.id)}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: notif.read ? '#4b5563' : accentColor,
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0
                    }}
                    title={notif.read ? 'Mark Unread' : 'Mark Read'}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
