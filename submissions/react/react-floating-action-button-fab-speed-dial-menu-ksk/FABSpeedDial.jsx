import React, { useState } from 'react';
import './style.css';

/**
 * FABSpeedDial React Component
 * 
 * A Floating Action Button (FAB) that expands into a speed dial list of actions.
 * 
 * Props:
 * - actions: Array of objects representing the dial options:
 *   [{ icon: React.ReactNode, label: string, onClick: () => void }]
 * - position: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' (default: 'bottom-right')
 * - themeColor: 'primary' | 'success' | 'danger' | 'warning' (default: 'primary')
 * - mainIcon: Icon/text to display when closed (default: '+')
 * - openIcon: Icon/text to display when open (default: '+')
 */
export default function FABSpeedDial({
  actions = [],
  position = 'bottom-right',
  themeColor = 'primary',
  mainIcon = '+',
  openIcon = '+'
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={`ease-fab-container ease-fab-${position}`}>
      {/* Speed Dial Actions List */}
      <div className={`ease-fab-actions ${isOpen ? 'ease-fab-visible' : ''}`}>
        {actions.map((action, index) => (
          <div key={index} className="ease-fab-action-wrapper">
            {action.label && (
              <span className="ease-fab-tooltip">{action.label}</span>
            )}
            <button
              className="ease-fab-action-item"
              onClick={() => {
                if (action.onClick) action.onClick();
                setIsOpen(false);
              }}
              aria-label={action.label || `Action ${index + 1}`}
            >
              {action.icon}
            </button>
          </div>
        ))}
      </div>

      {/* Main Floating Action Button */}
      <button
        className={`ease-fab-trigger ease-fab-theme-${themeColor} ${isOpen ? 'ease-fab-open' : ''}`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle actions menu"
      >
        {isOpen ? openIcon : mainIcon}
      </button>
    </div>
  );
}
