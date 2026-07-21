import "./style.css";

function FadeTooltip({ text, children }) {
  return (
    <div className="fade-tooltip-container-vk">
      <div
        className="fade-tooltip-trigger-vk"
        tabIndex="0"
        aria-describedby="fade-tooltip-vk"
      >
        {children}
      </div>

      <div
        id="fade-tooltip-vk"
        role="tooltip"
        className="fade-tooltip-vk"
      >
        {text}
      </div>
    </div>
  );
}

export default FadeTooltip;