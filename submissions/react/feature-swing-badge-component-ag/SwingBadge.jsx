import React, { useState } from 'react';
import './style.css';

/**
 * SwingBadge Component
 * A React badge component that applies a "swing" animation
 * when hovered, acting as an interactive attention seeker.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to be rendered inside the badge.
 * @param {string} [props.variant="primary"] - Visual style variant (e.g., 'primary', 'success', 'warning').
 */
const SwingBadge = ({ children, variant = 'primary' }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <span
            className={`ease-swing-badge-ag ease-swing-badge-${variant}-ag ${isHovered ? 'ease-swing-active-ag' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            // Handle animation end to reset state if we wanted a one-shot animation
            // Here we let CSS handle the infinite loop or hover state directly,
            // but managing the class via React ensures we can easily trigger it programmatically too.
        >
            {children}
        </span>
    );
};

export default SwingBadge;
