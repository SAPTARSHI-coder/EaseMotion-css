import React from 'react';

/**
 * EaseMotion Checkbox Component
 * 
 * A native React wrapper for the ease-checkbox CSS class.
 * Supports standard React props and forwards ref.
 */
export const EaseCheckbox = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-checkbox ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseCheckbox.displayName = 'EaseCheckbox';
export default EaseCheckbox;
