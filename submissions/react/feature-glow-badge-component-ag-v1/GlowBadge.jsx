import React from 'react';
import './style.css';

/**
 * A Badge component that applies a pulsating glow effect to draw attention.
 * 
 * @param {Object} props
 * @param {boolean} [props.isGlowing=true] - Whether the glow effect is active.
 * @param {string} [props.color="blue"] - The base color theme for the badge (e.g., "blue", "red", "green", "amber").
 * @param {React.ReactNode} props.children - The content inside the badge.
 * @param {string} [props.className=""] - Additional custom classes.
 */
const GlowBadge = ({ isGlowing = true, color = "blue", children, className = "", ...rest }) => {
    // Generate class names based on props
    const glowClass = isGlowing ? 'is-glowing' : '';
    const colorClass = `ease-glow-badge-color-${color}-ag`;
    
    return (
        <span 
            className={`ease-glow-badge-ag ${colorClass} ${glowClass} ${className}`.trim()}
            {...rest}
        >
            {children}
        </span>
    );
};

export default GlowBadge;
