import React from "react";
import "./style.css";

/**
 * A reusable React button component that performs a smooth scaling animation
 * on hover, focus, and active (pressed) states.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content displayed inside the button.
 * @param {string} [props.className=""] - Additional custom CSS classes.
 * @param {string} [props.duration] - Custom animation transition duration (e.g., "0.3s").
 * @param {string} [props.variant="primary"] - Custom button style variant ("primary", "secondary", "outline").
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props - Standard button attributes (onClick, disabled, type, etc.)
 */
const ScaleButton = ({
    children,
    className = "",
    duration,
    variant = "primary",
    ...props
}) => {
    // Construct custom style object to apply optional duration
    const customStyles = {};
    if (duration) {
        customStyles.transitionDuration = duration;
    }
    
    // Merge provided style prop if it exists
    const combinedStyles = { ...customStyles, ...(props.style || {}) };

    // Determine variant class
    const variantClass = `ease-scale-btn-${variant}`;

    return (
        <button
            className={`ease-scale-button ${variantClass} ${className}`.trim()}
            style={Object.keys(combinedStyles).length > 0 ? combinedStyles : undefined}
            {...props}
        >
            {children}
        </button>
    );
};

export default ScaleButton;
