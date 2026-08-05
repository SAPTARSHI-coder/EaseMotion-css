import React, { useState } from "react";
import "./style.css";

const ShimmerTaskModal = ({
  title = "Task Management",
  children = "Organize tasks efficiently with a smooth animated modal.",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="ease-hover-lift task-open-btn"
        onClick={() => setOpen(true)}
      >
        Create Task
      </button>

      {open && (
        <div className="task-overlay ease-fade-in">
          <div className="task-modal">

            <div className="shimmer-layer"></div>

            <button
              className="task-close"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

            <div className="task-content">
              <div className="task-icon">✓</div>

              <h2>{title}</h2>

              <p>{children}</p>

              <button
                className="task-action ease-hover-lift"
                onClick={() => setOpen(false)}
              >
                Save Task
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default ShimmerTaskModal;