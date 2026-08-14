import React, { useState, useEffect, useRef } from 'react';
import './style.css';

export default function ContextMenu({
  items = [],
  children,
  onAction
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleGlobalClick = (e) => {
      // Close menu if clicked outside
      if (isVisible && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsVisible(false);
      }
    };

    const handleGlobalContext = (e) => {
      // Close menu if right-clicked outside the target container
      if (isVisible && containerRef.current && !containerRef.current.contains(e.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('click', handleGlobalClick);
    document.addEventListener('contextmenu', handleGlobalContext);

    return () => {
      document.removeEventListener('click', handleGlobalClick);
      document.removeEventListener('contextmenu', handleGlobalContext);
    };
  }, [isVisible]);

  const handleContextMenu = (e) => {
    e.preventDefault();
    
    // Calculate position, ensuring it doesn't go off-screen
    const clickX = e.clientX;
    const clickY = e.clientY;
    
    // We'll estimate menu size or let CSS handle it. 
    // For perfect boundaries we'd need to measure it after render, 
    // but a simple clamp works for most cases.
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const estimatedWidth = 220; 
    const estimatedHeight = items.length * 40 + 20;

    const x = clickX + estimatedWidth > screenW ? screenW - estimatedWidth - 10 : clickX;
    const y = clickY + estimatedHeight > screenH ? screenH - estimatedHeight - 10 : clickY;

    setPosition({ x, y });
    setIsVisible(true);
  };

  const handleItemClick = (e, item) => {
    e.stopPropagation();
    setIsVisible(false);
    if (onAction) {
      onAction(item);
    }
  };

  return (
    <div 
      className="ease-context-container" 
      onContextMenu={handleContextMenu}
      ref={containerRef}
    >
      {/* The wrapped content that triggers the menu */}
      {children}

      {/* The Context Menu */}
      {isVisible && (
        <div
          ref={menuRef}
          className="ease-context-menu ease-scale-fade-enter"
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`
          }}
          role="menu"
        >
          {items.map((item, index) => {
            if (item.divider) {
              return <div key={`divider-${index}`} className="ease-context-divider" />;
            }

            return (
              <button
                key={item.id || index}
                className={`ease-context-item ${item.danger ? 'ease-text-danger' : ''}`}
                onClick={(e) => handleItemClick(e, item)}
                role="menuitem"
              >
                {item.icon && <span className="ease-item-icon">{item.icon}</span>}
                <span className="ease-item-label">{item.label}</span>
                {item.shortcut && <span className="ease-item-shortcut">{item.shortcut}</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
