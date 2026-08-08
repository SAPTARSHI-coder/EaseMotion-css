
import React from 'react';

/**
 * EaseMotion Alert Component
 *
 * A native React wrapper for the `ease-alert` CSS class.
 * Supports standard React props, ref forwarding, and className merging.
 */
export const EaseAlert = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-alert ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseAlert.displayName = 'EaseAlert';
export default EaseAlert;
