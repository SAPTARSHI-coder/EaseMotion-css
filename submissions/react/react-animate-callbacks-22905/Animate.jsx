// submissions/react-animate-callbacks-22905/Animate.jsx
export const Animate = ({ 
  children, 
  animation = "ease-fade-in", 
  duration = "ease-duration-normal",
  delay = "",
  curve = "ease-curve-ease",
  fill = "ease-fill-both",
  iteration = "",
  className = "",
  onAnimationStart,
  onAnimationEnd
}) => {
  const animationClasses = `${animation} ${duration} ${delay} ${curve} ${fill} ${iteration}`.trim();

  return (
    <div 
      className={`ease-animate-wrapper ${animationClasses} ${className}`}
      onAnimationStart={onAnimationStart}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  );
};
