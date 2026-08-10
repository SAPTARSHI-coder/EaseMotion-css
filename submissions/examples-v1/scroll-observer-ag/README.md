# Runtime Observer for Scroll-Driven Animations

A lightweight, reusable Runtime Scroll Observer utility for EaseMotion CSS. This standalone script automatically detects DOM elements decorated with `data-ease-scroll` attributes and seamlessly triggers their respective animations using the native `IntersectionObserver` API.

## Features
- **High Performance:** No scroll event listeners. Utilizes the native `IntersectionObserver` to trigger classes when an element enters the viewport.
- **Configurable:** Globally configure thresholds, root margins, and repeat behaviors.
- **Attribute-Driven:**
  - `data-ease-scroll="animation-name"`: Which animation class to apply.
  - `data-ease-delay="150"`: Add an animation delay class.
  - `data-ease-duration="500"`: Add an animation duration class.
  - `data-ease-once="false"`: Override global configuration and allow the animation to repeat every time the element comes into view.
- **Accessible:** Automatically respects `@media (prefers-reduced-motion: reduce)`, instantly revealing elements without animation and pausing all intersection observing.

## Installation

Add `scrollObserver.js` and `config.js` to your project. 

```html
<script type="module">
  import { EaseMotionObserver } from './scrollObserver.js';

  const observer = new EaseMotionObserver({
    threshold: 0.2,       // Trigger when 20% visible
    once: true            // Only animate once by default
  });

  observer.init();
</script>
```

## HTML Usage

```html
<div 
  data-ease-scroll="slide-up" 
  data-ease-delay="300"
  data-ease-duration="1000"
>
  I will slide up 300ms after entering the viewport.
</div>
```

## Performance Considerations
Because the observer runs on standard class toggling mapped directly to EaseMotion utility classes, layout thrashing is avoided. During initialization, elements are scanned and `IntersectionObserver.observe()` is attached cleanly, avoiding repeated DOM queries in runtime.
