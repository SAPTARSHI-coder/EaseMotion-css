import React, { useMemo, useState } from "react";
import "./SearchAutocomplete.css";

const suggestions = [
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "Next.js",
  "Vue.js",
  "Angular",
  "Tailwind CSS",
  "Bootstrap",
  "EaseMotion CSS",
  "HTML",
  "CSS",
  "MongoDB",
  "Firebase",
  "GraphQL",
  "Redux",
  "Framer Motion",
  "Material UI",
  "GitHub",
];

// Escape user input before constructing a RegExp
const escapeRegExp = (text) => {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

const SearchAutocomplete = () => {
  const [query, setQuery] = useState("");

  const filteredSuggestions = useMemo(() => {
    if (!query.trim()) return [];

    return suggestions.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const renderHighlightedText = (text, highlight) => {
    if (!highlight) return text;

    const escapedHighlight = escapeRegExp(highlight);

    const regex = new RegExp(`(${escapedHighlight})`, "gi");

    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <mark key={index} className="highlight">
          {part}
        </mark>
      ) : (
        <React.Fragment key={index}>{part}</React.Fragment>
      )
    );
  };

  return (
    <div className="search-container">
      <h2>Search Autocomplete</h2>

      <input
        type="text"
        placeholder="Search technologies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />

      {query && (
        <ul className="suggestions-list">
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((item) => (
              <li key={item} className="suggestion-item">
                {renderHighlightedText(item, query)}
              </li>
            ))
          ) : (
            <li className="no-results">No matching results</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchAutocomplete;