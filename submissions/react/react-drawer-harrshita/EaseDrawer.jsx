      import React from 'react';

      /**
       * EaseDrawer component
       *
       * Side panel drawer
       *
       * @component
       * @example
       * <EaseDrawer className="my-class">Content</EaseDrawer>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseDrawer = React.forwardRef(function EaseDrawer(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <aside
    ref={ref}
    className={`ease-drawer ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </aside>
);
      });

      EaseDrawer.displayName = 'EaseDrawer';

      export { EaseDrawer };
      export default EaseDrawer;
