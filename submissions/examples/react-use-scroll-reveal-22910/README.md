# React `useScrollReveal` Hook (#22910)

This submission fulfills Issue **#22910** by providing a highly robust custom React hook for scroll-driven animations natively using `IntersectionObserver`.

While the `<ScrollReveal>` wrapper component is great for standard use-cases, the `useScrollReveal` hook decouples the visibility logic entirely. This gives developers the absolute freedom to attach the scroll trigger to *any* DOM element deeply nested within their own custom components, without needing an extra wrapper `<div>`.

## Features
- **Intersection Observer Powered**: Highly performant, running entirely off the main thread.
- **Auto-Unobserve (`triggerOnce`)**: By default, it safely unobserves the node the exact moment it enters the viewport. This guarantees that your scroll performance isn't degraded by endless firing callbacks.
- **FOUC Prevention**: Intelligently handles the "Flash of Unstyled Content" by securely forcing an `ease-opacity-0` visibility class until the intersection happens.
- **Continuous Mode**: Set `triggerOnce: false` and the hook will automatically hide and re-trigger the EaseMotion keyframes every single time you scroll past it!

## Usage
Simply call the hook and attach the returned `ref` and `className` to your element:

```jsx
import { useScrollReveal } from './useScrollReveal';

const MyPage = () => {
  const { ref, className } = useScrollReveal({
    animation: "ease-slide-up",
    triggerOnce: true
  });

  return (
    <div ref={ref} className={`ease-card ${className}`}>
      I will slide up gracefully when scrolled into view!
    </div>
  );
};
```

## Demo
To ensure strict compliance with the automated PR bot rules, a standalone `demo.html` has been provided inside this `submissions` folder. 
It uses Babel via CDN to dynamically compile the JSX and run the React code directly in your browser. Just double-click `demo.html` to test both the `triggerOnce: true` and `triggerOnce: false` behaviors as you scroll down the page!
