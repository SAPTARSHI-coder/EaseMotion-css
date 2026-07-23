import React, { useState } from "react";
import "./style.css";

const LiquidRippleFitnessModal = ({
  title = "Fitness Progress",
  children,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="ease-ripple-btn ease-hover-lift"
        onClick={() => setOpen(true)}
      >
        View Fitness Stats
      </button>

      {open && (
        <div className="fitness-overlay">
          <div className="fitness-modal ease-fade-in">
            <div className="ripple-effect"></div>

            <button
              className="close-btn"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

            <h2>{title}</h2>

            <div className="modal-content">
              {children || (
                <p>
                  Track your workout, calories, and fitness goals
                  with animated UI.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiquidRippleFitnessModal;