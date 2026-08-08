
import React from 'react';

/**
 * EaseMotion Carousel Component
 *
 * A native React wrapper for the `ease-carousel` CSS class.
 * Supports standard React props, ref forwarding, and className merging.
 */
export const EaseCarousel = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-carousel ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseCarousel.displayName = 'EaseCarousel';
export default EaseCarousel;
