import React, { useState, useEffect, useCallback, useRef } from 'react';
import './style.css';

const ContextMenu = ({ items, targetRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef(null);

  const handleContextMenu = useCallback(
    (e) => {
      e.preventDefault();
      
      // Calculate coordinates preventing overflow
      let x = e.clientX;
      let y = e.clientY;
      
      // Assume a max width/height for menu if ref isn't ready
      const menuWidth = menuRef.current ? menuRef.current.offsetWidth : 200;
      const menuHeight = menuRef.current ? menuRef.current.offsetHeight : 250;
      
      if (x + menuWidth > window.innerWidth) {
        x -= menuWidth;
      }
      if (y + menuHeight > window.innerHeight) {
        y -= menuHeight;
      }

      setPosition({ x, y });
      setIsOpen(true);
    },
    []
  );

  const handleClickOutside = useCallback((e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  }, []);

  const handleEscape = useCallback((e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    const targetElement = targetRef?.current || document;
    
    targetElement.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      targetElement.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [targetRef, handleContextMenu, handleClickOutside, handleEscape]);

  if (!isOpen) return null;

  return (
    <ul
      ref={menuRef}
      className="context-menu-popup scale-fade-entrance"
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
      role="menu"
      tabIndex="-1"
    >
      {items.map((item, index) => {
        if (item.type === 'divider') {
          return <li key={index} className="context-menu-divider" role="separator" />;
        }
        
        return (
          <li
            key={index}
            className={`context-menu-item ease-hover-lift ${item.danger ? 'danger' : ''}`}
            role="menuitem"
            onClick={() => {
              if (item.onClick) item.onClick();
              setIsOpen(false);
            }}
          >
            {item.icon && <span className="context-menu-icon">{item.icon}</span>}
            <span className="context-menu-label">{item.label}</span>
            {item.shortcut && <span className="context-menu-shortcut">{item.shortcut}</span>}
          </li>
        );
      })}
    </ul>
  );
};

export default ContextMenu;
