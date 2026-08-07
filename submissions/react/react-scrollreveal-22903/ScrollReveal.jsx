// submissions/react-scrollreveal-22903/ScrollReveal.jsx
const { useState, useEffect, useRef } = React;

export const ScrollReveal = ({ 
  children, 
  animation = "ease-fade-in", 
  duration = "ease-duration-normal",
  delay = "",
  curve = "ease-curve-ease",
  threshold = 0.2,
  className = "" 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Trigger only once
        }
      });
    }, { threshold });
    
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  // If not visible, we apply a utility to hide it initially (like ease-opacity-0), 
  // but since EaseMotion handles from/to states in keyframes, applying the animation 
  // class when visible is enough, provided the element has opacity: 0 initially.
  // Actually, ease keyframes usually assume the element is visible and animate from 0.
  // To prevent FOUC (flash of unstyled content), we force opacity-0 until visible.
  
  const visibilityClass = isVisible ? "" : "ease-opacity-0";
  const animationClasses = isVisible ? `${animation} ${duration} ${delay} ${curve}` : "";

  return (
    <div ref={domRef} className={`${visibilityClass} ${animationClasses} ${className}`}>
      {children}
    </div>
  );
};
