import React, { useState, useEffect, useRef } from 'react';

/**
 * SpeedDial — A Floating Action Button (FAB) that expands into a menu of secondary actions.
 *
 * @param {Array}    actions   - Array of { icon, name, onClick } objects
 * @param {ReactNode} mainIcon - Icon for the main FAB when closed (default: '+')
 * @param {ReactNode} closeIcon- Icon for the main FAB when opened (default: '×')
 * @param {string}   direction - Expand direction: 'up' | 'down' | 'left' | 'right' (default: 'up')
 * @param {string}   color     - Base CSS color for the main button (default: '#3b82f6')
 */
const SpeedDial = ({
  actions = [],
  mainIcon,
  closeIcon,
  direction = 'up',
  color = '#3b82f6',
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // Close on outside click or Escape key
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  const toggle = () => setOpen(prev => !prev);

  // Default icons if none provided
  const iconDefault = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
  const iconCloseDefault = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );

  return (
    <div 
      className={`ease-speed-dial ease-speed-dial--${direction} ${open ? 'is-open' : ''}`}
      ref={containerRef}
      style={{ '--ease-sd-color': color }}
    >
      {/* ── Main FAB ── */}
      <button
        className="ease-sd-main"
        onClick={toggle}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="Toggle speed dial"
      >
        <span className="ease-sd-icon ease-sd-icon--main" aria-hidden="true">
          {mainIcon || iconDefault}
        </span>
        <span className="ease-sd-icon ease-sd-icon--close" aria-hidden="true">
          {closeIcon || iconCloseDefault}
        </span>
      </button>

      {/* ── Actions List ── */}
      <div 
        className="ease-sd-actions" 
        role="menu"
        aria-hidden={!open}
      >
        {actions.map((action, index) => (
          <div
            key={action.name}
            className="ease-sd-action-wrap"
            style={{ '--ease-sd-delay': `${index * 45}ms` }}
          >
            {/* Tooltip Label */}
            <span className="ease-sd-tooltip" role="tooltip">
              {action.name}
            </span>
            
            {/* Secondary Action Button */}
            <button
              className="ease-sd-btn"
              onClick={() => {
                if (action.onClick) action.onClick();
                setOpen(false);
              }}
              role="menuitem"
              aria-label={action.name}
              tabIndex={open ? 0 : -1}
            >
              {action.icon}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeedDial;
