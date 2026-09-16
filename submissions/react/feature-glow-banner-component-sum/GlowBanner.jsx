import React, { useState } from 'react';
import './style.css';

/**
 * GlowBanner — interactive banner with a soft glow on hover/focus.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Banner content
 * @param {string} [props.className=""] - Extra class names
 * @param {string} [props.role="status"] - ARIA role for the banner
 */
const GlowBanner = ({
  children,
  className = '',
  role = 'status',
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`glow-banner-sum ${isActive ? 'glow-banner-sum--active' : ''} ${className}`.trim()}
      role={role}
      tabIndex={0}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      aria-label="Glow banner"
      {...rest}
    >
      <div className="glow-banner-sum__content">{children}</div>
    </div>
  );
};

export default GlowBanner;
