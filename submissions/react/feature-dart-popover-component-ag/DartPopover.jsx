import { useState } from "react";
import "./style.css";

export default function DartPopover() {
  const [open, setOpen] = useState(false);

  return (
    <div className="dart-popover-container-ag">
      <button
        className="dart-trigger-ag"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        Toggle Popover
      </button>

      {open && (
        <div
          className="dart-popover-ag"
          role="dialog"
          aria-label="Dart Popover"
        >
          <div className="dart-arrow-ag" />
          <h3>Dart Popover</h3>
          <p>This is an animated popover with a smooth dart-style entrance.</p>
        </div>
      )}
    </div>
  );
}
