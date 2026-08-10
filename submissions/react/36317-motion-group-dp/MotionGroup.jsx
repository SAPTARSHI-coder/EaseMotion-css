import { Children, cloneElement, isValidElement } from "react";

export default function MotionGroup({
  children,
  animationClass,
  stagger = 100,
  delay = 0,
  className = "",
  as: Wrapper = "div",
}) {
  const items = Children.toArray(children);

  return (
    <Wrapper className={["motion-group", className].filter(Boolean).join(" ")}>
      {Children.map(items, (child, index) => {
        if (!isValidElement(child)) return child;

        const itemDelay = delay + index * stagger;
        const existingClassName = child.props.className || "";
        const existingStyle = child.props.style || {};

        return cloneElement(child, {
          className: [existingClassName, animationClass]
            .filter(Boolean)
            .join(" "),
          style: {
            ...existingStyle,
            animationDelay: `${itemDelay}ms`,
          },
        });
      })}
    </Wrapper>
  );
}
