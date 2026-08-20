import React from "react";
import "./style.css"; // Ensure styles are imported

/**
 * A reusable wrapper component that smoothly fades in its children on mount.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content wrapped by the animation component.
 * @param {string} [props.className=""] - Additional custom CSS classes.
 * @param {string} [props.delay] - Custom animation delay (e.g., "0.5s").
 * @param {string} [props.duration] - Custom animation duration (e.g., "1s").
 */
const FadeIn = ({ children, className = "", delay, duration }) => {
    // Construct custom style object to apply optional delay and duration
    const customStyles = {};
    if (delay) customStyles.animationDelay = delay;
    if (duration) customStyles.animationDuration = duration;

    return (
        <div 
            className={`ease-fade-in ${className}`.trim()} 
            style={Object.keys(customStyles).length > 0 ? customStyles : undefined}
        >
            {children}
        </div>
    );
};

export default FadeIn;
