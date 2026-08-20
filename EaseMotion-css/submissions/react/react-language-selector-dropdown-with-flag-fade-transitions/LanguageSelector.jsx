import React, { useState, useRef, useEffect } from 'react';

/**
 * Language Selector Dropdown with Flag Fade Transitions
 * 
 * @param {Array} languages - Array of language objects: { code: 'en', name: 'English', flagUrl: '...' }
 * @param {String} defaultLanguageCode - The language code to select initially
 * @param {Function} onChange - Callback fired when a new language is selected
 */
const LanguageSelector = ({ languages = [], defaultLanguageCode, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(
    languages.find(l => l.code === defaultLanguageCode) || languages[0]
  );
  
  // Ref for handling click outside to close
  const dropdownRef = useRef(null);

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
    if (onChange) {
      onChange(lang);
    }
  };

  if (!languages || languages.length === 0) return null;

  return (
    <div className="ease-lang-selector" ref={dropdownRef}>
      {/* Trigger Button */}
      <button 
        className={`ease-lang-trigger ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="ease-lang-flag-container">
          {/* 
            Render all flags but only show the selected one using opacity transition 
            This creates the smooth "fade" effect instead of instant DOM replacement
          */}
          {languages.map((lang) => (
            <img 
              key={`trigger-${lang.code}`}
              src={lang.flagUrl} 
              alt={`${lang.name} flag`} 
              className={`ease-lang-flag ${selectedLang.code === lang.code ? 'is-active' : ''}`}
            />
          ))}
        </div>
        
        <span className="ease-lang-code">{selectedLang.code.toUpperCase()}</span>
        
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

      {/* Dropdown Menu */}
      <div 
        className={`ease-lang-dropdown ${isOpen ? 'is-open' : ''}`}
        role="listbox"
      >
        <ul className="ease-lang-list">
          {languages.map((lang) => (
            <li 
              key={lang.code}
              role="option"
              aria-selected={selectedLang.code === lang.code}
              className={`ease-lang-option ${selectedLang.code === lang.code ? 'is-selected' : ''}`}
              onClick={() => handleSelect(lang)}
            >
              <img src={lang.flagUrl} alt={`${lang.name} flag`} className="ease-lang-option-flag" />
              <span className="ease-lang-option-name">{lang.name}</span>
              
              {/* Checkmark for selected item */}
              {selectedLang.code === lang.code && (
                <svg className="ease-lang-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LanguageSelector;
