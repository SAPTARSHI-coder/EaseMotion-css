import React, { useState } from 'react';
import './style.css';

/**
 * PulseBanner — interactive banner with a soft pulse on hover/focus.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Banner content
 * @param {string} [props.className=""] - Extra class names
 * @param {string} [props.role="status"] - ARIA role for the banner
 */
const PulseBanner = ({
  children,
  className = '',
  role = 'status',
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`pulse-banner-sum ${isActive ? 'pulse-banner-sum--active' : ''} ${className}`.trim()}
      role={role}
      tabIndex={0}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      aria-label="Pulse banner"
      {...rest}
    >
      <div className="pulse-banner-sum__content">{children}</div>
    </div>
  );
};

export default PulseBanner;
