import React, { useState } from 'react';
import './flip-card.scss';

/**
 * EaseFlipCard
 * A reusable 3D flip‑card component.
 *
 * Props:
 * - front: ReactNode – content shown on the front side
 * - back: ReactNode – content shown on the back side
 * - flipTrigger: 'hover' | 'click' (default: 'click')
 * - duration: number – animation duration in seconds (default: 0.6)
 */
export default function EaseFlipCard({ front, back, flipTrigger = 'click', duration = 0.6 }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    if (flipTrigger === 'click') setFlipped((prev) => !prev);
  };

  return (
    <div
      className={`flip-card ${flipTrigger}`}
      style={{ '--flip-duration': `${duration}s` }}
      onClick={handleClick}
    >
      <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
        <div className="flip-card-front">{front}</div>
        <div className="flip-card-back">{back}</div>
      </div>
    </div>
  );
}
