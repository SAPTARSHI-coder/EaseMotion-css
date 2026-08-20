import "./style.css";

export default function AccessibleWebModal() {
  return (
    <section className="modal-demo">
      {/* Trigger Area */}
      <button type="button">
        Open Modal
      </button>

      {/* Modal Container */}
      <div className="modal-overlay">
        <div className="modal">
          <header className="modal-header">
            <h2>Modal Title</h2>

            <button type="button">
              ×
            </button>
          </header>

          <main className="modal-body">
            <p>
              Replace this placeholder with your own content.
            </p>
          </main>

          <footer className="modal-footer">
            <button type="button">
              Cancel
            </button>

            <button type="button">
              Confirm
            </button>
          </footer>
        </div>
      </div>
    </section>
  );
}