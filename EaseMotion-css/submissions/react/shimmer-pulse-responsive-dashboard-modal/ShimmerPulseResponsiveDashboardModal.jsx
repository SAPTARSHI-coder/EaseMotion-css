import { useState } from "react";
import "./style.css";

export default function ResponsiveDashboardModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dashboard-container">
      {/* Trigger Button */}
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <header className="modal-header">
              <h2>Dashboard Modal</h2>

              <button onClick={() => setIsOpen(false)}>
                ×
              </button>
            </header>

            {/* Body */}
            <main className="modal-body">
              <p>
                Replace this placeholder content with your own
                dashboard information.
              </p>
            </main>

            {/* Footer */}
            <footer className="modal-footer">
              <button onClick={() => setIsOpen(false)}>
                Cancel
              </button>

              <button>
                Confirm
              </button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}