import React from 'react';

/**
 * EaseMotion Button Component
 * 
 * A native React wrapper for the ease-button CSS class.
 * Supports standard React props and forwards ref.
 */
export const EaseButton = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-button ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseButton.displayName = 'EaseButton';
export default EaseButton;
