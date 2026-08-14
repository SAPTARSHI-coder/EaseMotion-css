import React, { useState, useEffect } from 'react';
import './style.css';

/**
 * RatingStarBar Component
 * A highly interactive, accessible rating component utilizing EaseMotion philosophy.
 * Features smooth hover states, dynamic SVG fills, and a custom CSS particle burst on selection.
 */
const RatingStarBar = ({ totalStars = 5, initialRating = 0, onRatingChange }) => {
    const [rating, setRating] = useState(initialRating);
    const [hoverRating, setHoverRating] = useState(0);
    const [burstIndex, setBurstIndex] = useState(null);

    const handleStarClick = (index) => {
        setRating(index);
        setBurstIndex(index);
        if (onRatingChange) {
            onRatingChange(index);
        }
    };

    // Reset the burst animation state after it completes
    useEffect(() => {
        if (burstIndex !== null) {
            const timer = setTimeout(() => setBurstIndex(null), 500); // 500ms matches the CSS animation duration
            return () => clearTimeout(timer);
        }
    }, [burstIndex]);

    return (
        <div className="ease-rating-container" role="radiogroup" aria-label="Interactive Star Rating">
            {[...Array(totalStars)].map((_, i) => {
                const starIndex = i + 1;
                const isFilled = starIndex <= (hoverRating || rating);
                const isBursting = burstIndex === starIndex;

                return (
                    <button
                        key={starIndex}
                        type="button"
                        role="radio"
                        aria-checked={rating === starIndex}
                        aria-label={`Rate ${starIndex} out of ${totalStars} stars`}
                        className={`ease-star-btn ${isFilled ? 'ease-star-filled' : 'ease-star-empty'} ${isBursting ? 'ease-star-burst' : ''}`}
                        onClick={() => handleStarClick(starIndex)}
                        onMouseEnter={() => setHoverRating(starIndex)}
                        onMouseLeave={() => setHoverRating(0)}
                        onFocus={() => setHoverRating(starIndex)}
                        onBlur={() => setHoverRating(0)}
                    >
                        <svg viewBox="0 0 24 24" className="ease-star-icon" aria-hidden="true">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>

                        {/* Particle Elements for the Burst Animation */}
                        {isBursting && (
                            <span className="ease-burst-particles">
                                <span className="ease-particle p1"></span>
                                <span className="ease-particle p2"></span>
                                <span className="ease-particle p3"></span>
                                <span className="ease-particle p4"></span>
                                <span className="ease-particle p5"></span>
                            </span>
                        )}
                    </button>
                );
            })}
        </div>
    );
};

export default RatingStarBar;