import React from 'react';

/**
 * EaseMotion Form Component
 * 
 * A native React wrapper for the ease-form CSS class.
 * Supports standard React props and forwards ref.
 */
export const EaseForm = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-form ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseForm.displayName = 'EaseForm';
export default EaseForm;
