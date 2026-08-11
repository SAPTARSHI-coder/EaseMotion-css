import React, { useState } from 'react';
import './style.css';

/**
 * SlideCheckbox
 * 
 * A React component that wraps a native checkbox input.
 * When checked, a stylized checkmark slides in from the left.
 * When unchecked, it slides out to the right.
 * 
 * @param {Object} props
 * @param {string} props.label - The text label for the checkbox.
 * @param {boolean} [props.checked] - The controlled checked state.
 * @param {function} [props.onChange] - Callback when the state changes.
 * @param {boolean} [props.disabled] - Whether the checkbox is disabled.
 */
const SlideCheckbox = ({ 
  label, 
  checked: controlledChecked, 
  onChange,
  disabled = false,
  ...props 
}) => {
  const isControlled = controlledChecked !== undefined;
  const [internalChecked, setInternalChecked] = useState(false);
  
  const isChecked = isControlled ? controlledChecked : internalChecked;

  const handleChange = (e) => {
    if (!isControlled) {
      setInternalChecked(e.target.checked);
    }
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <label className={`ease-slide-checkbox-wrapper-ag ${disabled ? 'disabled-ag' : ''}`}>
      <input
        type="checkbox"
        className="ease-slide-checkbox-input-ag"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        {...props}
      />
      <div className="ease-slide-checkbox-box-ag" aria-hidden="true">
        <svg 
          className="ease-slide-checkbox-icon-ag" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      {label && <span className="ease-slide-checkbox-label-ag">{label}</span>}
    </label>
  );
};

export default SlideCheckbox;
