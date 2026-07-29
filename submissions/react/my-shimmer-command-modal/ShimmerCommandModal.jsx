import React, { useState } from "react";
import "./style.css";

const ShimmerCommandModal = ({
  title = "Command Palette",
  children = "Search commands and quickly access application features.",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="ease-hover-lift command-open-btn"
        onClick={() => setOpen(true)}
      >
        Open Commands
      </button>

      {open && (
        <div className="command-overlay ease-fade-in">
          <div className="command-modal">

            <div className="shimmer-line"></div>

            <button
              className="command-close"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

            <div className="command-content">
              <h2>{title}</h2>

              <input
                type="text"
                placeholder="Search commands..."
                className="command-input"
              />

              <p>{children}</p>

              <div className="command-list">
                <div>⌘ Create Project</div>
                <div>⌘ Open Dashboard</div>
                <div>⌘ Settings</div>
              </div>

              <button
                className="command-action ease-hover-lift"
                onClick={() => setOpen(false)}
              >
                Execute
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default ShimmerCommandModal;