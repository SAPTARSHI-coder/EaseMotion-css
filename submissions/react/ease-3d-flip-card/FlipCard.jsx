import React, { useState } from 'react';
import './style.css'; // Includes scoped perspective utilities if needed

/**
 * 3D Flip Card Component utilizing EaseMotion utility classes.
 * @param {React.ReactNode} frontContent - The content to display on the front of the card.
 * @param {React.ReactNode} backContent - The content to display on the back of the card.
 * @param {'horizontal' | 'vertical'} flipDirection - The axis on which to flip the card.
 */
const FlipCard = ({ frontContent, backContent, flipDirection = 'horizontal' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => setIsFlipped(true);
  const handleMouseLeave = () => setIsFlipped(false);

  const flipClass = flipDirection === 'horizontal' ? 'ease-flip-x' : 'ease-flip-y';
  const activeFlipClass = isFlipped ? `ease-active-flip` : '';

  return (
    <div 
      className="ease-flip-card-container ease-hover-lift"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`ease-flip-inner ${flipClass} ${activeFlipClass}`}>
        <div className="ease-flip-front">
          {frontContent}
        </div>
        <div className="ease-flip-back">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
