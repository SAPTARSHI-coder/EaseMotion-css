import { useState } from "react";
import "./JelloAccordion.css";

export default function JelloAccordion({
  title = "Accordion Title",
  children,
  defaultOpen = false,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="jello-accordion">
      <button
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>

        <span className={`accordion-icon ${isOpen ? "rotate" : ""}`}>▼</span>
      </button>

      <div
        className={`accordion-content ${isOpen ? "open ease-jello-in" : ""}`}
      >
        <div className="accordion-inner">{children}</div>
      </div>
    </div>
  );
}
