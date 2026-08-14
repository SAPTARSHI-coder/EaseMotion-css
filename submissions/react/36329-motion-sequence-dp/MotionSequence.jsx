import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
} from "react";

export default function MotionSequence({
  children,
  animationClass,
  interval = 200,
  autoPlay = true,
  replayKey,
  className = "",
  as: Wrapper = "div",
}) {
  const items = Children.toArray(children);
  const [activeCount, setActiveCount] = useState(autoPlay ? 0 : items.length);

  useEffect(() => {
    if (!autoPlay) {
      setActiveCount(items.length);
      return undefined;
    }

    setActiveCount(0);
    const timers = items.map((_, index) =>
      setTimeout(() => {
        setActiveCount((count) => Math.max(count, index + 1));
      }, index * interval)
    );

    return () => {
      timers.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, interval, items.length, replayKey]);

  return (
    <Wrapper
      className={["motion-sequence", className].filter(Boolean).join(" ")}
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
