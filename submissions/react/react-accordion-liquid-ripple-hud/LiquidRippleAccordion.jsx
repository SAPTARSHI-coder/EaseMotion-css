import { useState } from "react";
import "./style.css";

export default function LiquidRippleAccordion() {
  const [open, setOpen] = useState(0);

  const items = [
    {
      title: "Neural Interface",
      content:
        "Connect futuristic HUD modules with adaptive liquid ripple transitions."
    },
    {
      title: "Holographic Controls",
      content:
        "Interactive controls respond smoothly with animated ripple feedback."
    },
    {
      title: "System Analytics",
      content:
        "Display mission-critical metrics using responsive accordion panels."
    }
  ];

  return (
    <div className="accordion ease-fade-in">
      {items.map((item, index) => (
        <div
          key={index}
          className={`accordion-item ${
            open === index ? "active" : ""
          }`}
        >
          <button
            className="accordion-header ease-hover-lift"
            onClick={() =>
              setOpen(open === index ? -1 : index)
            }
          >
            <span>{item.title}</span>

            <span className="icon">
              {open === index ? "−" : "+"}
            </span>
          </button>

          {open === index && (
            <div className="accordion-body">
              <div className="liquid-ripple"></div>

              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
