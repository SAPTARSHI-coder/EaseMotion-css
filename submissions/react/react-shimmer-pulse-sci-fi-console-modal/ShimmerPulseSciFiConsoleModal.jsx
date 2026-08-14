import { useState } from "react";
import "./style.css";

export default function SciFiConsoleModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="demo-container">
      <button
        className="open-btn"
        onClick={() => setIsOpen(true)}
      >
        Launch Console
      </button>

      {isOpen && (
        <div
          className="overlay"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="status">SYSTEM ONLINE</div>

            <h2>Sci-Fi Control Console</h2>

            <p>
              Welcome, Commander. Console diagnostics are complete.
              Select an action to continue.
            </p>

            <div className="button-group">
              <button
                className="cancel-btn"
                onClick={() => setIsOpen(false)}
              >
                Exit
              </button>

              <button
                className="confirm-btn"
                onClick={() => alert("Mission Initialized")}
              >
                Initialize
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}