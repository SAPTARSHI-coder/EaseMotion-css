import React, { useState, useEffect, useRef } from 'react';

const SearchAutocompleteFixed = ({
  data = [],
  placeholder = "Search...",
  onSelect
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapperRef = useRef(null);

  const filteredData = query === ''
    ? []
    : data.filter(item =>
      item.label.toLowerCase().includes(query.toLowerCase())
    );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (!isOpen) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => (prev < filteredData.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault();
      handleSelect(filteredData[activeIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleSelect = (item) => {
    setQuery(item.label);
    setIsOpen(false);
    setActiveIndex(-1);
    if (onSelect) onSelect(item);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setIsOpen(true);
    setActiveIndex(-1);
  };

  const escapeRegex = (str) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  const renderHighlightedText = (text, highlight) => {
    if (!highlight.trim()) return text;

    const escaped = escapeRegex(highlight);
    const parts = text.split(new RegExp(`(${escaped})`, 'gi'));

    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase()
        ? <strong key={index} className="ease-search-highlight">{part}</strong>
        : part
    );
  };

  return (
    <div className="ease-search-wrapper" ref={wrapperRef}>
      <div className={`ease-search-input-container ${isOpen && query ? 'is-active' : ''}`}>
        <svg className="ease-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input
          type="text"
          className="ease-search-input"
          placeholder={placeholder}
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          aria-expanded={isOpen}
          aria-autocomplete="list"
          role="combobox"
        />
        <button
          className={`ease-search-clear ${query ? 'is-visible' : ''}`}
          onClick={() => { setQuery(''); setIsOpen(false); }}
          aria-label="Clear search"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div className={`ease-search-dropdown ${isOpen && query ? 'is-open' : ''}`}>
        {filteredData.length > 0 ? (
          <ul className="ease-search-list" role="listbox">
            <li
              className="ease-search-floating-highlight"
              style={{
                opacity: activeIndex >= 0 ? 1 : 0,
                transform: `translateY(${activeIndex * 44}px)`
              }}
              aria-hidden="true"
            />
            {filteredData.map((item, index) => (
              <li
                key={item.id}
                role="option"
                aria-selected={activeIndex === index}
                className={`ease-search-item ${activeIndex === index ? 'is-active' : ''}`}
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {renderHighlightedText(item.label, query)}
              </li>
            ))}
          </ul>
        ) : (
          query && (
            <div className="ease-search-empty">
              No results found for "{query}"
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SearchAutocompleteFixed;
