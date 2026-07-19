import React from 'react';
import './style.css';

/**
 * GlowBanner — interactive banner with a smooth glow effect.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Banner content.
 * @param {boolean} [props.isGlowing=true] - Enables the glow animation.
 * @param {string} [props.className=''] - Extra class names.
 */
const GlowBanner = ({
  children,
  isGlowing = true,
  className = '',
  ...rest
}) => {
  const classes = [
    'ease-glow-banner-sp',
    'ease-glow-in',
    isGlowing ? 'is-glowing-sp' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classes}
      role="status"
      aria-live="polite"
      {...rest}
    >
      {children}
    </div>
  );
};

export default GlowBanner;
