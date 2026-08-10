import React from 'react';

/**
 * EaseMotion Input Component
 * 
 * A native React wrapper for the ease-input CSS class.
 * Supports standard React props and forwards ref.
 */
export const EaseInput = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-input ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseInput.displayName = 'EaseInput';
export default EaseInput;
