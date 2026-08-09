import "./style.css";

function RockTag({ children = "Focus State" }) {
  return (
    <span
      className="rock-tag-ds"
      role="status"
      aria-label={children}
      tabIndex="0"
    >
      {children}
    </span>
  );
}

export default RockTag;
