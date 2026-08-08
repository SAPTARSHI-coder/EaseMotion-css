      import React from 'react';

      /**
       * EaseMenu component
       *
       * Navigation menu
       *
       * @component
       * @example
       * <EaseMenu className="my-class">Content</EaseMenu>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseMenu = React.forwardRef(function EaseMenu(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <nav
    ref={ref}
    className={`ease-menu ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </nav>
);
      });

      EaseMenu.displayName = 'EaseMenu';

      export { EaseMenu };
      export default EaseMenu;
