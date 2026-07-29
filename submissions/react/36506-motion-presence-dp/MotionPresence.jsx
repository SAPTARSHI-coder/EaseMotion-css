import {
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";

export default function MotionPresence({
  children,
  present,
  enterClass,
  exitClass,
  className = "",
  as: Wrapper = "div",
  onEnterStart,
  onExitComplete,
}) {
  const [shouldRender, setShouldRender] = useState(present);
  const [currentClass, setCurrentClass] = useState(present ? enterClass : "");
  const wasPresentRef = useRef(present);

  useEffect(() => {
    if (present === wasPresentRef.current) return;
    wasPresentRef.current = present;

    if (present) {
      setShouldRender(true);
      setCurrentClass(enterClass);
      if (typeof onEnterStart === "function") onEnterStart();
    } else {
      setCurrentClass(exitClass);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [present, enterClass, exitClass]);

  const handleAnimationEnd = (event) => {
    if (!present) {
      setShouldRender(false);
      if (typeof onExitComplete === "function") onExitComplete(event);
    }
  };

  if (!shouldRender || !isValidElement(children)) {
    return null;
  }

  const existingClassName = children.props.className || "";
  const combinedClassName = [existingClassName, currentClass]
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
    <Wrapper
      className={["motion-presence", className].filter(Boolean).join(" ")}
    >
      {clonedChild}
    </Wrapper>
  );
}
