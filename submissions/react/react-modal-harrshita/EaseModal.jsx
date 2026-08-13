import React from 'react';

/**
 * EaseMotion Modal Component
 * 
 * A native React wrapper for the ease-modal CSS class.
 * Supports standard React props and forwards ref.
 */
export const EaseModal = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-modal ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseModal.displayName = 'EaseModal';
export default EaseModal;
