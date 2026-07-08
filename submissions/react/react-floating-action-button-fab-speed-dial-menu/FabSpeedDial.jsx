import React, { useState, useRef, useEffect } from 'react';

/**
 * FAB Speed Dial Action Item
 * 
 * @param {Object} action - The action object containing id, icon, label
 * @param {Number} index - The index for staggered animation delays
 * @param {Boolean} isOpen - Whether the dial is currently open
 * @param {Function} onClick - Click handler
 */
const FabAction = ({ action, index, isOpen, onClick }) => {
  return (
    <div 
      className={`ease-fab-action-wrapper ${isOpen ? 'is-open' : ''}`}
      style={{ transitionDelay: `${isOpen ? index * 40 : 0}ms` }}
    >
      <span className="ease-fab-tooltip">{action.label}</span>
      <button
        className="ease-fab-action-btn"
        onClick={() => onClick(action.id)}
        aria-label={action.label}
        tabIndex={isOpen ? 0 : -1}
      >
        {action.icon}
      </button>
    </div>
  );
};

/**
 * Floating Action Button (FAB) Speed Dial Menu
 * 
 * @param {Array} actions - Array of action objects { id, icon, label }
 * @param {Function} onActionClick - Callback fired when a speed dial action is clicked
 * @param {String} direction - 'up', 'down', 'left', 'right' (Default: 'up')
 */
const FabSpeedDial = ({ actions = [], onActionClick, direction = 'up' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleActionClick = (actionId) => {
    if (onActionClick) onActionClick(actionId);
    setIsOpen(false);
  };

  const handleMainClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className={`ease-fab-container dir-${direction}`} 
      ref={containerRef}
    >
      {/* The Speed Dial Items */}
      <div className={`ease-fab-actions ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
        {actions.map((action, index) => (
          <FabAction 
            key={action.id}
            action={action}
            index={actions.length - 1 - index} // Stagger from closest to furthest
            isOpen={isOpen}
            onClick={handleActionClick}
          />
        ))}
      </div>

      {/* Main FAB Trigger */}
      <button 
        className={`ease-fab-main-btn ${isOpen ? 'is-open' : ''}`}
        onClick={handleMainClick}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label="Toggle speed dial"
      >
        <div className="ease-fab-icon-wrapper">
          {/* Plus icon transitions to an X */}
          <svg 
            className="ease-fab-icon-plus" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default FabSpeedDial;
