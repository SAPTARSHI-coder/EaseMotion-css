import "./style.css";

function GlowBadge({ children = "Error" }) {
  return (
    <span
      className="glow-badge-ds"
      role="status"
      aria-label={children}
    >
      {children}
    </span>
  );
}

export default GlowBadge;
