import { useState } from "react";
import "./style.css";

export default function OrganicCraftModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="demo-container">
      <button
        className="open-btn"
        onClick={() => setIsOpen(true)}
      >
        Open Organic Craft Modal
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
            <h2>Organic Craft Studio</h2>

            <p>
              Welcome to our handcrafted collection inspired by nature.
              Explore eco-friendly creations made with care.
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
                onClick={() => alert("Thanks for exploring!")}
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