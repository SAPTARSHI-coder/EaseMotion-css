// submissions/react-use-hover-22911/useHover.js
const { useState, useEffect, useRef } = React;

export const useHover = ({
  lift = false,
  scale = false,
  glow = false,
  shake = false,
  glowColor = "rgba(108, 99, 255, 0.45)",
  scaleAmount = 1.05,
  liftAmount = "-8px"
} = {}) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // We use passive native event listeners for maximum performance
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    node.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    node.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      node.removeEventListener('mouseenter', handleMouseEnter);
      node.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Compute dynamic transform and box-shadow based on declarative props
  let transform = "none";
  let boxShadow = "none";

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

  // Generate necessary utility classes (e.g. shake animation)
  const shakeClass = isHovered && shake ? "ease-shake" : "";
  const className = `ease-hover-hook ${shakeClass}`.trim();

  // Return the inline style mapped exactly to EaseMotion's easing variables
  const style = {
    transition: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)",
    transform,
    boxShadow,
    cursor: (lift || scale || glow || shake) ? "pointer" : "inherit"
  };

  return { ref, isHovered, className, style };
};
