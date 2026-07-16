import {
  cloneElement,
  isValidElement,
  useCallback,
  useRef,
  useState,
} from "react";

const EVENT_PROP_MAP = {
  click: ["onClick"],
  hover: ["onMouseEnter"],
  focus: ["onFocus"],
  blur: ["onBlur"],
  keydown: ["onKeyDown"],
};

export default function MotionTrigger({
  children,
  trigger = "click",
  animationClass,
  replay = false,
  disabled = false,
  className = "",
  as: Wrapper = "span",
  onTrigger,
  onAnimationStart,
  onAnimationEnd,
}) {
  const [isAnimating, setIsAnimating] = useState(false);
  const nodeRef = useRef(null);

  const fireAnimation = useCallback(
    (event) => {
      if (disabled) return;

      if (typeof onTrigger === "function") onTrigger(event);

      if (replay && isAnimating) {
        setIsAnimating(false);
        requestAnimationFrame(() => {
          setIsAnimating(true);
          if (typeof onAnimationStart === "function") onAnimationStart(event);
        });
        return;
      }

      setIsAnimating(true);
      if (typeof onAnimationStart === "function") onAnimationStart(event);
    },
    [disabled, replay, isAnimating, onTrigger, onAnimationStart]
  );

  const handleAnimationEnd = useCallback(
    (event) => {
      setIsAnimating(false);
      if (typeof onAnimationEnd === "function") onAnimationEnd(event);
    },
    [onAnimationEnd]
  );

  const handleKeyDown = useCallback(
    (event) => {
      if (trigger !== "keydown") return;
      if (event.key === "Enter" || event.key === " ") {
        fireAnimation(event);
      }
    },
    [trigger, fireAnimation]
  );

  if (!isValidElement(children)) {
    return children ?? null;
  }

  const existingClassName = children.props.className || "";
  const combinedClassName = [
    existingClassName,
    isAnimating ? animationClass : "",
  ]
    .filter(Boolean)
    .join(" ");

  const eventProps = {};
  const eventNames = EVENT_PROP_MAP[trigger] || [];

  eventNames.forEach((eventName) => {
    const existingHandler = children.props[eventName];
    eventProps[eventName] = (event) => {
      if (typeof existingHandler === "function") existingHandler(event);
      fireAnimation(event);
    };
  });

  if (trigger === "keydown") {
    const existingKeyDown = children.props.onKeyDown;
    eventProps.onKeyDown = (event) => {
      if (typeof existingKeyDown === "function") existingKeyDown(event);
      handleKeyDown(event);
    };
  }

  const clonedChild = cloneElement(children, {
    ...eventProps,
    className: combinedClassName,
    onAnimationEnd: (event) => {
      if (typeof children.props.onAnimationEnd === "function") {
        children.props.onAnimationEnd(event);
      }
      handleAnimationEnd(event);
    },
  });

  return (
    <Wrapper
      ref={nodeRef}
      className={["motion-trigger", className].filter(Boolean).join(" ")}
    >
      {clonedChild}
    </Wrapper>
  );
}
