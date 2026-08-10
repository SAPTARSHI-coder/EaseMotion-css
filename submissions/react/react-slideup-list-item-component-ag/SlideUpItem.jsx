import React from "react";
import "./style.css"; // Ensure styles are imported

/**
 * A reusable list item component that smoothly slides up and fades in on mount.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content displayed inside the list item.
 * @param {string} [props.className=""] - Additional custom CSS classes.
 * @param {string} [props.delay] - Custom animation delay (e.g., "0.2s").
 * @param {string} [props.duration] - Custom animation duration (e.g., "0.8s").
 */
const SlideUpItem = ({ children, className = "", delay, duration }) => {
    // Construct custom style object to apply optional delay and duration
    const customStyles = {};
    if (delay) customStyles.animationDelay = delay;
    if (duration) customStyles.animationDuration = duration;

    return (
        <li 
            className={`ease-slide-up ${className}`.trim()} 
            style={Object.keys(customStyles).length > 0 ? customStyles : undefined}
        >
            {children}
        </li>
    );
};

export default SlideUpItem;
