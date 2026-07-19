// submissions/react-animate-direction-22907/Animate.jsx
export const Animate = ({ 
  children, 
  animation = "ease-fade-in", 
  duration = "ease-duration-normal",
  delay = "",
  curve = "ease-curve-ease",
  fill = "ease-fill-both",
  iteration = 1,
  direction = "normal", // normal, reverse, alternate, alternate-reverse
  className = "",
  onAnimationStart,
  onAnimationEnd
}) => {
  const animationClasses = `${animation} ${duration} ${delay} ${curve} ${fill}`.trim();

  // Combine dynamic inline styles for properties that don't neatly map to framework utility classes
  const dynamicStyles = {
    animationIterationCount: iteration,
    animationDirection: direction
  };

  return (
    <div 
      className={`ease-animate-wrapper ${animationClasses} ${className}`}
      style={dynamicStyles}
      onAnimationStart={onAnimationStart}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  );
};
