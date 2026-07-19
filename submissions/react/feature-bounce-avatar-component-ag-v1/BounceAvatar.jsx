import React from 'react';
import './style.css';

/**
 * A Bounce Avatar component that applies a playful bounce exit animation.
 * 
 * @param {Object} props
 * @param {string} props.src - Image source URL.
 * @param {string} props.alt - Alternative text for the avatar.
 * @param {boolean} [props.isExiting=false] - Triggers the bounce exit animation when true.
 * @param {string} [props.className=""] - Additional custom classes.
 */
const BounceAvatar = ({ src, alt, isExiting = false, className = "", ...rest }) => {
    // We add the animation class conditionally based on the `isExiting` prop.
    const animationClass = isExiting ? "ease-bounce-exit-ag" : "";

    return (
        <div className={`ease-bounce-avatar-wrapper-ag ${animationClass} ${className}`.trim()} {...rest}>
            <img 
                src={src} 
                alt={alt || "Avatar"} 
                className="ease-bounce-avatar-image-ag" 
            />
        </div>
    );
};

export default BounceAvatar;
