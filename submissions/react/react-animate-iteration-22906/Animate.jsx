// submissions/react-animate-iteration-22906/Animate.jsx
export const Animate = ({ 
  children, 
  animation = "ease-fade-in", 
  duration = "ease-duration-normal",
  delay = "",
  curve = "ease-curve-ease",
  fill = "ease-fill-both",
  iteration = 1, // Number or "infinite"
  className = "",
  onAnimationStart,
  onAnimationEnd
}) => {
  const animationClasses = `${animation} ${duration} ${delay} ${curve} ${fill}`.trim();

  return (
    <div 
      className={`ease-animate-wrapper ${animationClasses} ${className}`}
      style={{ animationIterationCount: iteration }}
      onAnimationStart={onAnimationStart}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  );
};
