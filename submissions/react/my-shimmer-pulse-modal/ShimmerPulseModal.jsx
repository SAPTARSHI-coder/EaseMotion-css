import React, { useState } from "react";
import "./style.css";

const ShimmerPulseModal = ({
  title = "Creative Portfolio Modal",
  children = "Showcase your creative work with smooth animations.",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="ease-hover-lift shimmer-button"
        onClick={() => setOpen(true)}
      >
        Open Modal
      </button>

      {open && (
        <div className="modal-overlay ease-fade-in">
          <div className="shimmer-modal ease-hover-lift">
            <div className="shimmer-effect"></div>

            <button
              className="close-btn"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <h2>{title}</h2>
            <p>{children}</p>

            <button
              className="action-btn"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ShimmerPulseModal;