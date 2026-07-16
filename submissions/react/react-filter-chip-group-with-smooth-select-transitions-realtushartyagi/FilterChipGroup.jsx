import React, { useState } from 'react';

const FilterChip = ({ label, selected, onClick }) => {
  return (
    <button
      className={`ease-filter-chip ${selected ? 'ease-chip-selected' : ''}`}
      onClick={onClick}
      aria-pressed={selected}
    >
      {/* Optional checkmark that scales in when selected */}
      <svg
        className={`ease-chip-check ${selected ? 'ease-check-visible' : ''}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span className="ease-chip-label">{label}</span>
    </button>
  );
};

const FilterChipGroup = ({ 
  options = [], 
  multiSelect = true, 
  initialSelected = [], 
  onChange 
}) => {
  const [selectedIds, setSelectedIds] = useState(initialSelected);

  const handleToggle = (id) => {
    let newSelected;
    if (multiSelect) {
      if (selectedIds.includes(id)) {
        newSelected = selectedIds.filter((item) => item !== id);
      } else {
        newSelected = [...selectedIds, id];
      }
    } else {
      newSelected = selectedIds.includes(id) ? [] : [id];
    }
    
    setSelectedIds(newSelected);
    if (onChange) onChange(newSelected);
  };

  return (
    <div className="ease-filter-chip-group ease-staggered-group">
      {options.map((option, index) => (
        <div 
          key={option.id} 
          className="ease-staggered-item" 
          style={{ '--stagger-delay': `${index * 0.05}s` }}
        >
          <FilterChip
            label={option.label}
            selected={selectedIds.includes(option.id)}
            onClick={() => handleToggle(option.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default FilterChipGroup;
