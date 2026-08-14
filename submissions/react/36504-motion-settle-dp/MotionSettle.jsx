import {
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";

export default function MotionSettle({
  children,
  animationClass,
  waitForCompletion = true,
  immediate = false,
  className = "",
  as: Wrapper = "div",
  onAnimationStart,
  onAnimationEnd,
}) {
  const [appliedClass, setAppliedClass] = useState(animationClass);
  const isRunningRef = useRef(false);
  const pendingClassRef = useRef(null);

  useEffect(() => {
    if (animationClass === appliedClass) return;

    if (immediate || !waitForCompletion || !isRunningRef.current) {
      pendingClassRef.current = null;
      isRunningRef.current = true;
      setAppliedClass(animationClass);
      if (typeof onAnimationStart === "function")
        onAnimationStart(animationClass);
    } else {
      pendingClassRef.current = animationClass;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animationClass, immediate, waitForCompletion]);

  const handleAnimationEnd = (event) => {
    isRunningRef.current = false;
    if (typeof onAnimationEnd === "function")
      onAnimationEnd(appliedClass, event);

    if (pendingClassRef.current !== null) {
      const nextClass = pendingClassRef.current;
      pendingClassRef.current = null;
      isRunningRef.current = true;
      setAppliedClass(nextClass);
      if (typeof onAnimationStart === "function") onAnimationStart(nextClass);
    }
  };

  if (!isValidElement(children)) {
    return children ?? null;
  }

  const existingClassName = children.props.className || "";
  const combinedClassName = [existingClassName, appliedClass]
    .filter(Boolean)
    .join(" ");

  const clonedChild = cloneElement(children, {
    className: combinedClassName,
    onAnimationEnd: (event) => {
      if (typeof children.props.onAnimationEnd === "function") {
        children.props.onAnimationEnd(event);
      }
      handleAnimationEnd(event);
    },
  });

  return (
    <Wrapper className={["motion-settle", className].filter(Boolean).join(" ")}>
      {clonedChild}
    </Wrapper>
  );
}
