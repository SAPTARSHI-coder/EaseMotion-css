
import React from 'react';

/**
 * EaseMotion Loader New Component
 *
 * Wraps the `ease-loader` utility class in a React component.
 */
export const EaseLoaderNew = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-loader ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseLoaderNew.displayName = 'EaseLoaderNew';
export default EaseLoaderNew;
