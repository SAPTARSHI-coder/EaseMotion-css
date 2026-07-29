import React, { useState } from 'react';
import './style.css';

export default function RatingStarBar({ max = 5, initial = 0, onChange } = {}) {
  const [rating, setRating] = useState(initial);
  const [hover, setHover] = useState(0);

  const handle = (v) => {
    setRating(v);
    if (onChange) onChange(v);
  };

  return (
    <div className="ease-rating">
      {[...Array(max)].map((_, i) => {
        const v = i + 1;
        const filled = v <= (hover || rating);
        return (
          <span key={v} className={`ease-star ${filled ? 'filled' : ''}`} onMouseEnter={() => setHover(v)} onMouseLeave={() => setHover(0)} onClick={() => handle(v)}>
            ★
          </span>
        );
      })}
      <span className="ease-rating-value">{hover || rating}/{max}</span>
    </div>
  );
}
