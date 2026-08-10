import { useState } from "react";
import "./style.css";

export default function ArtDecoModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="demo-container">
      <button className="open-btn" onClick={() => setIsOpen(true)}>
        Open Art Deco Modal
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
            <h2>Art Deco Gallery</h2>

            <p>
              This is a simple React modal demo. Replace the styling and
              animation with your own original implementation.
            </p>

            <div className="button-group">
              <button
                className="cancel-btn"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>

              <button
                className="confirm-btn"
                onClick={() => alert("Confirmed!")}
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}