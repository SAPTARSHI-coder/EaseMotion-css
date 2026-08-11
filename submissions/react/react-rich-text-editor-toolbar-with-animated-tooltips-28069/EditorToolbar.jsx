import React, { useState } from 'react';

/**
 * Rich Text Editor Toolbar with Animated Tooltips
 */
const EditorToolbar = () => {
  const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
    underline: false,
    alignLeft: true,
    alignCenter: false,
    alignRight: false,
  });

  const toggleFormat = (format) => {
    // Handle alignment mutually exclusive logic
    if (format.startsWith('align')) {
      setActiveFormats(prev => ({
        ...prev,
        alignLeft: format === 'alignLeft',
        alignCenter: format === 'alignCenter',
        alignRight: format === 'alignRight'
      }));
    } else {
      setActiveFormats(prev => ({
        ...prev,
        [format]: !prev[format]
      }));
    }
  };

  const ToolbarButton = ({ id, icon, label, shortcut }) => {
    const isActive = activeFormats[id];
    
    return (
      <div className="ease-toolbar-item">
        <button 
          className={`ease-toolbar-btn ${isActive ? 'is-active' : ''}`}
          onClick={() => toggleFormat(id)}
          aria-label={label}
          aria-pressed={isActive}
        >
          {icon}
        </button>
        {/* Animated Tooltip */}
        <div className="ease-toolbar-tooltip" role="tooltip">
          <span className="ease-tooltip-label">{label}</span>
          {shortcut && <span className="ease-tooltip-shortcut">{shortcut}</span>}
        </div>
      </div>
    );
  };

  const Divider = () => <div className="ease-toolbar-divider" aria-hidden="true"></div>;

  return (
    <div className="ease-toolbar-container" role="toolbar" aria-label="Text Formatting">
      <div className="ease-toolbar-group">
        <ToolbarButton 
          id="bold" 
          label="Bold" 
          shortcut="⌘B"
          icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path></svg>} 
        />
        <ToolbarButton 
          id="italic" 
          label="Italic" 
          shortcut="⌘I"
          icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line></svg>} 
        />
        <ToolbarButton 
          id="underline" 
          label="Underline" 
          shortcut="⌘U"
          icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line></svg>} 
        />
      </div>

      <Divider />

      <div className="ease-toolbar-group">
        <ToolbarButton 
          id="alignLeft" 
          label="Align Left" 
          shortcut="⌘⇧L"
          icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>} 
        />
        <ToolbarButton 
          id="alignCenter" 
          label="Align Center" 
          shortcut="⌘⇧E"
          icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line></svg>} 
        />
        <ToolbarButton 
          id="alignRight" 
          label="Align Right" 
          shortcut="⌘⇧R"
          icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line></svg>} 
        />
      </div>
      
      <Divider />

      <div className="ease-toolbar-group">
        <ToolbarButton 
          id="link" 
          label="Insert Link" 
          shortcut="⌘K"
          icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>} 
        />
      </div>

    </div>
  );
};

export default EditorToolbar;
