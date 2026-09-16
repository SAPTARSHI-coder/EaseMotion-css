import React, { useState } from 'react';
import './style.css';

export const EaseDropdown = ({ options = [], onSelect }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

  const filtered = options.filter(o => o.label.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="ease-dropdown-wrapper">
      <button className="ease-dropdown-btn" onClick={() => setOpen(!open)}>
        {selected ? selected.label : 'Select Option...'}
      </button>
      {open && (
        <div className="ease-dropdown-menu">
          <input
            type="text"
            className="ease-dropdown-input"
            placeholder="Filter options..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {filtered.map((opt, idx) => (
            <div
              key={idx}
              className="ease-dropdown-opt"
              onClick={() => { setSelected(opt); setOpen(false); if (onSelect) onSelect(opt); }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EaseDropdown;
