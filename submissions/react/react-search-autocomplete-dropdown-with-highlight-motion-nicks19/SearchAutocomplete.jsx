import React, { useState, useRef, useEffect, useMemo } from 'react';
import './style.css';

export default function SearchAutocomplete({
  options = [],
  placeholder = 'Search...',
  onSelect,
  maxResults = 5,
}) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  const filteredOptions = useMemo(() => {
    if (!query) return options.slice(0, maxResults);
    const lowerQuery = query.toLowerCase();
    return options
      .filter((option) => option.label.toLowerCase().includes(lowerQuery))
      .slice(0, maxResults);
  }, [options, query, maxResults]);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex((prev) => (prev < filteredOptions.length - 1 ? prev + 1 : prev));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (activeIndex >= 0 && activeIndex < filteredOptions.length) {
          handleSelect(filteredOptions[activeIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  const handleSelect = (option) => {
    setQuery(option.label);
    setIsOpen(false);
    setActiveIndex(-1);
    if (onSelect) onSelect(option);
  };

  const highlightMatch = (text) => {
    if (!query) return text;
    const index = text.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) return text;
    
    return (
      <React.Fragment>
        {text.substring(0, index)}
        <span className="ease-autocomplete__highlight">{text.substring(index, index + query.length)}</span>
        {text.substring(index + query.length)}
      </React.Fragment>
    );
  };

  return (
    <div className="ease-autocomplete" ref={containerRef}>
      <div className="ease-autocomplete__input-wrapper">
        <svg className="ease-autocomplete__icon" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          className="ease-autocomplete__input ease-pulse-border-emphasis"
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            setActiveIndex(-1);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          aria-expanded={isOpen}
          aria-autocomplete="list"
          role="combobox"
        />
      </div>

      {isOpen && filteredOptions.length > 0 && (
        <ul className="ease-autocomplete__dropdown ease-slide-down ease-fade-in" role="listbox">
          {filteredOptions.map((option, index) => {
            const isActive = index === activeIndex;
            return (
              <li
                key={option.value || option.label}
                role="option"
                aria-selected={isActive}
                className={`ease-autocomplete__item ${isActive ? 'ease-autocomplete__item--active' : ''}`}
                onClick={() => handleSelect(option)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {highlightMatch(option.label)}
              </li>
            );
          })}
        </ul>
      )}
      
      {isOpen && query && filteredOptions.length === 0 && (
        <div className="ease-autocomplete__dropdown ease-slide-down ease-fade-in ease-autocomplete__no-results">
          No results found for "{query}"
        </div>
      )}
    </div>
  );
}
