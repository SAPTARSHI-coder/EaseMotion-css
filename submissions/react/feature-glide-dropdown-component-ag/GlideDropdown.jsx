import { useEffect, useRef, useState } from "react";
import "./style.css";

export default function GlideDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className="ease-glide-dropdown-ag"
      ref={dropdownRef}
    >
      <button
        className="ease-glide-button-ag"
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls="ease-glide-menu-ag"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Select Option
        <span
          className={`arrow ${isOpen ? "open" : ""}`}
          aria-hidden="true"
        >
          ▼
        </span>
      </button>

      <nav
        id="ease-glide-menu-ag"
        className={`ease-glide-menu-ag ${isOpen ? "open" : ""}`}
        role="menu"
      >
        <button role="menuitem">Dashboard</button>
        <button role="menuitem">Profile</button>
        <button role="menuitem">Settings</button>
        <button role="menuitem">Logout</button>
      </nav>
    </div>
  );
}