import React, { useState, useEffect, useRef, useCallback } from 'react';

// ─── Separator component ──────────────────────────────────────────────────────
const Separator = () => <div className="ease-ctx-separator" role="separator" />;

// ─── Sub-menu item ────────────────────────────────────────────────────────────
const SubMenu = ({ label, icon, items }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  return (
    <div
      className={`ease-ctx-item ease-ctx-has-submenu ${open ? 'is-open' : ''}`}
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      role="menuitem"
      aria-haspopup="true"
      aria-expanded={open}
    >
      {icon && <span className="ease-ctx-icon" aria-hidden="true">{icon}</span>}
      <span className="ease-ctx-label">{label}</span>
      <span className="ease-ctx-chevron" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </span>

      {/* Nested popup */}
      <div className={`ease-ctx-submenu ${open ? 'is-visible' : ''}`} role="menu">
        {items.map((item, i) =>
          item.separator ? (
            <Separator key={i} />
          ) : (
            <MenuItem key={item.id ?? i} {...item} />
          )
        )}
      </div>
    </div>
  );
};

// ─── Single menu item ─────────────────────────────────────────────────────────
const MenuItem = ({ label, icon, shortcut, danger, disabled, onClick, subItems }) => {
  if (subItems) {
    return <SubMenu label={label} icon={icon} items={subItems} />;
  }

  return (
    <button
      className={`ease-ctx-item ${danger ? 'is-danger' : ''} ${disabled ? 'is-disabled' : ''}`}
      onClick={disabled ? undefined : onClick}
      role="menuitem"
      disabled={disabled}
      aria-disabled={disabled}
    >
      {icon && <span className="ease-ctx-icon" aria-hidden="true">{icon}</span>}
      <span className="ease-ctx-label">{label}</span>
      {shortcut && <span className="ease-ctx-shortcut">{shortcut}</span>}
    </button>
  );
};

/**
 * ContextMenu — a right-click context menu with scale & fade entrance animation.
 *
 * @param {Array}    items        - Menu item definitions (see README for schema)
 * @param {ReactNode} children   - The trigger element (right-click area)
 * @param {boolean}  disabled    - Disable the context menu entirely
 * @param {string}   className   - Additional CSS class on the trigger wrapper
 */
const ContextMenu = ({ items = [], children, disabled = false, className = '' }) => {
  const [visible, setVisible]   = useState(false);
  const [pos, setPos]           = useState({ x: 0, y: 0 });
  const [entering, setEntering] = useState(false);
  const menuRef                 = useRef(null);
  const wrapRef                 = useRef(null);

  // ── Open at cursor position ─────────────────────────────────────────────
  const open = useCallback((e) => {
    if (disabled) return;
    e.preventDefault();

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const menuW = 220;
    const menuH = items.length * 40 + 16; // rough estimate

    let x = e.clientX;
    let y = e.clientY;

    // Clamp so menu doesn't overflow viewport
    if (x + menuW > vw) x = vw - menuW - 8;
    if (y + menuH > vh) y = vh - menuH - 8;

    setPos({ x, y });
    setVisible(true);
    // Trigger entrance animation on next frame
    requestAnimationFrame(() => setEntering(true));
  }, [disabled, items.length]);

  // ── Close on outside click / Escape ────────────────────────────────────
  const close = useCallback(() => {
    setEntering(false);
    // Wait for exit animation before unmounting
    setTimeout(() => setVisible(false), 200);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const onKey   = (e) => e.key === 'Escape' && close();
    const onClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) close();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [visible, close]);

  return (
    <div
      ref={wrapRef}
      className={`ease-ctx-trigger ${className}`}
      onContextMenu={open}
    >
      {children}

      {visible && (
        <div
          ref={menuRef}
          className={`ease-ctx-menu ${entering ? 'is-entering' : 'is-exiting'}`}
          style={{ top: pos.y, left: pos.x }}
          role="menu"
          aria-label="Context menu"
        >
          {items.map((item, i) =>
            item.separator ? (
              <Separator key={i} />
            ) : (
              <MenuItem
                key={item.id ?? i}
                {...item}
                onClick={() => {
                  if (item.onClick) item.onClick();
                  close();
                }}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default ContextMenu;
