import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * TextExpandAnimation Component
 * Elegantly alters typography structural tracking and tracking properties dynamically.
 */
export const TextExpandAnimation = ({ 
  text = 'CINEMATIC REVEAL', 
  trigger = 'hover' 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    if (trigger === 'hover') setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') setIsExpanded(false);
  };

  const handleClick = () => {
    if (trigger === 'click') setIsExpanded(prev => !prev);
  };

  return (
    <div 
      className={`ease-text-expand-container ${isExpanded ? 'ease-is-expanded' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ cursor: trigger === 'click' ? 'pointer' : 'default' }}
    >
      <h1 className="ease-expandable-text">
        {text}
      </h1>
      <span className="ease-expand-subtext">
        {trigger === 'hover' ? 'Hover to see tracking stretch' : 'Click to toggle tracking scale'}
      </span>
    </div>
  );
};

TextExpandAnimation.propTypes = {
  text: PropTypes.string,
  trigger: PropTypes.oneOf(['hover', 'click']),
};