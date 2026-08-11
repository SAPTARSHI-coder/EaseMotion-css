import React, { useState, useRef, useEffect } from 'react';
import './style.css';

/**
 * CollapseDropdown
 * 
 * A dropdown component that uses a CSS grid-based smooth collapse/expand animation.
 * Ideal for accordions, menus, or revealing extra details without jumping layout.
 */
const CollapseDropdown = ({
  triggerLabel = 'Toggle Dropdown',
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const handleToggle = () => setIsOpen((prev) => !prev);

  // Close on click outside (optional common behavior for dropdowns)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (contentRef.current && !contentRef.current.parentElement.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="collapse-dropdown-wrapper-ag">
      <button 
        type="button"
        className="collapse-dropdown-trigger-ag"
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        {triggerLabel}
        <svg 
          className={`collapse-dropdown-icon-ag ${isOpen ? 'open-ag' : ''}`} 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      <div 
        className={`collapse-dropdown-content-wrapper-ag ${isOpen ? 'is-open-ag' : ''}`}
        aria-hidden={!isOpen}
      >
        <div className="collapse-dropdown-inner-content-ag" ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapseDropdown;
