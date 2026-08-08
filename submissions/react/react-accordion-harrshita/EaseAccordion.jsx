      import React from 'react';

      /**
       * EaseAccordion component
       *
       * Collapsible content sections
       *
       * @component
       * @example
       * <EaseAccordion className="my-class">Content</EaseAccordion>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseAccordion = React.forwardRef(function EaseAccordion(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <div
    ref={ref}
    className={`ease-accordion ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </div>
);
      });

      EaseAccordion.displayName = 'EaseAccordion';

      export { EaseAccordion };
      export default EaseAccordion;
