import { useState } from "react";

export default function EaseRatingStars({
  count = 5,
  value = 0,
  onChange,
  readOnly = false,
}) {
  const [hover, setHover] = useState(null);

  return (
    <div
      role="img"
      aria-label={`${value} out of ${count} stars`}
      onMouseLeave={() => setHover(null)}
    >
      {Array.from({ length: count }).map((_, i) => {
        const idx = i + 1;
        const activeValue = hover ?? value;

        let state;

        if (idx <= activeValue) {
          state = "filled";
        } else if (idx - 0.5 <= activeValue) {
          state = "half";
        } else {
          state = "empty";
        }

        return (
          <svg
            key={idx}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="ease-hover-lift"
            onMouseEnter={() => !readOnly && setHover(idx)}
            onClick={() => !readOnly && onChange?.(idx)}
            style={{
              width: "24px",
              height: "24px",
              marginRight: "4px",
              fill:
                state === "filled"
                  ? "gold"
                  : state === "half"
                    ? `url(#half-${idx})`
                    : "none",
            }}
          >
            <defs>
              <linearGradient id={`half-${idx}`}>
                <stop offset="50%" stopColor="gold" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>

            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              stroke="gold"
              strokeWidth="1.5"
            />
          </svg>
        );
      })}
    </div>
  );
}