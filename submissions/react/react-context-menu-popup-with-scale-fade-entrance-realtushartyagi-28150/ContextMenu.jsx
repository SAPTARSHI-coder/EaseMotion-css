import React, { useState, useEffect, useRef } from 'react';

/**
 * ContextMenu
 * A scale-and-fade animated popup menu that positions itself at the cursor,
 * using EaseMotion CSS for the entrance animation.
 *
 * Props:
 * - isOpen: boolean - visibility state of the menu
 * - position: { x: number, y: number } - coordinates to spawn the menu
 * - onClose: () => void - callback to close menu on outside click or item selection
 * - items: Array<{ id, label, icon, onClick, danger }> - menu actions
 */
export default function ContextMenu({ isOpen, position, onClose, items = [] }) {
  const [renderMenu, setRenderMenu] = useState(false);
  const menuRef = useRef(null);

  // Mount/Unmount tracking to allow CSS animations
  useEffect(() => {
    if (isOpen) {
      setRenderMenu(true);
    } else {
      const timer = setTimeout(() => {
        setRenderMenu(false);
      }, 200); // Wait for potential exit animation, though we primarily animate in
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    // Prevent context menu from closing if right-clicking again
    const handleContextMenu = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [isOpen, onClose]);

  if (!renderMenu) return null;

  return (
    <div
      ref={menuRef}
      className={`ease-cm-popup ${isOpen ? 'ease-cm-popup--open' : ''}`}
      style={{ top: position.y, left: position.x }}
    >
      <ul className="ease-cm-list">
        {items.map((item) => (
          <li key={item.id} className="ease-cm-item">
            <button
              className={`ease-cm-btn ${item.danger ? 'ease-cm-btn--danger' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                item.onClick();
                onClose();
              }}
            >
              {item.icon && <span className="ease-cm-icon">{item.icon}</span>}
              <span className="ease-cm-label">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
