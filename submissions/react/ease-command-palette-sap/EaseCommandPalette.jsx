import React, { useState, useEffect } from 'react';
import './style.css';

export default function EaseCommandPalette({ isOpen, onClose, commands = [] }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="ease-cmd-overlay" onClick={onClose}>
      <div className="ease-cmd-modal" onClick={(e) => e.stopPropagation()}>
        <input
          type="text"
          className="ease-cmd-input"
          placeholder="Type a command or search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
        <div className="ease-cmd-list">
          {filtered.length === 0 ? (
            <div className="ease-cmd-empty">No matching commands found.</div>
          ) : (
            filtered.map((cmd, i) => (
              <div
                key={i}
                className="ease-cmd-item"
                onClick={() => {
                  cmd.action();
                  onClose();
                }}
              >
                <span>{cmd.label}</span>
                {cmd.shortcut && <kbd>{cmd.shortcut}</kbd>}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
