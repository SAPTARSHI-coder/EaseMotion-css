import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

/**
 * TextRotateAnimation Component
 * Cycles phrases smoothly using perspective vertical scrolling transitions.
 */
export const TextRotateAnimation = ({ 
  phrases = ['Faster', 'Smoother', 'Easier', 'Smarter'], 
  interval = 2500,
  prefix = 'Build things'
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, interval);
    return () => clearInterval(timer);
  }, [phrases, interval]);

  return (
    <div className="ease-text-rotate-container">
      <span className="ease-text-prefix">{prefix}</span>
      <span className="ease-text-rotate-wrapper">
        {phrases.map((phrase, i) => {
          let positionClass = 'ease-text-next';
          if (i === index) positionClass = 'ease-text-active';
          else if (i === (index - 1 + phrases.length) % phrases.length) positionClass = 'ease-text-prev';

          return (
            <span key={phrase} className={`ease-text-item ${positionClass}`}>
              {phrase}
            </span>
          );
        })}
      </span>
    </div>
  );
};

TextRotateAnimation.propTypes = {
  phrases: PropTypes.arrayOf(PropTypes.string),
  interval: PropTypes.number,
  prefix: PropTypes.string,
};