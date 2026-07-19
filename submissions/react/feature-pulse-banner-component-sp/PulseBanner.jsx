import React from 'react';
import './style.css';

/**
 * PulseBanner — interactive banner with a smooth pulse effect.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Banner content.
 * @param {boolean} [props.isPulsing=true] - Enables the pulse animation.
 * @param {string} [props.className=''] - Extra class names.
 */
const PulseBanner = ({
  children,
  isPulsing = true,
  className = '',
  ...rest
}) => {
  const classes = [
    'ease-pulse-banner-sp',
    'ease-pulse-in',
    isPulsing ? 'is-pulsing-sp' : '',
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

export default PulseBanner;
