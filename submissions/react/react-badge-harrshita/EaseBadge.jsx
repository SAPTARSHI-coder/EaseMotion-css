      import React from 'react';

      /**
       * EaseBadge component
       *
       * Small status indicator badges
       *
       * @component
       * @example
       * <EaseBadge className="my-class">Content</EaseBadge>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseBadge = React.forwardRef(function EaseBadge(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <span
    ref={ref}
    className={`ease-badge ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </span>
);
      });

      EaseBadge.displayName = 'EaseBadge';

      export { EaseBadge };
      export default EaseBadge;
