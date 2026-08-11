import { useState } from "react";

/**
 * RatingStarBar
 * A star rating component with an animated "burst" effect
 * (small radiating particles) when a star is clicked/selected.
 *
 * Props:
 * @param {number} totalStars - number of stars to render (default 5)
 * @param {number} initialRating - starting rating value (default 0)
 * @param {(rating: number) => void} onRate - callback fired with the new rating on click
 * @param {number} size - star size in px (default 32)
 * @param {string} color - filled star / burst color (default "#facc15")
 */
export default function RatingStarBar({
  totalStars = 5,
  initialRating = 0,
  onRate,
  size = 32,
  color = "#facc15",
}) {
  const [rating, setRating] = useState(initialRating);
  const [hovered, setHovered] = useState(0);
  const [burstKey, setBurstKey] = useState(null); // tracks which star is currently bursting

  function handleClick(index) {
    setRating(index);
    setBurstKey(index + "-" + Date.now()); // unique key forces re-mount, replaying the animation
    onRate?.(index);
  }

  const displayValue = hovered || rating;

  return (
    <div
      className="ease-rating-bar"
      style={{ "--rating-star-size": `${size}px`, "--rating-color": color }}
      role="radiogroup"
      aria-label={`Rating: ${rating} out of ${totalStars} stars`}
    >
      {Array.from({ length: totalStars }, (_, i) => i + 1).map((starIndex) => {
        const filled = starIndex <= displayValue;
        const isBursting = burstKey && burstKey.startsWith(starIndex + "-");

        return (
          <button
            key={starIndex}
            type="button"
            className={`rating-star ${filled ? "is-filled" : ""}`}
            role="radio"
            aria-checked={starIndex === rating}
            aria-label={`${starIndex} star${starIndex > 1 ? "s" : ""}`}
            onMouseEnter={() => setHovered(starIndex)}
            onMouseLeave={() => setHovered(0)}
            onFocus={() => setHovered(starIndex)}
            onBlur={() => setHovered(0)}
            onClick={() => handleClick(starIndex)}
          >
            <svg viewBox="0 0 24 24" className="star-icon" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
            </svg>

            {isBursting && (
              <span className="star-burst" key={burstKey} aria-hidden="true">
                {Array.from({ length: 8 }, (_, p) => (
                  <span
                    className="burst-particle"
                    key={p}
                    style={{ "--angle": `${p * 45}deg` }}
                  />
                ))}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}