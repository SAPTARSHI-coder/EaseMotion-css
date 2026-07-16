import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
} from "react";

export default function MotionSwitch({
  children,
  activeKey,
  animationClass,
  duration = "400ms",
  className = "",
  as: Wrapper = "div",
  onTransitionStart,
  onTransitionEnd,
}) {
  const wrapperRef = useRef(null);
  const previousKeyRef = useRef(activeKey);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return undefined;

    if (previousKeyRef.current === activeKey) {
      return undefined;
    }

    previousKeyRef.current = activeKey;

    clearTimeout(timeoutRef.current);
    node.classList.remove(animationClass);
    // eslint-disable-next-line no-unused-expressions
    node.offsetWidth;
    node.classList.add(animationClass);

    if (typeof onTransitionStart === "function") {
      onTransitionStart(activeKey);
    }

    const durationMs =
      parseFloat(duration) * (String(duration).includes("ms") ? 1 : 1000);

    timeoutRef.current = setTimeout(() => {
      node.classList.remove(animationClass);
      if (typeof onTransitionEnd === "function") {
        onTransitionEnd(activeKey);
      }
    }, durationMs);

    return () => {
      clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeKey, animationClass, duration]);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const items = Children.toArray(children).filter(Boolean);

  return (
    <Wrapper
      ref={wrapperRef}
      className={["motion-switch", className].filter(Boolean).join(" ")}
    >
      {items.map((child, index) => {
        if (!isValidElement(child)) return child;
        const existingClassName = child.props.className || "";
        return cloneElement(child, {
          key: child.key ?? index,
          className: existingClassName,
        });
      })}
    </Wrapper>
  );
}
