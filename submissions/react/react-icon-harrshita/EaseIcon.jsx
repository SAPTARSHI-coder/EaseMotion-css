import React from 'react';

/**
 * EaseMotion Icon Component
 * 
 * A native React wrapper for the ease-icon CSS class.
 * Supports standard React props and forwards ref.
 */
export const EaseIcon = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-icon ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseIcon.displayName = 'EaseIcon';
export default EaseIcon;
