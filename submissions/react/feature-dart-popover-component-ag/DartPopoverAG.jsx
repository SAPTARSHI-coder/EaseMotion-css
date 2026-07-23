import React, { useState } from "react";
import "./style.css";

/**
 * A reusable Dart Popover component with a smooth dart animation.
 *
 * @param {Object} props
 * @param {string} [props.title="Popover"]
 * @param {string} [props.content="This is a dart popover."]
 * @param {React.ReactNode} [props.children]
 * @param {string} [props.className=""]
 */
const DartPopoverAG = ({
  title = "Popover",
  content = "This is a dart popover.",
  children,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`dart-popover-wrapper-ag ${className}`.trim()}>
      <button
        type="button"
        className="dart-popover-trigger-ag"
        onClick={togglePopover}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="dart-popover-panel-ag"
      >
        {children || "Open Popover"}
      </button>

      <div
        id="dart-popover-panel-ag"
        className={`dart-popover-panel-ag ${isOpen ? "active-ag" : ""}`}
        role="dialog"
        aria-hidden={!isOpen}
        aria-label={title}
      >
        <h3 className="dart-popover-title-ag">{title}</h3>
        <p className="dart-popover-content-ag">{content}</p>
      </div>
    </div>
  );
};

export default DartPopoverAG;