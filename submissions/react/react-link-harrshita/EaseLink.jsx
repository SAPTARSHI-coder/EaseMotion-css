import React from 'react';

/**
 * EaseMotion Link Component
 * 
 * A native React wrapper for the ease-link CSS class.
 * Supports standard React props and forwards ref.
 */
export const EaseLink = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-link ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseLink.displayName = 'EaseLink';
export default EaseLink;
