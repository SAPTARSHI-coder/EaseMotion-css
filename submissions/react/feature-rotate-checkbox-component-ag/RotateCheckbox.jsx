import React, { useState } from 'react';
import './style.css';

/**
 * RotateCheckbox
 * 
 * A checkbox component that demonstrates a rotate loading indicator when clicked.
 * Simulates an async operation (like saving a preference) before checking the box.
 */
const RotateCheckbox = ({ 
  label, 
  initialChecked = false, 
  onChange, 
  loadingDuration = 1500 
}) => {
  const [isChecked, setIsChecked] = useState(initialChecked);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    // If currently loading, ignore the click
    if (isLoading) return;

    const newValue = !isChecked;
    setIsLoading(true);
    
    // Simulate an async operation
    setTimeout(() => {
      setIsChecked(newValue);
      setIsLoading(false);
      if (onChange) onChange(newValue);
    }, loadingDuration);
  };

  return (
    <label className={`rotate-checkbox-wrapper-ag ${isLoading ? 'is-loading-ag' : ''} ${isChecked ? 'is-checked-ag' : ''}`}>
      <div className="rotate-checkbox-input-container-ag">
        <input
          type="checkbox"
          className="rotate-checkbox-hidden-input-ag"
          checked={isChecked}
          onChange={handleChange}
          disabled={isLoading}
          aria-busy={isLoading}
        />
        
        {/* Custom Visual Checkbox */}
        <div className="rotate-checkbox-box-ag" aria-hidden="true">
          {isLoading ? (
            <div className="rotate-checkbox-spinner-ag" />
          ) : (
            <svg 
              className={`rotate-checkbox-check-icon-ag ${isChecked ? 'visible-ag' : ''}`}
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          )}
        </div>
      </div>
      {label && <span className="rotate-checkbox-label-text-ag">{label}</span>}
    </label>
  );
};

export default RotateCheckbox;
