import React from 'react';

/**
 * EaseMotion Image Component
 * 
 * A native React wrapper for the ease-image CSS class.
 * Supports standard React props and forwards ref.
 */
export const EaseImage = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-image ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseImage.displayName = 'EaseImage';
export default EaseImage;
