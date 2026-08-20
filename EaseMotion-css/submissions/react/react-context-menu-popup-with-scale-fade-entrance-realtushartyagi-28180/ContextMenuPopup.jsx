import React, { useState, useEffect, useRef } from 'react';

/**
 * ContextMenuPopup
 * A right-click (or trigger button) context menu with a CSS scale & fade
 * entrance animation powered by EaseMotion CSS.
 *
 * Props:
 * - items: Array<{ label: string, icon?: string, onClick: () => void, danger?: boolean }>
 * - children: ReactNode - The target element that triggers the context menu on right-click.
 */
export default function ContextMenuPopup({ items = [], children }) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef(null);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setVisible(true);
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleClose = () => setVisible(false);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        handleClose();
      }
    };
    if (visible) {
      document.addEventListener('mousedown', onClickOutside);
      document.addEventListener('scroll', handleClose, true);
    }
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('scroll', handleClose, true);
    };
  }, [visible]);

  return (
    <>
      <div onContextMenu={handleContextMenu} className="ease-ctx-target">
        {children}
      </div>

      {visible && (
        <ul
          ref={menuRef}
          className="ease-ctx-menu"
          style={{ top: position.y, left: position.x }}
        >
          {items.map((item, idx) => (
            <li
              key={idx}
              className={`ease-ctx-item ${item.danger ? 'ease-ctx-item--danger' : ''}`}
              onClick={() => {
                item.onClick?.();
                handleClose();
              }}
            >
              {item.icon && <span className="ease-ctx-icon">{item.icon}</span>}
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
