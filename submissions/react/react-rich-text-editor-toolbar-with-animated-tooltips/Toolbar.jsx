import React, { useState } from 'react';

/**
 * Animated Tooltip Wrapper
 * 
 * @param {ReactNode} children - The button to wrap
 * @param {String} text - The tooltip text
 * @param {String} position - top, bottom
 */
const Tooltip = ({ children, text, position = 'top' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="ease-tooltip-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {children}
      <div 
        className={`ease-tooltip ease-tooltip-${position} ${isHovered ? 'is-visible' : ''}`}
        role="tooltip"
      >
        {text}
        <div className="ease-tooltip-arrow"></div>
      </div>
    </div>
  );
};

/**
 * Rich Text Editor Toolbar Component
 * 
 * @param {Function} onAction - Callback fired when a toolbar button is clicked
 */
const Toolbar = ({ onAction }) => {
  const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
  });

  const handleFormat = (format) => {
    setActiveFormats(prev => ({
      ...prev,
      [format]: !prev[format]
    }));
    if (onAction) onAction(format);
  };

  const toolbarButtons = [
    {
      id: 'bold',
      tooltip: 'Bold (Ctrl+B)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
          <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
        </svg>
      )
    },
    {
      id: 'italic',
      tooltip: 'Italic (Ctrl+I)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="4" x2="10" y2="4"></line>
          <line x1="14" y1="20" x2="5" y2="20"></line>
          <line x1="15" y1="4" x2="9" y2="20"></line>
        </svg>
      )
    },
    {
      id: 'underline',
      tooltip: 'Underline (Ctrl+U)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path>
          <line x1="4" y1="21" x2="20" y2="21"></line>
        </svg>
      )
    },
    {
      id: 'strikethrough',
      tooltip: 'Strikethrough',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.3 4.9c-2.3-.6-4.4-1-6.2-.9-2.7.2-5.3 1.1-5.3 4 0 3.2 5.5 3.5 8.1 4.3 3.8 1.1 5.3 3.1 5.3 5.9 0 3.4-3.5 4.8-7.2 4.8-2 0-4.3-.4-6.7-1.1"></path>
          <line x1="3" y1="12" x2="21" y2="12"></line>
        </svg>
      )
    }
  ];

  return (
    <div className="ease-editor-toolbar" role="toolbar" aria-label="Text Formatting">
      {toolbarButtons.map((btn) => (
        <Tooltip key={btn.id} text={btn.tooltip} position="top">
          <button
            className={`ease-toolbar-btn ${activeFormats[btn.id] ? 'is-active' : ''}`}
            onClick={() => handleFormat(btn.id)}
            aria-pressed={activeFormats[btn.id]}
            aria-label={btn.tooltip}
          >
            {btn.icon}
          </button>
        </Tooltip>
      ))}
      
      <div className="ease-toolbar-divider"></div>
      
      <Tooltip text="Align Left" position="top">
        <button className="ease-toolbar-btn" onClick={() => onAction && onAction('align-left')} aria-label="Align Left">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="21" y1="6" x2="3" y2="6"></line>
            <line x1="15" y1="12" x2="3" y2="12"></line>
            <line x1="17" y1="18" x2="3" y2="18"></line>
          </svg>
        </button>
      </Tooltip>
      
      <Tooltip text="Align Center" position="top">
        <button className="ease-toolbar-btn" onClick={() => onAction && onAction('align-center')} aria-label="Align Center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="21" y1="6" x2="3" y2="6"></line>
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <line x1="19" y1="18" x2="5" y2="18"></line>
          </svg>
        </button>
      </Tooltip>

    </div>
  );
};

export default Toolbar;
