import { useState } from "react";
import "./style.css";

export default function DemoModal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="demo-container">
      <button className="open-btn" onClick={() => setOpen(true)}>
        Open Demo Modal
      </button>

      {open && (
        <div className="overlay" onClick={() => setOpen(false)}>
          <div
            className="modal shimmer"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Space Observatory</h2>

            <p>
              This is a simple React modal demo with a shimmer animation.
            </p>

            <div className="actions">
              <button
                className="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>

              <button
                className="primary"
                onClick={() => setOpen(false)}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}