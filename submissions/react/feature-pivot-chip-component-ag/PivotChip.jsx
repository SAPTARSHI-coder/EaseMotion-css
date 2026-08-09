import React, { useState, useEffect } from "react";
import "./style.css";

const PivotChip = ({ children, onDismiss, label = "chip" }) => {
  const [shouldPivot, setShouldPivot] = useState(false);

  const handleClick = () => {
    setShouldPivot(true);
  };

  useEffect(() => {
    if (shouldPivot) {
      const timer = setTimeout(() => setShouldPivot(false), 500);
      return () => clearTimeout(timer);
    }
  }, [shouldPivot]);

  return (
    <div
      className={`pivot-chip-ag ${shouldPivot ? "pivot-active-ag" : ""}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      aria-label={`${label} chip`}
    >
      <span className="pivot-chip-text-ag">{children}</span>
      {onDismiss && (
        <button
          type="button"
          className="pivot-chip-dismiss-ag"
          onClick={(e) => {
            e.stopPropagation();
            onDismiss && onDismiss();
          }}
          aria-label="Remove chip"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default PivotChip;
