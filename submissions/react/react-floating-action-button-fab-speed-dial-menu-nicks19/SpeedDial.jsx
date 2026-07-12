import React, { useState, useRef, useEffect } from 'react';
import './style.css';

export default function SpeedDial({ 
  actions = [], 
  position = 'bottom-right',
  mainIcon = null,
  activeIcon = null
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    // Close on Escape key
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);

  const toggleDial = () => setIsOpen(!isOpen);

  // Default icons
  const defaultMainIcon = (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );

  const defaultActiveIcon = (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  return (
    <div 
      className={`ease-speed-dial-container ease-speed-dial-${position}`} 
      ref={containerRef}
    >
      <div 
        className={`ease-speed-dial-actions ${isOpen ? 'ease-speed-dial-open' : ''}`}
        aria-hidden={!isOpen}
      >
        {actions.map((action, index) => {
          // Calculate reverse index for staggered entrance from bottom to top
          const delay = `${(actions.length - 1 - index) * 0.05}s`;
          
          return (
            <div 
              key={action.name} 
              className="ease-speed-dial-action-wrapper"
              style={{ transitionDelay: isOpen ? delay : '0s' }}
            >
              {action.tooltip && (
                <span className="ease-speed-dial-tooltip">
                  {action.tooltip}
                </span>
              )}
              <button
                type="button"
                className="ease-speed-dial-action-btn"
                onClick={() => {
                  action.onClick();
                  setIsOpen(false);
                }}
                aria-label={action.name}
                tabIndex={isOpen ? 0 : -1}
              >
                {action.icon}
              </button>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className="ease-speed-dial-fab"
        onClick={toggleDial}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label="Toggle speed dial menu"
      >
        <span className={`ease-speed-dial-icon ${isOpen ? 'ease-speed-dial-icon-hidden' : ''}`}>
          {mainIcon || defaultMainIcon}
        </span>
        <span className={`ease-speed-dial-active-icon ${isOpen ? 'ease-speed-dial-active-icon-visible' : ''}`}>
          {activeIcon || defaultActiveIcon}
        </span>
      </button>
    </div>
  );
}
