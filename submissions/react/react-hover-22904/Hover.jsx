// submissions/react-hover-22904/Hover.jsx
const { useState } = React;

export const Hover = ({ 
  children, 
  lift = false, 
  scale = false, 
  glow = false, 
  shake = false,
  className = "",
  glowColor = "rgba(108, 99, 255, 0.45)",
  scaleAmount = 1.05,
  liftAmount = "-8px"
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // We determine the active styles based on hover state and props
  let transform = "none";
  let boxShadow = "none";
  let animation = "none";

  if (isHovered) {
    const transforms = [];
    if (lift) transforms.push(`translateY(${liftAmount})`);
    if (scale) transforms.push(`scale(${scaleAmount})`);
    
    if (transforms.length > 0) {
      transform = transforms.join(" ");
    }

    if (glow) {
      boxShadow = `0 0 16px ${glowColor}, 0 10px 15px -3px rgba(0,0,0,0.4)`;
    }
  }

  // If shake is true, we conditionally apply the framework's shake class 
  // (assuming we want to trigger a keyframe animation on hover).
  // Alternatively, we can just apply a native shake animation class if the framework has one.
  const shakeClass = isHovered && shake ? "ease-shake" : "";

  // The base inline style needs smooth transitions to mirror EaseMotion variables
  const baseStyle = {
    transition: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)",
    transform,
    boxShadow,
    display: "inline-block", // To ensure transforms apply properly
    cursor: (lift || scale || glow || shake) ? "pointer" : "default"
  };

  return (
    <div 
      className={`ease-hover-wrapper ${shakeClass} ${className}`}
      style={baseStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};
