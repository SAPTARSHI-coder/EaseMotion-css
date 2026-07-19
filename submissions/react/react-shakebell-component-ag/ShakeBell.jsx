import React from "react";
import "./style.css";

/**
 * A reusable React component that displays a notification bell icon and performs
 * a shaking animation when notifications are active.
 *
 * @param {Object} props
 * @param {string} [props.className=""] - Additional custom CSS classes.
 * @param {boolean} [props.animate=false] - If true, the bell shakes continuously. If false, it only shakes on hover/focus.
 * @param {string} [props.duration="0.5s"] - Custom animation transition duration.
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props - Standard button attributes (onClick, disabled, etc.)
 */
const ShakeBell = ({
    className = "",
    animate = false,
    duration,
    ...props
}) => {
    // Construct custom style object to apply optional duration
    const customStyles = {};
    if (duration) {
        customStyles.animationDuration = duration;
    }
    
    // Merge provided style prop if it exists
    const combinedStyles = { ...customStyles, ...(props.style || {}) };

    // Determine animation class
    const animationClass = animate ? "ease-shake-active" : "ease-shake-hover";

    return (
        <button
            className={`ease-shake-bell ${animationClass} ${className}`.trim()}
            style={Object.keys(combinedStyles).length > 0 ? combinedStyles : undefined}
            aria-label="Notifications"
            {...props}
        >
            <span className="ease-shake-icon" aria-hidden="true">🔔</span>
        </button>
    );
};

export default ShakeBell;
