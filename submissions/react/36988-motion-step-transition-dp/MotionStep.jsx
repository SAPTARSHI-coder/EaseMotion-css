import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";

export default function MotionStepTransition({
  children,
  activeStep,
  forwardClass,
  backwardClass,
  className = "",
  as: Wrapper = "div",
  keepMounted = false,
  onStepChange,
}) {
  const items = Children.toArray(children);
  const previousStepRef = useRef(activeStep);
  const [direction, setDirection] = useState("forward");

  useEffect(() => {
    if (activeStep === previousStepRef.current) return;

    const isForward = activeStep > previousStepRef.current;
    setDirection(isForward ? "forward" : "backward");

    if (typeof onStepChange === "function") {
      onStepChange(activeStep, previousStepRef.current);
    }

    previousStepRef.current = activeStep;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStep]);

  const activeClass = direction === "forward" ? forwardClass : backwardClass;

  return (
    <Wrapper
      className={["motion-step-transition", className]
        .filter(Boolean)
        .join(" ")}
    >
      {items.map((child, index) => {
        if (!isValidElement(child)) return child;

        const isActive = index === activeStep;

        if (!isActive && !keepMounted) return null;

        const existingClassName = child.props.className || "";
        const combinedClassName = [
          existingClassName,
          isActive ? activeClass : "",
          !isActive && keepMounted ? "motion-step-transition-hidden" : "",
        ]
          .filter(Boolean)
          .join(" ");

        return cloneElement(child, {
          key: child.key ?? index,
          className: combinedClassName,
          "aria-hidden": !isActive,
        });
      })}
    </Wrapper>
  );
}
