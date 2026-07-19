import "./style.css";

export default function ShimmerModal({
  isOpen,
  title,
  children,
  onClose,
  onConfirm
}) {
  if (!isOpen) return null;

  return (
    <div className="ease-fade-in modal-overlay">
      <div className="ease-scale-in ease-pulse modal-container">

        <h2>{title}</h2>

        <div className="modal-content">
          {children}
        </div>

        <div className="modal-buttons">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="confirm-btn"
            onClick={onConfirm}
          >
            Confirm
          </button>

        </div>

      </div>
    </div>
  );
}