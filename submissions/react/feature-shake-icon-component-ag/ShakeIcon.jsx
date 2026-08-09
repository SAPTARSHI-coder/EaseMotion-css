import React from 'react';
import './style.css';

/**
 * A Shake Icon component that shakes horizontally, useful for error states 
 * or drawing attention to a specific action (like an unread notification).
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The icon content (SVG, emoji, or icon font).
 * @param {boolean} [props.isShaking=false] - Triggers the continuous shaking animation when true.
 * @param {string} [props.className=""] - Additional custom classes.
 */
const ShakeIcon = ({ children, isShaking = false, className = "", ...rest }) => {
    return (
        <span 
            className={`ease-shake-icon-ag ${isShaking ? 'is-shaking-ag' : ''} ${className}`.trim()}
            aria-live={isShaking ? "polite" : "off"}
            {...rest}
        >
            {children}
        </span>
    );
};

export default ShakeIcon;
