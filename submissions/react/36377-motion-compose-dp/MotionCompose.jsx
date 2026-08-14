import React, {
  cloneElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const DEFAULT_INTERVAL = 120;
const MODES = new Set(["sequential", "parallel"]);

function mergeClassNames(...values) {
  return values.filter(Boolean).join(" ");
}

function toAnimationList(animations) {
  if (!Array.isArray(animations)) {
    return [];
  }

  return animations
    .filter((animation) => typeof animation === "string")
    .map((animation) => animation.trim())
    .filter(Boolean);
}

export default function MotionCompose({
  children,
  animations = [],
  mode = "sequential",
  interval = DEFAULT_INTERVAL,
  replay,
  className = "",
  as: Component = "div",
  onComposeStart,
  onComposeEnd,
}) {
  const timerRef = useRef([]);
  const startCallbackRef = useRef(onComposeStart);
  const endCallbackRef = useRef(onComposeEnd);
  const [activeCount, setActiveCount] = useState(0);

  const child = React.Children.only(children);

  const animationList = useMemo(
    () => toAnimationList(animations),
    [animations]
  );

  const compositionMode = MODES.has(mode) ? mode : "sequential";

  const safeInterval = useMemo(() => {
    const numericInterval = Number(interval);
    return Number.isFinite(numericInterval) && numericInterval >= 0
      ? numericInterval
      : DEFAULT_INTERVAL;
  }, [interval]);

  const activeAnimations = useMemo(() => {
    if (compositionMode === "parallel") {
      return activeCount > 0 ? animationList : [];
    }

    return animationList.slice(0, activeCount);
  }, [activeCount, animationList, compositionMode]);

  useEffect(() => {
    startCallbackRef.current = onComposeStart;
    endCallbackRef.current = onComposeEnd;
  }, [onComposeStart, onComposeEnd]);

  useEffect(() => {
    timerRef.current.forEach((timerId) => window.clearTimeout(timerId));
    timerRef.current = [];

    setActiveCount(0);

    if (animationList.length === 0) {
      endCallbackRef.current?.();
      return undefined;
    }

    startCallbackRef.current?.({
      animations: animationList,
      mode: compositionMode,
    });

    if (compositionMode === "parallel") {
      const timerId = window.setTimeout(() => {
        setActiveCount(animationList.length);
        endCallbackRef.current?.({
          animations: animationList,
          mode: compositionMode,
        });
      }, 0);

      timerRef.current.push(timerId);
    } else {
      animationList.forEach((_, index) => {
        const timerId = window.setTimeout(() => {
          const nextCount = index + 1;
          setActiveCount(nextCount);

          if (nextCount === animationList.length) {
            endCallbackRef.current?.({
              animations: animationList,
              mode: compositionMode,
            });
          }
        }, index * safeInterval);

        timerRef.current.push(timerId);
      });
    }

    return () => {
      timerRef.current.forEach((timerId) => window.clearTimeout(timerId));
      timerRef.current = [];
    };
  }, [animationList, compositionMode, replay, safeInterval]);

  const composedChild = useMemo(
    () =>
      cloneElement(child, {
        className: mergeClassNames(
          child.props.className,
          activeAnimations.join(" ")
        ),
      }),
    [activeAnimations, child]
  );

  return (
    <Component
      className={mergeClassNames("motion-compose", className)}
      data-motion-compose-mode={compositionMode}
    >
      {composedChild}
    </Component>
  );
}
