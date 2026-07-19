# React `<ScrollReveal />` Component (#22903)

This submission introduces the React `<ScrollReveal />` wrapper component for the EaseMotion framework, fulfilling Issue **#22903**. 

It elegantly utilizes the native `IntersectionObserver` API to trigger EaseMotion CSS animations exactly when an element enters the browser viewport.

## Features
- **Zero-Dependency**: Relies entirely on the native `IntersectionObserver` API. No heavy scroll libraries required.
- **Performance First**: The observer is configured to automatically `unobserve()` the element the moment it becomes visible, ensuring minimal memory footprint and CPU usage during subsequent scrolling.
- **FOUC Prevention**: Elements are kept completely hidden (`ease-opacity-0`) until the exact moment the intersection triggers, ensuring a perfectly clean animation sequence.
- **Highly Configurable**: Accepts props for `animation`, `duration`, `delay`, `curve`, and intersection `threshold`.

## Usage
Simply wrap any React elements with the `<ScrollReveal>` component:

```jsx
import { ScrollReveal } from './ScrollReveal';

const MyPage = () => (
  <div>
    <ScrollReveal animation="ease-slide-up" duration="ease-duration-slow" delay="ease-delay-200">
      <div className="ease-card">
        <h1>I reveal gracefully when scrolled into view!</h1>
      </div>
    </ScrollReveal>
  </div>
);
```

## Demo
To ensure strict compliance with the automated PR bot rules, a standalone `demo.html` has been provided inside this `submissions` folder. 
It uses Babel via CDN to dynamically compile the JSX and run the React component directly in your browser. Just double-click `demo.html` to test it!
