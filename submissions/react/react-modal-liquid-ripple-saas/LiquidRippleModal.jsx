import "./style.css";

export default function LiquidRippleModal({
  isOpen = true,
  title = "Premium Plan",
  description = "Unlock advanced analytics, unlimited projects and priority support.",
  onClose = () => {}
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay ease-fade-in">
      <div
        className="modal ease-hover-lift"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="liquid-ripple"></div>

        <button
          className="close-button"
          aria-label="Close modal"
          onClick={onClose}
        >
          ×
        </button>

        <div className="modal-content">
          <h2 id="modal-title">{title}</h2>

          <p>{description}</p>

          <button className="primary-button">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
}
