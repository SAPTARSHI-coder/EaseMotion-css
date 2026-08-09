import React, { useState, useEffect } from 'react';
import './style.css';

/**
 * FadeToast Component
 * A React component that displays a temporary notification with a smooth fade in/out animation.
 *
 * @param {Object} props
 * @param {string} props.message - The message to display in the toast.
 * @param {number} props.duration - How long (in ms) the toast is visible (default: 3000).
 * @param {function} props.onClose - Callback triggered after the toast has completely faded out.
 * @param {boolean} props.show - Controls visibility (mounting/unmounting handled externally or internally).
 */
const FadeToast = ({ message, duration = 3000, onClose, show = true }) => {
    const [isVisible, setIsVisible] = useState(show);
    const [isFadingOut, setIsFadingOut] = useState(!show);

    useEffect(() => {
        if (show) {
            setIsVisible(true);
            setIsFadingOut(false);
            
            // Auto close after duration
            const timer = setTimeout(() => {
                setIsFadingOut(true);
            }, duration);
            
            return () => clearTimeout(timer);
        } else {
            setIsFadingOut(true);
        }
    }, [show, duration]);

    // Handle end of animation (either fade in or fade out)
    const handleAnimationEnd = () => {
        if (isFadingOut) {
            setIsVisible(false);
            if (onClose) onClose();
        }
    };

    if (!isVisible) return null;

    return (
        <div 
            className={`ease-fade-toast-ag ${isFadingOut ? 'ease-fade-out-ag' : 'ease-fade-in-ag'}`}
            onAnimationEnd={handleAnimationEnd}
            role="alert"
            aria-live="assertive"
        >
            <div className="ease-toast-content-ag">
                {message}
                <button 
                    className="ease-toast-close-ag" 
                    onClick={() => setIsFadingOut(true)}
                    aria-label="Close notification"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default FadeToast;
