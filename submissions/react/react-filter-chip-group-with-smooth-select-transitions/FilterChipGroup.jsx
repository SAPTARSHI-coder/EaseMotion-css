import React, { useState } from 'react';
import './style.css';

/**
 * FilterChipGroup
 * A group of selectable filter chips with a smooth scale/fade transition
 * on select and deselect. Supports single or multi-select.
 */
export default function FilterChipGroup({
  options,
  multiSelect = true,
  defaultSelected = [],
  onChange,
}) {
  const [selected, setSelected] = useState(defaultSelected);

  const toggleChip = (value) => {
    let next;
    if (multiSelect) {
      next = selected.includes(value)
        ? selected.filter((v) => v !== value)
        : [...selected, value];
    } else {
      next = selected.includes(value) ? [] : [value];
    }
    setSelected(next);
    onChange?.(next);
  };

  return (
    <div className="ease-chip-group" role="group" aria-label="Filter options">
      {options.map((option) => {
        const isActive = selected.includes(option.value);
        return (
          <button
            key={option.value}
            type="button"
            className={`ease-chip ${isActive ? 'ease-chip--active' : ''}`}
            aria-pressed={isActive}
            onClick={() => toggleChip(option.value)}
          >
            <span className="ease-chip__label">{option.label}</span>
            <span className="ease-chip__check" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="12" height="12">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </button>
        );
      })}
    </div>
  );
}
