import React from "react";
import "./style.css"; // Ensure styles are imported

/**
 * A reusable badge component that displays a continuous pulse animation.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content displayed inside the badge.
 * @param {string} [props.className=""] - Additional custom CSS classes.
 * @param {string} [props.color] - Custom badge background color (e.g., "#3b82f6", "red").
 * @param {string} [props.duration] - Custom animation duration (e.g., "1.5s").
 */
const PulseBadge = ({ children, className = "", color, duration }) => {
    // Construct custom style object to apply optional color and duration
    const customStyles = {};
    if (color) {
        customStyles.backgroundColor = color;
        // Also set a custom property so the CSS keyframes can inherit the color for the shadow
        customStyles['--pulse-color'] = color;
    }
    if (duration) customStyles.animationDuration = duration;

    return (
        <span 
            className={`ease-pulse-badge ${className}`.trim()} 
            style={Object.keys(customStyles).length > 0 ? customStyles : undefined}
        >
            {children}
        </span>
    );
};

export default PulseBadge;
