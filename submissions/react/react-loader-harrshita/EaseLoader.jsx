import React from 'react';

/**
 * EaseMotion Loader Component
 * 
 * A native React wrapper for the ease-loader CSS class.
 * Supports standard React props and forwards ref.
 */
export const EaseLoader = React.forwardRef(({ className, children, ...props }, ref) => {
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

EaseLoader.displayName = 'EaseLoader';
export default EaseLoader;
