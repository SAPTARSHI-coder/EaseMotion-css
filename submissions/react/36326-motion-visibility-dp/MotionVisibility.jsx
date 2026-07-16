import {
  useEffect,
  useRef,
  useState,
  cloneElement,
  isValidElement,
} from "react";

export default function MotionVisibility({
  children,
  animationClass,
  threshold = 0.2,
  rootMargin = "0px",
  once = false,
  onEnter,
  onLeave,
  className = "",
  as: Wrapper = "div",
}) {
  const elementRef = useRef(null);
  const hasTriggeredRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (once && hasTriggeredRef.current) return;

            hasTriggeredRef.current = true;
            setIsVisible(true);
            if (typeof onEnter === "function") onEnter(entry);

            if (once) observer.disconnect();
          } else {
            if (once) return;

            setIsVisible(false);
            if (typeof onLeave === "function") onLeave(entry);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once, onEnter, onLeave]);

  const child = isValidElement(children) ? children : null;
  const combinedClassName = [className, isVisible ? animationClass : ""]
    .filter(Boolean)
    .join(" ");

  if (child) {
    const existingClassName = child.props.className || "";
    return (
      <Wrapper ref={elementRef} className={combinedClassName || undefined}>
        {cloneElement(child, {
          className: [existingClassName, isVisible ? "" : ""]
            .filter(Boolean)
            .join(" "),
        })}
      </Wrapper>
    );
  }

  return (
    <Wrapper ref={elementRef} className={combinedClassName || undefined}>
      {children}
    </Wrapper>
  );
}
