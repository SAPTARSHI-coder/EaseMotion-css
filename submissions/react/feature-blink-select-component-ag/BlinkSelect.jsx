import React, { useState, useRef, useEffect } from 'react';
import './style.css';

/**
 * BlinkSelect component provides a custom dropdown/select control.
 * It exhibits a subtle, premium breathing/blinking border glow when idle.
 *
 * @param {Object} props
 * @param {Array} props.options - Array of items to select from e.g., [{ value: '1', label: 'Option 1' }]
 * @param {string} props.value - Selected option value
 * @param {function} props.onChange - Selection callback
 * @param {string} props.placeholder - Display placeholder text
 */
const BlinkSelect = ({ options = [], value, onChange, placeholder = 'Select an option' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  const selectedOption = options.find(opt => opt.value === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    if (onChange) {
      onChange(option.value);
    }
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  // Keyboard navigation support
  const handleKeyDown = (event) => {
    if (!isOpen) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setIsOpen(true);
        setFocusedIndex(options.findIndex(opt => opt.value === value));
      }
      return;
    }

    switch (event.key) {
      case 'Escape':
        setIsOpen(false);
        triggerRef.current?.focus();
        break;
      case 'ArrowDown':
        event.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % options.length);
        break;
      case 'ArrowUp':
        event.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + options.length) % options.length);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < options.length) {
          handleSelect(options[focusedIndex]);
        }
        break;
      case 'Tab':
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <div 
      className={`blink-select-container-ag ${isOpen ? 'is-open-ag' : ''}`} 
      ref={containerRef}
    >
      <button
        type="button"
        ref={triggerRef}
        className="blink-select-trigger-ag"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={placeholder}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <svg className="blink-select-caret-ag" viewBox="0 0 24 24">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      <ul 
        className="blink-select-dropdown-ag" 
        role="listbox"
        aria-label="Options"
      >
        {options.map((option, idx) => (
          <li
            key={option.value}
            role="option"
            aria-selected={value === option.value}
            className={`blink-select-option-ag 
              ${value === option.value ? 'is-selected-ag' : ''} 
              ${idx === focusedIndex ? 'is-focused-ag' : ''}`
            }
            onClick={() => handleSelect(option)}
            onMouseEnter={() => setFocusedIndex(idx)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlinkSelect;
export { BlinkSelect };
