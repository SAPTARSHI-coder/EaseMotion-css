/**
 * Maps React props to EaseMotion utility classes.
 */
export function buildEaseMotionClasses(props) {
  const {
    animation,
    duration,
    delay,
    easing,
    iteration,
    direction,
    hover,
    focus,
    className
  } = props;

  const classes = [];

  if (animation) classes.push(`ease-${animation}`);
  if (duration) classes.push(`duration-${duration}ms`);
  if (delay) classes.push(`delay-${delay}ms`);
  if (easing) classes.push(`ease-${easing}`);
  if (iteration) classes.push(`iteration-${iteration}`);
  if (direction) classes.push(`direction-${direction}`);
  if (hover) classes.push(`hover:ease-${hover}`);
  if (focus) classes.push(`focus:ease-${focus}`);
  
  if (className) {
    // Merge custom classes, avoiding duplicate entries if any
    const customClasses = className.split(' ').filter(c => c.trim() !== '');
    customClasses.forEach(c => {
      if (!classes.includes(c)) {
        classes.push(c);
      }
    });
  }

  return classes.join(' ');
}
