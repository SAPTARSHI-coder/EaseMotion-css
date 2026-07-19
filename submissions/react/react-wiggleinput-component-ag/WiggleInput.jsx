import React, { useEffect, useState } from "react";
import "./style.css";

/**
 * A reusable input wrapper that applies a smooth wiggle animation.
 * Typically used to provide subtle movement feedback during validation errors.
 *
 * @param {Object} props
 * @param {boolean} [props.error=false] - Triggers the wiggle animation state when true.
 * @param {string} [props.duration] - Custom animation duration (e.g., "0.5s").
 * @param {string} [props.className=""] - Additional custom CSS classes.
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props - Standard input attributes (value, onChange, placeholder, etc.)
 */
const WiggleInput = ({
    error = false,
    duration,
    className = "",
    ...props
}) => {
    const [isWiggling, setIsWiggling] = useState(false);

    // Trigger the wiggle animation when the 'error' prop changes to true.
    useEffect(() => {
        if (error) {
            setIsWiggling(true);
            
            // Auto-remove the wiggle class after animation completes
            // This allows the animation to be re-triggered if error state changes
            // Using a safe default of 600ms if a custom duration isn't perfectly parsed
            const timeoutDuration = duration ? parseFloat(duration) * 1000 : 500;
            const timer = setTimeout(() => setIsWiggling(false), timeoutDuration);
            
            return () => clearTimeout(timer);
        }
    }, [error, duration]);

    // Construct custom style object for duration
    const customStyles = {};
    if (duration) customStyles.animationDuration = duration;
    
    // Merge provided style prop if it exists
    const combinedStyles = { ...customStyles, ...(props.style || {}) };

    // Determine base classes
    const baseClass = "ease-wiggle-input";
    const wiggleClass = isWiggling ? "ease-wiggle-active" : "";
    const errorClass = error ? "ease-wiggle-input-error" : "";

    return (
        <input
            className={`${baseClass} ${wiggleClass} ${errorClass} ${className}`.trim()}
            style={Object.keys(combinedStyles).length > 0 ? combinedStyles : undefined}
            aria-invalid={error ? "true" : "false"}
            {...props}
        />
    );
};

export default WiggleInput;
