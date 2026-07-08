import { cloneElement, isValidElement, useEffect, useState } from "react";

export default function MotionOffscreenPause({
  children,
  animationClass,
  disabled = false,
  className = "",
  as: Wrapper = "div",
  onPause,
  onResume,
}) {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (disabled) {
      setIsPaused(false);
      return undefined;
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        setIsPaused(true);
        if (typeof onPause === "function") onPause();
      } else {
        setIsPaused(false);
        if (typeof onResume === "function") onResume();
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled]);

  if (!isValidElement(children)) {
    return children ?? null;
  }

  const existingClassName = children.props.className || "";
  const existingStyle = children.props.style || {};

  const combinedClassName = [existingClassName, animationClass]
    .filter(Boolean)
    .join(" ");

  const clonedChild = cloneElement(children, {
    className: combinedClassName,
    style: {
      ...existingStyle,
      animationPlayState: isPaused ? "paused" : "running",
    },
  });

  return (
    <Wrapper
      className={["motion-offscreen-pause", className]
        .filter(Boolean)
        .join(" ")}
    >
      {clonedChild}
    </Wrapper>
  );
}
