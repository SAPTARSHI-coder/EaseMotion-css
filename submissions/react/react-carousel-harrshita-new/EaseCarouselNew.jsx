
import React from 'react';

/**
 * EaseMotion Carousel New Component
 *
 * Wraps the `ease-carousel` utility class in a React component.
 */
export const EaseCarouselNew = React.forwardRef(({ className, children, ...props }, ref) => {
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

EaseCarouselNew.displayName = 'EaseCarouselNew';
export default EaseCarouselNew;
