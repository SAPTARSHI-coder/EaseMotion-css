      import React from 'react';

      /**
       * EaseNavbar component
       *
       * Top navigation bar
       *
       * @component
       * @example
       * <EaseNavbar className="my-class">Content</EaseNavbar>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseNavbar = React.forwardRef(function EaseNavbar(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <header
    ref={ref}
    className={`ease-navbar ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </header>
);
      });

      EaseNavbar.displayName = 'EaseNavbar';

      export { EaseNavbar };
      export default EaseNavbar;
