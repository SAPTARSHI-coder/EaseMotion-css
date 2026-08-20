"use client";

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * MotionDialog Component
 * A portal-based modal overlay using EaseMotion's .ease-modal-overlay and .ease-modal styles.
 * Safely handles hydration compatibility in SSR/Next.js environment.
 * 
 * @param {Object} props
 * @param {boolean} props.isOpen - Controls visibility
 * @param {Function} props.onClose - Callback when modal is dismissed
 * @param {string} props.title - Modal title header
 * @param {React.ReactNode} props.children - Modal content
 */
export default function MotionDialog({ isOpen, onClose, title, children }) {
  const [mounted, setMounted] = useState(false);

  // Prevent SSR hydration mismatches by ensuring portal is rendered only on client
  useEffect(() => {
    setMounted(true);
    
    // Close modal on escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  const modalHtml = (
    <div 
      className={`ease-modal-overlay is-active`} 
      onClick={onClose}
      style={{
        // Override for glassmorphism backdrop blur to match our globals
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        background: 'rgba(9, 9, 11, 0.7)'
      }}
    >
      <div 
        className="ease-modal ease-modal-lg" 
        onClick={(e) => e.stopPropagation()}
        style={{
          border: '1px solid var(--app-surface-border)',
          background: 'var(--app-bg)',
          borderRadius: '16px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Modal Header */}
        <div 
          className="ease-modal-header"
          style={{
            borderBottom: '1px solid var(--app-surface-border)',
            padding: '16px 24px',
            background: 'rgba(255, 255, 255, 0.02)'
          }}
        >
          <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', color: 'var(--app-text)', fontSize: '20px', fontWeight: 600 }}>
            {title}
          </h3>
          <button 
            onClick={onClose} 
            className="ease-modal-close" 
            aria-label="Close modal"
            style={{
              cursor: 'pointer',
              border: 'none',
              borderRadius: '8px',
              padding: '6px',
              background: 'transparent',
              color: 'var(--app-text-muted)',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all var(--ease-speed-fast) var(--ease-ease)'
            }}
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px', overflowY: 'auto', maxHeight: '60vh', color: 'var(--app-text-muted)', fontSize: '15px', lineHeight: 1.6 }}>
          {children}
        </div>

        {/* Modal Footer */}
        <div 
          style={{
            borderTop: '1px solid var(--app-surface-border)',
            padding: '16px 24px',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '12px',
            background: 'rgba(255, 255, 255, 0.02)'
          }}
        >
          <button 
            className="ease-hover-lift"
            onClick={onClose}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              background: 'transparent',
              border: '1px solid var(--app-surface-border)',
              color: 'var(--app-text)',
              cursor: 'pointer',
              fontWeight: 500,
              fontSize: '14px',
            }}
          >
            Close
          </button>
          <button 
            className="ease-hover-lift"
            onClick={onClose}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              background: 'var(--ease-color-primary)',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              fontWeight: 500,
              fontSize: '14px',
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalHtml, document.body);
}
