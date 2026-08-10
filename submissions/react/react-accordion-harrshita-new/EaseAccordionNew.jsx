
import React from 'react';

/**
 * EaseMotion Accordion New Component
 *
 * Wraps the `ease-accordion` utility class in a React component.
 */
export const EaseAccordionNew = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`ease-accordion ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

EaseAccordionNew.displayName = 'EaseAccordionNew';
export default EaseAccordionNew;
