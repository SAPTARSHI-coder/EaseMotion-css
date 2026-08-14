
import React from 'react';

/**
 * EaseMotion Breadcrumb New Component
 *
 * Wraps the `ease-breadcrumb` utility class in a React component.
 */
export const EaseBreadcrumbNew = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-breadcrumb ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseBreadcrumbNew.displayName = 'EaseBreadcrumbNew';
export default EaseBreadcrumbNew;
