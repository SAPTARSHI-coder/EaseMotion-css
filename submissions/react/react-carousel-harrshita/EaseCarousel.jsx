      import React from 'react';

      /**
       * EaseCarousel component
       *
       * Sliding content carousel
       *
       * @component
       * @example
       * <EaseCarousel className="my-class">Content</EaseCarousel>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseCarousel = React.forwardRef(function EaseCarousel(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <div
    ref={ref}
    className={`ease-carousel ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </div>
);
      });

      EaseCarousel.displayName = 'EaseCarousel';

      export { EaseCarousel };
      export default EaseCarousel;
