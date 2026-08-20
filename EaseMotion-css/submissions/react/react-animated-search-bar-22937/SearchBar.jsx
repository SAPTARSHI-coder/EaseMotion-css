import React, { useState, useRef, useEffect } from 'react';

const SearchBar = ({ 
  placeholder = "Search...", 
  onSearch, 
  autoFocus = true 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  // Mock search results generator
  const getMockResults = (searchQuery) => {
    if (!searchQuery.trim()) return [];
    return [
      { id: 1, title: `${searchQuery} overview`, category: 'Guides' },
      { id: 2, title: `How to use ${searchQuery}`, category: 'Tutorials' },
      { id: 3, title: `${searchQuery} API reference`, category: 'Documentation' }
    ];
  };

  useEffect(() => {
    // Handle click outside to collapse
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        if (!query) {
          setIsExpanded(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [query]);

  useEffect(() => {
    if (isExpanded && autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded, autoFocus]);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
    inputRef.current?.focus();
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    
    if (val.trim()) {
      setIsSearching(true);
      // Simulate network delay
      setTimeout(() => {
        setResults(getMockResults(val));
        setIsSearching(false);
      }, 300);
    } else {
      setResults([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() && onSearch) {
      onSearch(query);
    }
  };

  return (
    <div 
      className={`search-container ${isExpanded ? 'is-expanded' : ''}`}
      ref={containerRef}
    >
      <form 
        className="search-bar ease-hover-glow" 
        onSubmit={handleSubmit}
        onClick={!isExpanded ? handleExpand : undefined}
      >
        <button 
          type="button" 
          className="search-icon-btn"
          aria-label="Search"
          onClick={handleExpand}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>

        <input
          ref={inputRef}
          type="text"
          className="search-input"
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
          readOnly={!isExpanded} // Prevent keyboard focus when collapsed
          tabIndex={isExpanded ? 0 : -1}
        />

        {isExpanded && query && (
          <button 
            type="button" 
            className="search-clear-btn ease-fade-in"
            onClick={handleClear}
            aria-label="Clear search"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}
      </form>

      {/* Search Results Dropdown */}
      {isExpanded && query && (
        <div className="search-dropdown ease-slide-down">
          {isSearching ? (
            <div className="search-status ease-pulse">Searching...</div>
          ) : results.length > 0 ? (
            <ul className="search-results-list">
              {results.map((result, index) => (
                <li 
                  key={result.id} 
                  className="search-result-item ease-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <a href={`#search-${result.id}`} className="search-result-link">
                    <div className="search-result-content">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="result-icon">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                      <span className="result-title">{result.title}</span>
                    </div>
                    <span className="result-category">{result.category}</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="search-status">No results found for "{query}"</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
