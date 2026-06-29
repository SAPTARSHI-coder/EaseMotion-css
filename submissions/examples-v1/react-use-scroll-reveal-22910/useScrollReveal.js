// submissions/react-use-scroll-reveal-22910/useScrollReveal.js
const { useState, useEffect, useRef } = React;

export const useScrollReveal = ({
  animation = "ease-fade-in",
  duration = "ease-duration-normal",
  delay = "",
  curve = "ease-curve-ease",
  threshold = 0.2,
  triggerOnce = true
} = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          // If the developer wants it to re-trigger every time it enters the viewport
          setIsVisible(false);
        }
      });
    }, { threshold });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold, triggerOnce]);

  // To prevent FOUC (Flash of Unstyled Content), we force opacity-0 until the intersection occurs
  const visibilityClass = isVisible ? "" : "ease-opacity-0";
  const animationClasses = isVisible ? `${animation} ${duration} ${delay} ${curve}`.trim() : "";
  
  const className = `${visibilityClass} ${animationClasses}`.trim();

  return { ref, isVisible, className };
};
