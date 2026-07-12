import React, { useState } from "react";
import "./style.css";

const ShimmerGlassModal = ({
  title = "Glassmorphism Modal",
  children = "A beautiful shimmer pulse modal for modern interfaces.",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="ease-hover-lift glass-open-btn"
        onClick={() => setOpen(true)}
      >
        Open Preview
      </button>

      {open && (
        <div className="glass-overlay ease-fade-in">
          <div className="glass-modal">

            <div className="shimmer-effect"></div>

            <button
              className="glass-close"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

            <div className="glass-content">
              <h2>{title}</h2>

              <p>{children}</p>

              <button
                className="glass-action ease-hover-lift"
                onClick={() => setOpen(false)}
              >
                Continue
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default ShimmerGlassModal;