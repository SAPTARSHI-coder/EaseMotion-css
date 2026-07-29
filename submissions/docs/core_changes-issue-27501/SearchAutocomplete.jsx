import React, { useState, useRef, useEffect } from 'react';
import './style.css';

const items = ['Animation', 'Background', 'Border', 'Color', 'Display', 'Flexbox', 'Grid', 'Height', 'Image', 'Justify', 'Keyframe', 'Layout', 'Margin', 'Opacity'];

export default function SearchAutocomplete() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handle = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  const handleChange = (v) => {
    setQuery(v);
    if (v.length > 0) {
      setResults(items.filter(i => i.toLowerCase().includes(v.toLowerCase())).slice(0, 5));
      setOpen(true);
    } else { setOpen(false); }
  };

  return (
    <div className="ease-search" ref={ref}>
      <div className="ease-search-input-wrap">
        <span className="ease-search-icon">🔍</span>
        <input className="ease-search-input" placeholder="Search CSS properties..." value={query} onChange={e => handleChange(e.target.value)} onFocus={() => query && setOpen(true)} />
      </div>
      {open && results.length > 0 && (
        <div className="ease-search-dropdown">
          {results.map(r => (
            <div key={r} className="ease-search-result" onClick={() => { setQuery(r); setOpen(false); }}>
              <span className="ease-search-match">{r}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
