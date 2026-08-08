      import React from 'react';

      /**
       * EaseModal component
       *
       * Overlay modal component
       *
       * @component
       * @example
       * <EaseModal className="my-class">Content</EaseModal>
       *
       * @param {object} props - Component props
       * @param {string} [props.className] - Additional CSS classes
       * @param {string} [props.ariaLabel] - Accessible label
       * @param {React.ReactNode} [props.children] - Child elements
       * @param {React.Ref} ref - Forwarded ref
       */
      const EaseModal = React.forwardRef(function EaseModal(
        { className, children, ariaLabel, ...props },
        ref
      ) {
        return (
  <div
    ref={ref}
    className={`ease-modal ${className || ''}`.trim()}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </div>
);
      });

      EaseModal.displayName = 'EaseModal';

      export { EaseModal };
      export default EaseModal;
