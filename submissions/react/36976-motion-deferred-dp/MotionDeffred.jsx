import { cloneElement, isValidElement, useEffect, useState } from "react";

export default function MotionDeferred({
  children,
  animationClass,
  delay = 300,
  disabled = false,
  className = "",
  as: Wrapper = "div",
  onDeferredStart,
}) {
  const [isActive, setIsActive] = useState(disabled);

  useEffect(() => {
    if (disabled) {
      setIsActive(true);
      return undefined;
    }

    setIsActive(false);
    const timerId = setTimeout(() => {
      setIsActive(true);
      if (typeof onDeferredStart === "function") onDeferredStart();
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled, delay]);

  if (!isValidElement(children)) {
    return children ?? null;
  }

  const existingClassName = children.props.className || "";
  const combinedClassName = [existingClassName, isActive ? animationClass : ""]
    .filter(Boolean)
    .join(" ");

  const clonedChild = cloneElement(children, {
    className: combinedClassName,
  });

  return (
    <Wrapper
      className={["motion-deferred", className].filter(Boolean).join(" ")}
    >
      {clonedChild}
    </Wrapper>
  );
}
