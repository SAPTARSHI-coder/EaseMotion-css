import React from "react";
import "./style.css";

/**
 * A reusable React component that performs a 3D flip animation on hover or focus,
 * revealing its back face.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.front - Content displayed on the front face.
 * @param {React.ReactNode} props.back - Content displayed on the back face.
 * @param {string} [props.className=""] - Additional custom CSS classes applied to the main wrapper.
 * @param {string} [props.duration] - Custom animation duration (e.g., "0.8s").
 * @param {string} [props.perspective] - Custom 3D perspective value (e.g., "1200px").
 */
const FlipCard = ({
    front,
    back,
    className = "",
    duration,
    perspective
}) => {
    // Construct custom style object to apply optional duration and perspective
    const customStyles = {};
    if (perspective) customStyles.perspective = perspective;
    
    // We pass the duration to a custom CSS variable to easily target the inner transitioning element
    const innerStyles = {};
    if (duration) innerStyles.transitionDuration = duration;

    return (
        <div 
            className={`ease-flip-card ${className}`.trim()}
            style={Object.keys(customStyles).length > 0 ? customStyles : undefined}
            tabIndex={0}
            role="group"
            aria-label="Flip Card"
        >
            <div 
                className="ease-flip-inner"
                style={Object.keys(innerStyles).length > 0 ? innerStyles : undefined}
            >
                <div className="ease-flip-front" aria-hidden="false">
                    {front}
                </div>

                <div className="ease-flip-back" aria-hidden="true">
                    {back}
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
