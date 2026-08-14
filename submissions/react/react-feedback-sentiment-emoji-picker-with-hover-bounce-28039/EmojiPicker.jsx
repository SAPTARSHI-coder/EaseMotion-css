import React, { useState } from 'react';

/**
 * Feedback Sentiment Emoji Picker
 * 
 * @param {string} question - The prompt question to display
 * @param {function} onSelect - Callback when an emoji is selected, passes { id, label }
 * @param {string} defaultSelected - Optional ID of initially selected emoji
 */
const EmojiPicker = ({ 
  question = "How was your experience today?", 
  onSelect,
  defaultSelected = null
}) => {
  const [selectedId, setSelectedId] = useState(defaultSelected);

  const emojis = [
    { id: 'terrible', label: 'Terrible', emoji: '😡' },
    { id: 'bad', label: 'Bad', emoji: '🙁' },
    { id: 'okay', label: 'Okay', emoji: '😐' },
    { id: 'good', label: 'Good', emoji: '🙂' },
    { id: 'excellent', label: 'Excellent', emoji: '🤩' }
  ];

  const handleSelect = (emoji) => {
    setSelectedId(emoji.id);
    if (onSelect) onSelect(emoji);
  };

  return (
    <div className="ease-emoji-picker-container">
      <h3 className="ease-emoji-question">{question}</h3>
      
      <div className="ease-emoji-list" role="radiogroup" aria-labelledby="feedback-question">
        {emojis.map((item, index) => {
          const isSelected = selectedId === item.id;
          
          return (
            <div 
              key={item.id}
              className={`ease-emoji-item-wrapper ${isSelected ? 'is-selected' : ''}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                type="button"
                role="radio"
                aria-checked={isSelected}
                aria-label={item.label}
                className="ease-emoji-btn"
                onClick={() => handleSelect(item)}
              >
                <span className="ease-emoji-character">{item.emoji}</span>
              </button>
              <span className="ease-emoji-label">{item.label}</span>
            </div>
          );
        })}
      </div>
      
      <div className={`ease-emoji-thank-you ${selectedId ? 'is-visible' : ''}`}>
        Thank you for your feedback!
      </div>
    </div>
  );
};

export default EmojiPicker;
