import React, { Children } from "react";
import "./style.css";

/**
 * A reusable React ToastContainer component that provides a fixed-position
 * wrapper for displaying temporary animated notifications.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Toast notification elements to render.
 * @param {string} [props.className=""] - Additional custom CSS classes.
 * @param {string} [props.position="top-right"] - Position of the container (e.g., "top-right", "bottom-left", "bottom-center").
 * @param {number} [props.maxVisible] - Maximum number of toast notifications to display at once.
 */
const ToastContainer = ({
    children,
    className = "",
    position = "top-right",
    maxVisible
}) => {
    // Map the position prop to corresponding CSS classes
    const positionClass = `ease-toast-pos-${position}`;

    // Handle maxVisible limiting if specified
    const childrenArray = Children.toArray(children);
    const visibleChildren = maxVisible && maxVisible > 0 
        ? childrenArray.slice(0, maxVisible) 
        : childrenArray;

    return (
        <div
            className={`ease-toast-container ${positionClass} ${className}`.trim()}
            aria-live="polite"
            role="region"
            aria-label="Notifications"
        >
            {visibleChildren}
        </div>
    );
};

export default ToastContainer;
