import React, { useState, useEffect, useRef } from 'react';
import './style.css';

const CommandPalette = ({ isOpen, onClose, actions }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Filter actions based on search query
  const filteredActions = actions.filter((action) =>
    action.name.toLowerCase().includes(query.toLowerCase())
  );

  // Reset state and focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 50); // slight delay to allow rendering/animation
    }
  }, [isOpen]);

  // Handle Keyboard Navigation (Up, Down, Enter, Escape)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < filteredActions.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
          break;
        case 'Enter':
          e.preventDefault();
          if (filteredActions[selectedIndex]) {
            filteredActions[selectedIndex].perform();
            onClose();
          }
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredActions, selectedIndex, onClose]);

  // Ensure selected item is scrolled into view
  useEffect(() => {
    if (listRef.current) {
      const selectedItem = listRef.current.children[selectedIndex];
      if (selectedItem) {
        selectedItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex]);

  // Handle external toggle shortcut (e.g., Cmd/Ctrl + K) if component manages its own open state
  // Usually this is handled by the parent component that passes `isOpen`, but we can provide a hint.

  if (!isOpen) return null;

  return (
    <div className="kbar-overlay ease-fade-in" onClick={onClose}>
      <div 
        className="kbar-content ease-slide-down"
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
        role="dialog"
        aria-modal="true"
      >
        <div className="kbar-search-container">
          <svg className="kbar-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            ref={inputRef}
            className="kbar-search-input"
            type="text"
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0); // reset selection on search
            }}
          />
        </div>

        <div className="kbar-results-container" ref={listRef}>
          {filteredActions.length > 0 ? (
            <ul className="kbar-results-list">
              {filteredActions.map((action, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <li
                    key={action.id || action.name}
                    className={`kbar-action-item ease-fade-in ${isSelected ? 'selected ease-hover-lift' : ''}`}
                    style={{ animationDelay: `${index * 0.03}s` }}
                    onMouseEnter={() => setSelectedIndex(index)}
                    onClick={() => {
                      action.perform();
                      onClose();
                    }}
                  >
                    <div className="kbar-action-left">
                      {action.icon && <span className="kbar-action-icon">{action.icon}</span>}
                      <span className="kbar-action-name">{action.name}</span>
                    </div>
                    {action.shortcut && (
                      <div className="kbar-action-shortcut">
                        {action.shortcut.map(key => (
                          <kbd key={key} className="kbar-kbd">{key}</kbd>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="kbar-empty ease-fade-in">
              <p>No results found for "{query}"</p>
            </div>
          )}
        </div>
        
        <div className="kbar-footer">
          <span><kbd className="kbar-kbd">↑</kbd> <kbd className="kbar-kbd">↓</kbd> to navigate</span>
          <span><kbd className="kbar-kbd">Enter</kbd> to select</span>
          <span><kbd className="kbar-kbd">Esc</kbd> to close</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
