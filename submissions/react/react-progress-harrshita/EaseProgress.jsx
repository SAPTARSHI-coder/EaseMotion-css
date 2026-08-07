import React from 'react';

/**
 * EaseMotion Progress Component
 * 
 * A native React wrapper for the ease-progress CSS class.
 * Supports standard React props and forwards ref.
 */
export const EaseProgress = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-progress ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseProgress.displayName = 'EaseProgress';
export default EaseProgress;
