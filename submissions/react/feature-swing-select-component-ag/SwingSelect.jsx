import React, { useState, useRef, useEffect } from "react";
import "./style.css";

const SwingSelect = ({ options = [], value, onChange, placeholder = "Select option..." }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldSwing, setShouldSwing] = useState(false);
  const containerRef = useRef(null);

  const selectedOption = options.find((opt) => opt.value === value);

  const handleSelect = (val) => {
    if (val !== value) {
      setShouldSwing(true);
      onChange && onChange(val);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (shouldSwing) {
      const timer = setTimeout(() => setShouldSwing(false), 600);
      return () => clearTimeout(timer);
    }
  }, [shouldSwing]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="swing-select-container-ag" ref={containerRef}>
      <button
        type="button"
        className={`swing-select-trigger-ag ${shouldSwing ? "swing-animation-ag" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Select: ${selectedOption ? selectedOption.label : placeholder}`}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <span className={`swing-select-arrow-ag ${isOpen ? "open-ag" : ""}`}>▼</span>
      </button>

      {isOpen && (
        <ul className="swing-select-options-ag" role="listbox">
          {options.map((opt) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={opt.value === value}
              className={`swing-select-option-ag ${opt.value === value ? "selected-ag" : ""}`}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SwingSelect;
