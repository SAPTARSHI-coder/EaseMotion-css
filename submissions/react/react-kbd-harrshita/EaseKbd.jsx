import React from 'react';

/**
 * EaseMotion Kbd Component
 * 
 * A native React wrapper for the ease-kbd CSS class.
 * Supports standard React props and forwards ref.
 */
export const EaseKbd = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-kbd ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseKbd.displayName = 'EaseKbd';
export default EaseKbd;
