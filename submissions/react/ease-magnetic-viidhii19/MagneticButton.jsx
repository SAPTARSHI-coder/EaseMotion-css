import React, { useRef } from 'react';

/**
 * MagneticButton
 *
 * A reusable React component that applies a physics-based "magnetic" pull
 * effect to its children. The element follows the cursor at a fraction of
 * its movement distance and snaps back smoothly on mouse leave.
 *
 * @param {React.ReactNode} children  - Content rendered inside the button.
 * @param {string}          className - Optional extra CSS class(es) for the wrapper.
 * @param {number}          strength  - Fraction of cursor offset to translate (default 0.25).
 * @param {...any}          props     - Any additional props forwarded to the <button> element.
 */
const MagneticButton = ({
  children,
  className = '',
  strength = 0.25,
  ...props
}) => {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = buttonRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();

    // Distance from cursor to button center
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Apply only a fraction of the distance for a subtle magnetic pull
    const translateX = x * strength;
    const translateY = y * strength;

    btn.style.transform = `translate(${translateX}px, ${translateY}px)`;
  };

  const handleMouseLeave = () => {
    const btn = buttonRef.current;
    if (!btn) return;

    // Smoothly return to the original position
    btn.style.transform = 'translate(0px, 0px)';
  };

  return (
    <button
      ref={buttonRef}
      className={`ease-magnetic-btn${className ? ` ${className}` : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
};

export default MagneticButton;
