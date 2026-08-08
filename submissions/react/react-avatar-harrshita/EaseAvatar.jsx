
import React from 'react';

/**
 * EaseMotion Avatar Component
 *
 * A native React wrapper for the `ease-avatar` CSS class.
 * Supports standard React props, ref forwarding, and className merging.
 */
export const EaseAvatar = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-avatar ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseAvatar.displayName = 'EaseAvatar';
export default EaseAvatar;
