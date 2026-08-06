import React from "react";
import "./style.css";

/**
 * A reusable arrow component that displays a continuous bouncing animation.
 *
 * @param {Object} props
 * @param {string} [props.direction="down"] - The direction of the arrow ("up", "down", "left", "right").
 * @param {string} [props.className=""] - Additional custom CSS classes.
 * @param {string} [props.size] - Custom font size for the arrow (e.g., "2rem").
 * @param {string} [props.duration] - Custom animation duration (e.g., "1.5s").
 */
const BounceArrow = ({ direction = "down", className = "", size, duration }) => {
    // Determine the arrow character based on the direction prop
    const arrows = {
        up: "↑",
        down: "↓",
        left: "←",
        right: "→"
    };
    
    const arrowChar = arrows[direction] || arrows.down;

    // Construct custom style object for size and duration
    const customStyles = {};
    if (size) customStyles.fontSize = size;
    if (duration) customStyles.animationDuration = duration;

    // Apply a specific animation class based on direction
    const animationClass = `ease-bounce-${direction}`;

    return (
        <span 
            className={`ease-bounce-arrow ${animationClass} ${className}`.trim()} 
            style={Object.keys(customStyles).length > 0 ? customStyles : undefined}
            aria-label={`${direction} arrow`}
            role="img"
        >
            {arrowChar}
        </span>
    );
};

export default BounceArrow;
