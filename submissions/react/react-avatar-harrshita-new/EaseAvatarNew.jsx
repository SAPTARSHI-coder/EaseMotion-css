
import React from 'react';

/**
 * EaseMotion Avatar New Component
 *
 * Wraps the `ease-avatar` utility class in a React component.
 */
export const EaseAvatarNew = React.forwardRef(({ className, children, ...props }, ref) => {
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

EaseAvatarNew.displayName = 'EaseAvatarNew';
export default EaseAvatarNew;
