import React from 'react';

/**
 * EaseMotion Card Component
 * 
 * A native React wrapper for the ease-card CSS class.
 * Supports standard React props and forwards ref.
 */
export const EaseCard = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-card ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseCard.displayName = 'EaseCard';
export default EaseCard;
