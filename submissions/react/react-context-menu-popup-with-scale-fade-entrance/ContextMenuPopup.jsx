import { useState, useEffect } from "react";
import "./style.css";

export default function ContextMenuPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="context-demo">
      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        Open Menu
      </button>

      {open && (
        <div
          className="context-menu"
          role="menu"
        >
          <button role="menuitem">Edit</button>
          <button role="menuitem">Duplicate</button>
          <button role="menuitem">Share</button>
          <button className="danger" role="menuitem">
            Delete
          </button>
        </div>
      )}
    </div>
  );
}