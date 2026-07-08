import React, { useState } from 'react';
import './FilterChipGroup.css';

/**
 * Filter Chip Group with Smooth Select Transitions
 * 
 * A reusable React component that renders a group of interactive
 * filter chips. It handles multi-selection state and utilizes
 * pure CSS transitions to smoothly animate background colors, 
 * text colors, and the entrance/exit of a checkmark icon.
 * 
 * @param {Array<Object>} filters - Array of filter objects { id: string, label: string }
 * @param {Array<string>} initialSelected - Array of filter IDs that are selected by default
 * @param {function} onChange - Callback returning the array of currently selected IDs
 */
const FilterChipGroup = ({ 
  filters = [
    { id: 'f1', label: 'All' },
    { id: 'f2', label: 'Design' },
    { id: 'f3', label: 'Development' },
    { id: 'f4', label: 'Marketing' },
    { id: 'f5', label: 'Product' }
  ],
  initialSelected = ['f1'],
  onChange = () => {}
}) => {
  const [selectedIds, setSelectedIds] = useState(initialSelected);

  const toggleFilter = (id) => {
    let newSelection;
    if (selectedIds.includes(id)) {
      // Deselect
      newSelection = selectedIds.filter((selectedId) => selectedId !== id);
    } else {
      // Select
      newSelection = [...selectedIds, id];
    }
    setSelectedIds(newSelection);
    if (onChange) {
      onChange(newSelection);
    }
  };

  return (
    <div 
      className="ease-chip-group"
      role="group" 
      aria-label="Filter Options"
    >
      {filters.map((filter) => {
        const isSelected = selectedIds.includes(filter.id);
        
        return (
          <button
            key={filter.id}
            type="button"
            className={`ease-filter-chip ${isSelected ? 'ease-chip-selected' : ''}`}
            aria-pressed={isSelected}
            onClick={() => toggleFilter(filter.id)}
          >
            <span className="ease-chip-icon-wrapper">
              <svg 
                className="ease-chip-check-icon"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </span>
            <span className="ease-chip-label">{filter.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default FilterChipGroup;
