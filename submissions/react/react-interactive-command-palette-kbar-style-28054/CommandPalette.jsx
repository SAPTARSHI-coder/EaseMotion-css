import React, { useState, useEffect, useRef } from 'react';

/**
 * Interactive Command Palette (Kbar Style)
 * 
 * @param {boolean} isOpen - Controls visibility of the palette
 * @param {function} onClose - Callback when palette should close
 * @param {Array} commands - Array of command objects: { id, title, icon, action, shortcut }
 */
const CommandPalette = ({ isOpen, onClose, commands = [] }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Filter commands based on search
  const filteredCommands = commands.filter(cmd => 
    cmd.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setSearchQuery('');
      setSelectedIndex(0);
      // Slight delay to ensure element is mounted before focusing
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => (prev < filteredCommands.length - 1 ? prev + 1 : prev));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
          break;
        case 'Enter':
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action();
            onClose();
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  // Scroll active item into view
  useEffect(() => {
    if (isOpen && listRef.current) {
      const activeItem = listRef.current.children[selectedIndex];
      if (activeItem) {
        activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="ease-kpalette-overlay" onClick={onClose}>
      <div 
        className="ease-kpalette-modal" 
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
        role="dialog"
        aria-modal="true"
      >
        {/* Search Header */}
        <div className="ease-kpalette-header">
          <svg className="ease-kpalette-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            ref={inputRef}
            className="ease-kpalette-input"
            type="text"
            placeholder="Type a command or search..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSelectedIndex(0); // Reset index on search change
            }}
          />
          <kbd className="ease-kpalette-esc-hint">ESC</kbd>
        </div>

        {/* Command List */}
        <div className="ease-kpalette-list" ref={listRef}>
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd, index) => (
              <div
                key={cmd.id}
                className={`ease-kpalette-item ${index === selectedIndex ? 'is-selected' : ''}`}
                onMouseEnter={() => setSelectedIndex(index)}
                onClick={() => {
                  cmd.action();
                  onClose();
                }}
              >
                <div className="ease-kpalette-item-icon">
                  {cmd.icon}
                </div>
                <span className="ease-kpalette-item-title">{cmd.title}</span>
                {cmd.shortcut && (
                  <div className="ease-kpalette-item-shortcuts">
                    {cmd.shortcut.map(key => (
                      <kbd key={key}>{key}</kbd>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="ease-kpalette-empty">
              No results found for "{searchQuery}"
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="ease-kpalette-footer">
          <span>Search for actions across the app</span>
          <div className="ease-kpalette-footer-hints">
            <span><kbd>↑</kbd> <kbd>↓</kbd> to navigate</span>
            <span><kbd>↵</kbd> to select</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
