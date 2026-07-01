import React, { useState, useRef, useEffect } from 'react';

/**
 * Language Selector Dropdown with Flag Fade Transitions
 * 
 * @param {Array} languages - Array of language objects { code, name, flag }
 * @param {String} defaultLanguage - The default language code to display
 */
const LanguageSelector = ({ languages = [], defaultLanguage = 'en' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(
    languages.find(l => l.code === defaultLanguage) || languages[0]
  );
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    setIsOpen(false);
  };

  return (
    <div className="ease-lang-selector" ref={dropdownRef}>
      
      {/* The main trigger button */}
      <button 
        className={`ease-lang-trigger ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="ease-lang-trigger-content">
          {/* We use a key on the flag span to trigger the CSS fade-in animation on change */}
          <span className="ease-lang-flag" key={`flag-${selectedLang.code}`}>
            {selectedLang.flag}
          </span>
          <span className="ease-lang-code">{selectedLang.code.toUpperCase()}</span>
        </div>
        
        {/* Animated Chevron */}
        <svg 
          className="ease-lang-chevron" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {/* The Dropdown Menu */}
      <div 
        className={`ease-lang-dropdown ${isOpen ? 'is-visible' : ''}`}
        role="listbox"
      >
        <ul className="ease-lang-list">
          {languages.map((lang, index) => {
            const isSelected = lang.code === selectedLang.code;
            return (
              <li 
                key={lang.code}
                role="option"
                aria-selected={isSelected}
                className={`ease-lang-option ${isSelected ? 'is-selected' : ''}`}
                onClick={() => handleSelect(lang)}
                style={{ 
                  // Stagger the entrance animation of list items
                  transitionDelay: isOpen ? `${index * 0.05}s` : '0s' 
                }}
              >
                <span className="ease-lang-option-flag">{lang.flag}</span>
                <span className="ease-lang-option-name">{lang.name}</span>
                
                {/* Active checkmark */}
                {isSelected && (
                  <svg className="ease-lang-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      </div>

    </div>
  );
};

export default LanguageSelector;
