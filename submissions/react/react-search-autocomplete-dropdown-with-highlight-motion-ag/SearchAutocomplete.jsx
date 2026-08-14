import React, { useState, useRef, useEffect } from 'react';
import './style.css';

// search autocomplete with highlight motion
export default function SearchAutocomplete({
  items = [],
  placeholder = "Search...",
  onSelect
}) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  // filter matching items
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  // close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setIsOpen(value.length > 0);
  };

  // select item
  const handleSelect = (item) => {
    setQuery(item);
    setIsOpen(false);
    if (onSelect) onSelect(item);
  };

  // highlight matching text
  const renderHighlightedText = (text, highlight) => {
    if (!highlight) return <span>{text}</span>;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    
    return (
      <span>
        {parts.map((part, i) => 
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="highlight-text ease-pulse">{part}</span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </span>
    );
  };

  return (
    <div ref={wrapperRef} className="search-wrapper">
      {/* input field */}
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
        onFocus={() => { if (query.length > 0) setIsOpen(true); }}
      />
      
      {/* dropdown list */}
      {isOpen && (
        <ul className="search-dropdown ease-slide-down">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li 
                key={index}
                className="search-item ease-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => handleSelect(item)}
              >
                {renderHighlightedText(item, query)}
              </li>
            ))
          ) : (
            <li className="search-no-results">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}
