      import React from 'react';

      /**
       * EasePagination component
       *
       * Page navigation controls
       *
       * @component
       * @example
       * <EasePagination className="my-class">Content</EasePagination>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EasePagination = React.forwardRef(function EasePagination(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <nav
    ref={ref}
    className={`ease-pagination ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </nav>
);
      });

      EasePagination.displayName = 'EasePagination';

      export { EasePagination };
      export default EasePagination;
