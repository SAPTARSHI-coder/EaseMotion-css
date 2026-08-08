      import React from 'react';

      /**
       * EaseCodeInline component
       *
       * Inline code snippet
       *
       * @component
       * @example
       * <EaseCodeInline className="my-class">Content</EaseCodeInline>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseCodeInline = React.forwardRef(function EaseCodeInline(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <code
    ref={ref}
    className={`ease-code-inline ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </code>
);
      });

      EaseCodeInline.displayName = 'EaseCodeInline';

      export { EaseCodeInline };
      export default EaseCodeInline;
