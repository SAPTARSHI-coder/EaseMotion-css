import "./style.css";

export default function ShimmerPulseTooltip({
  text = "Bitcoin is trading above resistance.",
  label = "BTC",
  position = "top"
}) {
  return (
    <div className="tooltip-wrapper ease-fade-in ease-hover-lift">
      <button
        className="tooltip-trigger"
        aria-describedby="crypto-tooltip"
      >
        {label}
      </button>

      <div
        id="crypto-tooltip"
        role="tooltip"
        className={`tooltip tooltip-${position}`}
      >
        <div className="tooltip-shimmer"></div>

        <div className="tooltip-content">
          <strong>{label}</strong>

          <p>{text}</p>
        </div>

        <span className="tooltip-arrow"></span>
      </div>
    </div>
  );
}
