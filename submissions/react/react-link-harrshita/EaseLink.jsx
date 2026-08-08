      import React from 'react';

      /**
       * EaseLink component
       *
       * Styled anchor link
       *
       * @component
       * @example
       * <EaseLink className="my-class">Content</EaseLink>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseLink = React.forwardRef(function EaseLink(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <a
    ref={ref}
    className={`ease-link ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </a>
);
      });

      EaseLink.displayName = 'EaseLink';

      export { EaseLink };
      export default EaseLink;
