import React, { useState, useRef, useEffect } from 'react';

/**
 * Tag Input Cloud with Smooth Removable Motion
 * 
 * @param {Array} initialTags - Array of initial tag strings
 * @param {String} placeholder - Input placeholder text
 * @param {Function} onChange - Callback fired when tags change
 */
const TagInput = ({ initialTags = [], placeholder = "Add a tag...", onChange }) => {
  const [tags, setTags] = useState(
    initialTags.map(tag => ({ id: Math.random().toString(36).substr(2, 9), text: tag, isRemoving: false }))
  );
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  // Notify parent of changes (passing just strings, ignoring internal IDs)
  useEffect(() => {
    if (onChange) {
      onChange(tags.filter(t => !t.isRemoving).map(t => t.text));
    }
  }, [tags, onChange]);

  const addTag = (text) => {
    const trimmed = text.trim();
    // Prevent empty or duplicate active tags
    if (!trimmed || tags.some(t => !t.isRemoving && t.text.toLowerCase() === trimmed.toLowerCase())) {
      return;
    }
    
    setTags([...tags, { id: Math.random().toString(36).substr(2, 9), text: trimmed, isRemoving: false }]);
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag(inputValue);
    } else if (e.key === 'Backspace' && !inputValue) {
      // Remove the last active tag if backspace is pressed while input is empty
      const activeTags = tags.filter(t => !t.isRemoving);
      if (activeTags.length > 0) {
        removeTag(activeTags[activeTags.length - 1].id);
      }
    }
  };

  const removeTag = (idToRemove) => {
    // 1. Mark as removing to trigger the exit CSS animation
    setTags(currentTags => 
      currentTags.map(tag => 
        tag.id === idToRemove ? { ...tag, isRemoving: true } : tag
      )
    );

    // 2. Actually remove from DOM after the animation completes (300ms matches CSS)
    setTimeout(() => {
      setTags(currentTags => currentTags.filter(tag => tag.id !== idToRemove));
    }, 300);
  };

  // Focus input when clicking anywhere in the container
  const handleContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="ease-tag-input-container" onClick={handleContainerClick}>
      <div className="ease-tag-cloud">
        {tags.map((tag) => (
          <div 
            key={tag.id} 
            className={`ease-tag ${tag.isRemoving ? 'ease-tag-removing' : 'ease-tag-entering'}`}
          >
            <span className="ease-tag-text">{tag.text}</span>
            <button 
              type="button"
              className="ease-tag-remove-btn" 
              onClick={(e) => {
                e.stopPropagation();
                removeTag(tag.id);
              }}
              aria-label={`Remove ${tag.text} tag`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        ))}
        
        <input
          ref={inputRef}
          type="text"
          className="ease-tag-input-field"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={() => addTag(inputValue)}
          placeholder={tags.filter(t => !t.isRemoving).length === 0 ? placeholder : ''}
          aria-label="Add new tag"
        />
      </div>
    </div>
  );
};

export default TagInput;
