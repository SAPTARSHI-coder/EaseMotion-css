import React, { useState, useEffect, useRef } from 'react';

/**
 * CommandPalette Component (Kbar Style)
 * Renders an overlay command palette that opens on Ctrl+K / Cmd+K.
 * Supports keyboard navigation (Up/Down/Enter/Escape) and fuzzy search filtering.
 * 
 * @param {Object} props
 * @param {boolean} props.isOpen - Controls the visibility of the palette
 * @param {Function} props.onClose - Callback triggered when closing the palette
 * @param {Array} props.actions - List of actions: { id, title, subtitle, shortcut, category, onSelect }
 * @param {string} [props.accentColor='#8b5cf6'] - Active selection highlight color
 */
export default function CommandPalette({
  isOpen,
  onClose,
  actions = [],
  accentColor = '#8b5cf6'
}) {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Clear search and focus on open
  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Filter actions based on search query
  const filteredActions = actions.filter(action =>
    action.title.toLowerCase().includes(search.toLowerCase()) ||
    (action.subtitle && action.subtitle.toLowerCase().includes(search.toLowerCase())) ||
    (action.category && action.category.toLowerCase().includes(search.toLowerCase()))
  );

  // Reset selected index when search changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current && selectedIndex >= 0) {
      const activeEl = listRef.current.children[selectedIndex];
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  // Handle keyboard navigation within the modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % Math.max(filteredActions.length, 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredActions.length) % Math.max(filteredActions.length, 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredActions[selectedIndex]) {
          filteredActions[selectedIndex].onSelect();
          onClose();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredActions, selectedIndex, onClose]);

  if (!isOpen) return null;

  // Group filtered actions by category
  const categories = {};
  filteredActions.forEach(action => {
    const cat = action.category || 'General';
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(action);
  });

  // Flattened list to map selectedIndex to correct item
  const flatActions = Object.values(categories).flat();

  return (
    <div
      className="kbar-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(3, 7, 18, 0.8)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '15vh',
        zIndex: 1000
      }}
      onClick={onClose}
    >
      {/* Modal Dialog Card */}
      <div
        className="kbar-card ease-zoom-in ease-duration-normal"
        style={{
          width: '100%',
          maxWidth: '640px',
          height: 'fit-content',
          maxHeight: '450px',
          backgroundColor: '#0b0f19',
          border: '1px solid #1f2937',
          borderRadius: '12px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Box */}
        <input
          ref={inputRef}
          type="text"
          placeholder="Type a command or search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: '100%',
            boxSizing: 'border-box',
            padding: '1.25rem 1.5rem',
            fontSize: '1rem',
            border: 'none',
            borderBottom: '1px solid #1f2937',
            backgroundColor: 'transparent',
            color: '#fff',
            outline: 'none',
            fontFamily: 'inherit'
          }}
        />

        {/* Actions Scroll List */}
        <div
          ref={listRef}
          className="kbar-scroll-list"
          style={{
            overflowY: 'auto',
            padding: '0.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem'
          }}
        >
          {filteredActions.length === 0 ? (
            <div style={{ padding: '1.5rem', color: '#6b7280', fontSize: '0.9rem', textAlign: 'center' }}>
              No results found.
            </div>
          ) : (
            Object.keys(categories).map((catName) => (
              <div key={catName} style={{ display: 'flex', flexDirection: 'column' }}>
                {/* Category Header */}
                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: '#6b7280',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    padding: '0.5rem 0.75rem 0.25rem 0.75rem'
                  }}
                >
                  {catName}
                </div>

                {/* Category Action Items */}
                {categories[catName].map((action) => {
                  const globalIdx = flatActions.findIndex(item => item.id === action.id);
                  const isSelected = selectedIndex === globalIdx;

                  return (
                    <div
                      key={action.id}
                      onClick={() => {
                        action.onSelect();
                        onClose();
                      }}
                      onMouseEnter={() => setSelectedIndex(globalIdx)}
                      style={{
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        backgroundColor: isSelected ? 'rgba(139, 92, 246, 0.12)' : 'transparent',
                        transition: 'background-color 0.2s ease',
                        borderLeft: isSelected ? `3px solid ${accentColor}` : '3px solid transparent'
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem', textAlign: 'left' }}>
                        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: isSelected ? '#fff' : '#d1d5db' }}>
                          {action.title}
                        </span>
                        {action.subtitle && (
                          <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                            {action.subtitle}
                          </span>
                        )}
                      </div>

                      {/* Shortcut tags keys */}
                      {action.shortcut && (
                        <div style={{ display: 'flex', gap: '0.25rem' }}>
                          {action.shortcut.map((key, kIdx) => (
                            <kbd
                              key={kIdx}
                              style={{
                                padding: '0.15rem 0.4rem',
                                borderRadius: '4px',
                                border: '1px solid #374151',
                                backgroundColor: '#1f2937',
                                color: '#9ca3af',
                                fontSize: '0.7rem',
                                fontWeight: 700,
                                fontFamily: 'var(--metric-font-mono)'
                              }}
                            >
                              {key}
                            </kbd>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
