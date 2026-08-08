      import React from 'react';

      /**
       * EaseBreadcrumb component
       *
       * Breadcrumb navigation trail
       *
       * @component
       * @example
       * <EaseBreadcrumb className="my-class">Content</EaseBreadcrumb>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseBreadcrumb = React.forwardRef(function EaseBreadcrumb(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <nav
    ref={ref}
    className={`ease-breadcrumb ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </nav>
);
      });

      EaseBreadcrumb.displayName = 'EaseBreadcrumb';

      export { EaseBreadcrumb };
      export default EaseBreadcrumb;
