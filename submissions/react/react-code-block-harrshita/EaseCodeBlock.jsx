      import React from 'react';

      /**
       * EaseCodeBlock component
       *
       * Syntax highlighted code block
       *
       * @component
       * @example
       * <EaseCodeBlock className="my-class">Content</EaseCodeBlock>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseCodeBlock = React.forwardRef(function EaseCodeBlock(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <pre
    ref={ref}
    className={`ease-code-block ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </pre>
);
      });

      EaseCodeBlock.displayName = 'EaseCodeBlock';

      export { EaseCodeBlock };
      export default EaseCodeBlock;
