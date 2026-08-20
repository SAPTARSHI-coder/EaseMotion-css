import React, { useState } from "react";
import "./style.css";

const LiquidRippleMedicalModal = ({
  title = "Medical Dashboard",
  children,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="medical-btn ease-hover-lift"
        onClick={() => setOpen(true)}
      >
        Open Health Report
      </button>

      {open && (
        <div className="medical-overlay">
          <div className="medical-modal ease-fade-in">
            
            <div className="liquid-ripple"></div>

            <button
              className="close-button"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

            <h2>{title}</h2>

            <div className="medical-content">
              {children || (
                <>
                  <p>❤️ Heart Rate: 72 BPM</p>
                  <p>🩺 Blood Pressure: Normal</p>
                  <p>💊 Medication Status: Updated</p>
                </>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default LiquidRippleMedicalModal;