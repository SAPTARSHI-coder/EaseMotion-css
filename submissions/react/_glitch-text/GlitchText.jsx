import "./GlitchText.css";

const GlitchText = ({ text = "GLITCH", className = "" }) => {
  return (
    <span
      className={`glitch-text ${className}`}
      data-text={text}
      aria-label={text}
    >
      {text}
    </span>
  );
};

export default GlitchText;