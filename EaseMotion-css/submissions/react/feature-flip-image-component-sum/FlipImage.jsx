import React from 'react';
import './style.css';

/**
 * FlipImage — attention-seeking flip animation for an image card.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Image or front content
 * @param {string} [props.className=""] - Extra class names
 * @param {string} [props.alt="Decorative image"] - Accessible description
 */
const FlipImage = ({
  children,
  className = '',
  alt = 'Decorative image',
  ...rest
}) => {
  return (
    <div
      className={`flip-image-sum ${className}`.trim()}
      role="img"
      aria-label={alt}
      tabIndex={0}
      {...rest}
    >
      <div className="flip-image-sum__inner" aria-hidden="true">
        {children}
      </div>
    </div>
  );
};

export default FlipImage;
