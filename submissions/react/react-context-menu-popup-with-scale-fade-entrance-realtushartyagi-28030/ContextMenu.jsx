import React, { useState, useEffect, useRef } from 'react';
import './ContextMenu.css';

/**
 * Context Menu Popup with Scale & Fade Entrance
 * 
 * A reusable React component that displays a custom context menu
 * with a smooth scale-in and fade entrance animation when a user
 * right-clicks inside its wrapper.
 * 
 * @param {Array<Object>} items - Array of menu items { label, icon, onClick }
 * @param {React.ReactNode} children - The content that triggers the context menu
 */
const ContextMenu = ({ items = [], children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef(null);
  const wrapperRef = useRef(null);

  // Handle right-click on the wrapper
  const handleContextMenu = (e) => {
    e.preventDefault();
    
    // Calculate position relative to the viewport
    let x = e.clientX;
    let y = e.clientY;
    
    // Basic boundary collision detection to prevent menu from going off-screen
    if (menuRef.current) {
      const menuRect = menuRef.current.getBoundingClientRect();
      if (x + menuRect.width > window.innerWidth) {
        x -= menuRect.width;
      }
      if (y + menuRect.height > window.innerHeight) {
        y -= menuRect.height;
      }
    }
    
    setPosition({ x, y });
    setIsVisible(true);
  };

  // Close menu when clicking outside
  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsVisible(false);
    }
  };

  // Close menu on escape key
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible]);

  return (
    <div 
      className="ease-context-wrapper"
      ref={wrapperRef}
      onContextMenu={handleContextMenu}
    >
      {/* Target Content */}
      {children}

      {/* Context Menu Popup */}
      {isVisible && (
        <div 
          className="ease-context-menu"
          ref={menuRef}
          style={{ top: position.y, left: position.x }}
          role="menu"
        >
          <ul className="ease-context-menu-list">
            {items.map((item, index) => (
              <li 
                key={index} 
                className="ease-context-menu-item"
                role="menuitem"
                onClick={() => {
                  if (item.onClick) item.onClick();
                  setIsVisible(false); // Auto-close on click
                }}
              >
                {item.icon && <span className="ease-context-icon">{item.icon}</span>}
                <span className="ease-context-label">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContextMenu;
