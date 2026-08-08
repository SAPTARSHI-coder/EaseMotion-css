      import React from 'react';

      /**
       * EaseLoader component
       *
       * Loading spinner indicator
       *
       * @component
       * @example
       * <EaseLoader className="my-class">Content</EaseLoader>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseLoader = React.forwardRef(function EaseLoader(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <div
    ref={ref}
    className={`ease-loader ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </div>
);
      });

      EaseLoader.displayName = 'EaseLoader';

      export { EaseLoader };
      export default EaseLoader;
