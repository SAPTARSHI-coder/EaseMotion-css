import React from 'react';

/**
 * EaseMotion Chip Component
 * 
 * A native React wrapper for the ease-chip CSS class.
 * Supports standard React props and forwards ref.
 */
export const EaseChip = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-chip ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseChip.displayName = 'EaseChip';
export default EaseChip;
