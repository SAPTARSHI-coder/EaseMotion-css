/**
 * Animate — EaseMotion CSS wrapper component.
 *
 * Wraps children in a `<div>` and applies an EaseMotion animation class
 * derived from the `type` prop.  Supports entry animations, hover-only
 * animations, delay, and duration overrides via inline CSS custom properties.
 *
 * Props:
 *  - type       {string}  Animation name  (e.g. "fade-in", "slide-up").
 *                          Mapped to  `.ease-{type}`  or  `.ease-hover-{type}`.
 *  - delay      {string}  CSS delay value (e.g. "200ms"). Sets `animation-delay`.
 *  - duration   {string}  CSS duration value (e.g. "600ms"). Sets `animation-duration`.
 *  - hover      {boolean} When true, applies the hover-variant class instead.
 *  - className  {string}  Extra classes forwarded to the wrapper element.
 *  - children   {node}    Content to animate.
 */
import React from 'react';

const VALID_TYPES = [
  'fade-in',
  'slide-up',
  'slide-down',
  'slide-left',
  'slide-right',
  'zoom-in',
  'bounce',
  'shake',
  'pulse',
  'spin',
  'flip',
];

function Animate({ type = 'fade-in', delay, duration, hover = false, className = '', children, ...rest }) {
  const isValid = VALID_TYPES.includes(type);
  const baseClass = hover ? `ease-hover-${type}` : `ease-${type}`;
  const animClass = isValid ? baseClass : '';

  const inlineStyle = {};
  if (delay) inlineStyle.animationDelay = delay;
  if (duration) inlineStyle.animationDuration = duration;

  return (
    <div
      className={[animClass, className].filter(Boolean).join(' ')}
      style={inlineStyle}
      data-testid="animate-wrapper"
      {...rest}
    >
      {children}
    </div>
  );
}

export default Animate;
export { VALID_TYPES };
