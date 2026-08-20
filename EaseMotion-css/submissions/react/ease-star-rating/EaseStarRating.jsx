import React from "react";
/*
 * EaseStarRating — EaseMotion CSS React submission
 * Folder: submissions/react/ease-star-rating/
 * Palette: amber
 *
 * An interactive star-rating React component with hover preview and click-to-set value.
 */

import { useState } from "react";

export default function EaseStarRating({ count = 5, value = 0, onChange, readOnly = false }) {
  const [hover, setHover] = useState(null);
  const active = hover ?? value;
  return (
    <div className="em-stars" role="radiogroup" onMouseLeave={() => setHover(null)}>
      {Array.from({ length: count }).map((_, i) => {
        const idx = i + 1;
        const filled = idx <= active;
        return (
          <button key={idx} type="button" disabled={readOnly} role="radio" aria-checked={idx === value}
            onClick={() => onChange?.(idx)} onMouseEnter={() => !readOnly && setHover(idx)}
            style={{ color: filled ? "#ffb13b" : "#352817" }}>★</button>
        );
      })}
      <style>{`
        .em-stars { display: inline-flex; gap: 4px; font: 32px/1 system-ui; }
        .em-stars button { background: none; border: none; cursor: pointer; padding: 0; transition: transform 160ms, color 160ms; }
        .em-stars button:hover:not(:disabled) { transform: scale(1.15); }
        .em-stars button:disabled { cursor: default; }
      `}</style>
    </div>
  );
}

