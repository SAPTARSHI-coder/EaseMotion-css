import React, { useState, useRef, useEffect } from 'react';
import './style.css';

const ToolbarButton = ({ icon, tooltip, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef(null);
  
  return (
    <div 
      className="ease-toolbar-button-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <button
        ref={buttonRef}
        type="button"
        className={`ease-toolbar-button ${isActive ? 'ease-toolbar-button-active' : ''}`}
        onClick={onClick}
        aria-label={tooltip}
        aria-pressed={isActive}
      >
        {icon}
      </button>
      
      {/* Animated Tooltip */}
      <div 
        className={`ease-tooltip ${isHovered ? 'ease-tooltip-visible' : ''}`}
        role="tooltip"
        aria-hidden={!isHovered}
      >
        {tooltip}
      </div>
    </div>
  );
};

export default function RichTextEditorToolbar({ 
  activeFormats = [], 
  onFormatToggle,
  className = ''
}) {

  // SVG Icons
  const icons = {
    bold: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
        <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
      </svg>
    ),
    italic: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="4" x2="10" y2="4"></line>
        <line x1="14" y1="20" x2="5" y2="20"></line>
        <line x1="15" y1="4" x2="9" y2="20"></line>
      </svg>
    ),
    underline: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path>
        <line x1="4" y1="21" x2="20" y2="21"></line>
      </svg>
    ),
    strikethrough: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.3 4.9c-2.3-.6-4.4-1-6.2-.9-2.7.2-5.3 1.1-5.3 3.6 0 1.5 1.7 2.6 4.6 3.2l5.2 1.1c2.9.6 4.6 1.7 4.6 3.2 0 2.5-2.6 3.4-5.3 3.6-1.8.1-3.9-.3-6.2-.9"></path>
        <line x1="3" y1="12" x2="21" y2="12"></line>
      </svg>
    ),
    link: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
      </svg>
    )
  };

  const handleToggle = (format) => {
    if (onFormatToggle) {
      onFormatToggle(format);
    }
  };

  const isFormatActive = (format) => activeFormats.includes(format);

  return (
    <div className={`ease-toolbar-container ${className}`} role="toolbar" aria-label="Text Formatting">
      <div className="ease-toolbar-group">
        <ToolbarButton 
          icon={icons.bold} 
          tooltip="Bold (Ctrl+B)" 
          isActive={isFormatActive('bold')} 
          onClick={() => handleToggle('bold')} 
        />
        <ToolbarButton 
          icon={icons.italic} 
          tooltip="Italic (Ctrl+I)" 
          isActive={isFormatActive('italic')} 
          onClick={() => handleToggle('italic')} 
        />
        <ToolbarButton 
          icon={icons.underline} 
          tooltip="Underline (Ctrl+U)" 
          isActive={isFormatActive('underline')} 
          onClick={() => handleToggle('underline')} 
        />
        <ToolbarButton 
          icon={icons.strikethrough} 
          tooltip="Strikethrough" 
          isActive={isFormatActive('strikethrough')} 
          onClick={() => handleToggle('strikethrough')} 
        />
      </div>
      
      <div className="ease-toolbar-divider" aria-hidden="true" />
      
      <div className="ease-toolbar-group">
        <ToolbarButton 
          icon={icons.link} 
          tooltip="Insert Link (Ctrl+K)" 
          isActive={isFormatActive('link')} 
          onClick={() => handleToggle('link')} 
        />
      </div>
    </div>
  );
}
