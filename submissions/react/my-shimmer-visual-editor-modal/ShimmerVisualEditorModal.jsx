import React, { useState } from "react";
import "./style.css";

const ShimmerVisualEditorModal = ({
  title = "Visual Editor",
  children = "Design and customize your interface with live editing tools.",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="ease-hover-lift editor-open-btn"
        onClick={() => setOpen(true)}
      >
        Open Editor
      </button>

      {open && (
        <div className="editor-overlay ease-fade-in">
          <div className="editor-modal">

            <div className="editor-shimmer"></div>

            <button
              className="editor-close"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

            <div className="editor-content">
              <div className="editor-icon">
                ✏️
              </div>

              <h2>{title}</h2>

              <p>{children}</p>

              <div className="editor-tools">
                <button>🎨 Theme</button>
                <button>🧩 Components</button>
                <button>⚙ Settings</button>
              </div>

              <button
                className="save-btn ease-hover-lift"
                onClick={() => setOpen(false)}
              >
                Save Changes
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default ShimmerVisualEditorModal;