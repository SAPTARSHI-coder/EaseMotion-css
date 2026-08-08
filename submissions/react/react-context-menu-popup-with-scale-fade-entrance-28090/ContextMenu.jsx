import React, { useState, useEffect, useRef } from 'react';

/**
 * Context Menu Popup with Scale & Fade Entrance
 * 
 * @param {Array} items - List of menu item objects { id, label, icon, onClick, isDanger }
 * @param {Object} position - Coordinates { x, y }
 * @param {Boolean} isVisible - Whether the menu is currently visible
 * @param {Function} onClose - Callback to close the menu
 */
const ContextMenu = ({ items = [], position = { x: 0, y: 0 }, isVisible, onClose }) => {
  const [isRendered, setIsRendered] = useState(isVisible);
  const menuRef = useRef(null);

  // Handle CSS exit animation before unmounting
  useEffect(() => {
    if (isVisible) {
      setIsRendered(true);
    } else {
      const timeout = setTimeout(() => setIsRendered(false), 200); // matches CSS exit duration
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isVisible && menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    
    // Prevent immediate close on the same click that opens it
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('contextmenu', handleClickOutside);
    }, 10);
    
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('contextmenu', handleClickOutside);
    };
  }, [isVisible, onClose]);

  // Ensure menu stays within viewport bounds
  const getAdjustedPosition = () => {
    if (!menuRef.current) return { top: position.y, left: position.x };
    
    let top = position.y;
    let left = position.x;
    const { offsetWidth, offsetHeight } = menuRef.current;
    const padding = 16;
    
    if (left + offsetWidth > window.innerWidth - padding) {
      left = window.innerWidth - offsetWidth - padding;
    }
    
    if (top + offsetHeight > window.innerHeight - padding) {
      top = window.innerHeight - offsetHeight - padding;
    }
    
    return { top, left };
  };

  if (!isRendered) return null;

  return (
    <div 
      ref={menuRef}
      className={`ease-context-menu ${isVisible ? 'is-entering' : 'is-exiting'}`}
      style={{
        ...getAdjustedPosition(),
        // Define dynamic origin based on click position
        transformOrigin: 'top left' 
      }}
      role="menu"
    >
      <ul className="ease-context-menu-list">
        {items.map((item, index) => {
          if (item.type === 'separator') {
            return <li key={index} className="ease-context-menu-separator"></li>;
          }
          
          return (
            <li key={item.id || index} role="menuitem">
              <button 
                className={`ease-context-menu-btn ${item.isDanger ? 'danger' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  item.onClick && item.onClick();
                  onClose();
                }}
              >
                {item.icon && <span className="ease-menu-icon">{item.icon}</span>}
                <span className="ease-menu-label">{item.label}</span>
                {item.shortcut && <span className="ease-menu-shortcut">{item.shortcut}</span>}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// Higher-order component/hook for easy context menu binding
export const useContextMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (e) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);
  };

  const closeMenu = () => {
    setIsVisible(false);
  };

  return {
    isVisible,
    position,
    handleContextMenu,
    closeMenu
  };
};

export default ContextMenu;
