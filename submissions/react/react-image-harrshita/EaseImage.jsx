      import React from 'react';

      /**
       * EaseImage component
       *
       * Responsive image wrapper
       *
       * @component
       * @example
       * <EaseImage className="my-class">Content</EaseImage>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseImage = React.forwardRef(function EaseImage(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <figure
    ref={ref}
    className={`ease-image ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </figure>
);
      });

      EaseImage.displayName = 'EaseImage';

      export { EaseImage };
      export default EaseImage;
