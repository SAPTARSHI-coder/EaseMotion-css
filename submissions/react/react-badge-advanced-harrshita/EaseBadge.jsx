import React from 'react';
import './style.css';

/**
 * EaseBadge Component
 * @param {Object} props
 * @param {'primary'|'success'|'warning'|'danger'} [props.variant='primary']
 * @param {boolean} [props.dot=false]
 * @param {boolean} [props.pulse=false]
 * @param {number} [props.count]
 * @param {number} [props.maxCount=99]
 */
export const EaseBadge = ({
  variant = 'primary',
  dot = false,
  pulse = false,
  count,
  maxCount = 99,
  children,
  className = '',
}) => {
  const displayCount = count > maxCount ? `${maxCount}+` : count;
  const classes = [
    'ease-badge-wrapper',
    `ease-badge--${variant}`,
    dot ? 'ease-badge--dot' : '',
    pulse ? 'ease-badge--pulse' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      {children}
      <span className="ease-badge-content">
        {!dot && displayCount}
      </span>
    </span>
  );
};

export default EaseBadge;
