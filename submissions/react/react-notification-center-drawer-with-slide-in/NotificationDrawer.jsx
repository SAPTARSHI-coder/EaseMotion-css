import React, { useState, useEffect } from 'react';

/**
 * Notification Center Drawer Component
 * Features a smooth slide-in/out transition utilizing EaseMotion core parameters.
 */
export const NotificationDrawer = ({ 
  isOpen, 
  onClose, 
  notifications = [], 
  onClearAll 
}) => {
  const [mounted, setMounted] = useState(isOpen);

  // Handle local mounting state to allow unmounting animation to complete
  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      const timer = setTimeout(() => setMounted(false), 300); // Matches ease-speed-medium
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <div 
      className="ease-notification-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(15, 17, 21, 0.6)',
        backdropFilter: 'blur(4px)',
        zIndex: 999,
        opacity: isOpen ? 1 : 0,
        transition: 'opacity var(--ease-speed-medium, 300ms) var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1))',
      }}
      onClick={onClose}
    >
      <div
        className="ease-notification-drawer"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          maxWidth: '400px',
          height: '100%',
          backgroundColor: 'var(--ease-drawer-bg, #1e293b)',
          color: 'var(--ease-drawer-color, #f8fafc)',
          boxShadow: 'var(--ease-shadow-xl, 0 20px 25px -5px rgba(0, 0, 0, 0.3))',
          display: 'flex',
          flexDirection: 'column',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform var(--ease-speed-medium, 300ms) cubic-bezier(0.16, 1, 0.3, 1)', // Snappy corporate slide-in
        }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside drawer
      >
        {/* Header */}
        <div style={{ padding: '1.25rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>Notifications</h2>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            {notifications.length > 0 && (
              <button 
                onClick={onClearAll}
                style={{ background: 'none', border: 'none', color: 'var(--ease-color-primary, #6366f1)', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 500 }}
              >
                Clear all
              </button>
            )}
            <button 
              onClick={onClose}
              style={{ background: 'rgba(255,255,255,0.05)', border: 'none', color: '#f5f5f5', borderRadius: '50%', width: '2rem', height: '2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem' }}>
          {notifications.length === 0 ? (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)' }}>
              <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔔</span>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>All caught up!</p>
            </div>
          ) : (
            notifications.map((item) => (
              <div 
                key={item.id}
                style={{
                  padding: '1rem',
                  borderRadius: 'var(--ease-radius-md, 0.5rem)',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  marginBottom: '0.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{item.title}</span>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>{item.time}</span>
                </div>
                <p style={{ margin: 0, fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>{item.message}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationDrawer;
