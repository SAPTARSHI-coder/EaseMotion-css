import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useMemo,
  useState,
} from "react";

export default function MotionCascade({
  children,
  animationClass,
  cascadeDelay = 150,
  direction = "vertical",
  replay,
  className = "",
  as: Wrapper = "div",
  onCascadeStart,
  onCascadeEnd,
}) {
  const items = useMemo(() => Children.toArray(children), [children]);
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    setActiveCount(0);

    if (items.length === 0) return undefined;

    if (typeof onCascadeStart === "function") onCascadeStart();

    const timers = items.map((_, index) =>
      setTimeout(() => {
        setActiveCount((count) => {
          const next = Math.max(count, index + 1);
          if (next === items.length && typeof onCascadeEnd === "function") {
            onCascadeEnd();
          }
          return next;
        });
      }, index * cascadeDelay)
    );

    return () => {
      timers.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length, cascadeDelay, replay]);

  return (
    <Wrapper
      className={[
        "motion-cascade",
        direction === "horizontal"
          ? "motion-cascade--horizontal"
          : "motion-cascade--vertical",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {items.map((child, index) => {
        if (!isValidElement(child)) return child;

        const isActive = index < activeCount;
        const existingClassName = child.props.className || "";

        return cloneElement(child, {
          key: child.key ?? index,
          className: [existingClassName, isActive ? animationClass : ""]
            .filter(Boolean)
            .join(" "),
        });
      })}
    </Wrapper>
  );
}
