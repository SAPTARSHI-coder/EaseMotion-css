import React, { useState, useRef, useEffect } from 'react';

/**
 * Floating Action Button (FAB) Speed Dial Menu
 * 
 * @param {Array} actions - Array of objects { icon, name, onClick }
 * @param {String} position - 'bottom-right' | 'bottom-left' (default: bottom-right)
 */
const SpeedDial = ({ actions = [], position = 'bottom-right' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  const toggleDial = () => setIsOpen(!isOpen);

  return (
    <div 
      className={`ease-speeddial-container position-${position} ${isOpen ? 'is-open' : ''}`}
      ref={containerRef}
    >
      {/* Action Items List */}
      <ul className="ease-speeddial-list" aria-hidden={!isOpen}>
        {actions.map((action, index) => {
          // Calculate staggered delay for entry animation (bottom-up)
          const delay = isOpen ? (actions.length - 1 - index) * 0.05 : 0;
          
          return (
            <li 
              key={action.name} 
              className="ease-speeddial-item"
              style={{ transitionDelay: `${delay}s` }}
            >
              <span className="ease-speeddial-tooltip">{action.name}</span>
              <button 
                className="ease-speeddial-action-btn"
                aria-label={action.name}
                tabIndex={isOpen ? 0 : -1}
                onClick={() => {
                  action.onClick();
                  setIsOpen(false); // Close after action
                }}
              >
                {action.icon}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Main FAB Trigger */}
      <button 
        className="ease-speeddial-trigger" 
        onClick={toggleDial}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Toggle Speed Dial"
      >
        <span className="ease-speeddial-icon-default">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </span>
        <span className="ease-speeddial-icon-active">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default SpeedDial;
