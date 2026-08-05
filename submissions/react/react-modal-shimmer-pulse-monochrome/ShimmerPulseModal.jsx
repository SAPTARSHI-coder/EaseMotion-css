import "./style.css";

export default function ShimmerPulseModal({
  isOpen = true,
  title = "Monochrome Neo Modal",
  description = "A React modal component featuring a subtle shimmer pulse animation built with EaseMotion CSS utility classes.",
  onClose = () => {},
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay ease-fade-in">
      <div
        className="modal-card ease-hover-lift shimmer-pulse"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <button
          className="close-button"
          aria-label="Close modal"
          onClick={onClose}
        >
          ×
        </button>

        <span className="modal-badge">
          Monochrome Neo
        </span>

        <h2 id="modal-title">
          {title}
        </h2>

        <p id="modal-description">
          {description}
        </p>

        <div className="modal-actions">
          <button className="secondary-btn">
            Cancel
          </button>

          <button className="primary-btn">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
