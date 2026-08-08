      import React from 'react';

      /**
       * EaseProgress component
       *
       * Animated progress bar
       *
       * @component
       * @example
       * <EaseProgress className="my-class">Content</EaseProgress>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseProgress = React.forwardRef(function EaseProgress(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <div
    ref={ref}
    className={`ease-progress ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </div>
);
      });

      EaseProgress.displayName = 'EaseProgress';

      export { EaseProgress };
      export default EaseProgress;
