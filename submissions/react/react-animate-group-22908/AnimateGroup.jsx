// submissions/react-animate-group-22908/AnimateGroup.jsx
const { Children, isValidElement, cloneElement } = React;

export const AnimateGroup = ({ 
  children, 
  animation = "ease-slide-up", 
  duration = "ease-duration-normal",
  curve = "ease-curve-ease",
  fill = "ease-fill-both",
  staggerDelay = 100, // delay in ms between each child
  initialDelay = 0,   // delay before the first child animates
  className = "",
  as: Component = "div" // The HTML tag for the container
}) => {
  const animationClasses = `${animation} ${duration} ${curve} ${fill}`;

  return (
    <Component className={`ease-animate-group ${className}`}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;

        // Calculate staggered delay for this specific child
        const computedDelay = initialDelay + (index * staggerDelay);

        // Merge existing styles and classes
        const existingClassName = child.props.className || "";
        const mergedClassName = `${existingClassName} ${animationClasses}`.trim();
        
        const existingStyle = child.props.style || {};
        const mergedStyle = {
          ...existingStyle,
          animationDelay: `${computedDelay}ms`
        };

        // Clone element with injected animation properties
        return cloneElement(child, {
          className: mergedClassName,
          style: mergedStyle
        });
      })}
    </Component>
  );
};
