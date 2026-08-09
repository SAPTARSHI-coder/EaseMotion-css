import React from 'react';
import './style.css';

/**
 * A Swing Avatar component that animates its entrance by swinging from the top.
 * 
 * @param {Object} props
 * @param {string} props.src - Image URL for the avatar.
 * @param {string} props.alt - Alternative text for the avatar image.
 * @param {string} [props.className=""] - Additional custom classes.
 * @param {string} [props.size="64px"] - The width and height of the avatar.
 */
const SwingAvatar = ({ src, alt, className = "", size = "64px", ...rest }) => {
    return (
        <div 
            className={`ease-swing-avatar-wrapper-ag ease-swing-in-ag ${className}`.trim()}
            style={{ width: size, height: size }}
            {...rest}
        >
            <img 
                src={src} 
                alt={alt} 
                className="ease-swing-avatar-image-ag" 
                loading="lazy"
            />
        </div>
    );
};

export default SwingAvatar;
