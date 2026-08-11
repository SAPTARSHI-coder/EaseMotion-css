import React from "react";
import "./style.css";

/**
 * A reusable loading indicator component that applies a smooth spinning animation.
 *
 * @param {Object} props
 * @param {string} [props.className=""] - Additional custom CSS classes.
 * @param {string} [props.size] - Controls loader size (e.g., "32px", "2rem").
 * @param {string} [props.color] - Controls loader color variant (e.g., "#3b82f6").
 * @param {string} [props.duration] - Custom animation duration (e.g., "1.5s").
 */
const SpinLoader = ({
    className = "",
    size,
    color,
    duration,
    ...props
}) => {
    // Construct custom style object to apply optional size, color, and duration
    const customStyles = {};
    if (size) {
        customStyles.width = size;
        customStyles.height = size;
    }
    if (color) {
        // We set a custom property so the CSS border styles can inherit the color
        customStyles['--spin-color'] = color;
    }
    if (duration) {
        customStyles.animationDuration = duration;
    }

    return (
        <div
            className={`ease-spin-loader ${className}`.trim()}
            style={Object.keys(customStyles).length > 0 ? customStyles : undefined}
            role="status"
            aria-label="Loading"
            {...props}
        >
            {/* Screen reader only text for better accessibility */}
            <span className="ease-sr-only">Loading...</span>
        </div>
    );
};

export default SpinLoader;
