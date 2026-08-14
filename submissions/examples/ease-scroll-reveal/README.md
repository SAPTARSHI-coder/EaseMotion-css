# ease-scroll-reveal Utility

A pure CSS scroll-driven reveal animation utility leveraging the modern CSS Scroll-Driven Animations specification.

---

### 1. What does this do?
`ease-scroll-reveal` is a lightweight CSS utility that creates a smooth fade-in and scale-up reveal animation when elements enter the browser viewport during scrolling. Instead of playing an animation on page load or on a fixed timer, the animation progress is linked directly to the user's scrollbar position using `@keyframes ease-fade-up`, `animation-timeline: view()`, and `animation-range: entry 10% cover 30%`.

---

### 2. How is it used?
Simply link `style.css` in your project and add the `.ease-scroll-reveal` class to any HTML element you wish to reveal on scroll:

```html
<link rel="stylesheet" href="style.css">

<!-- Apply utility to any card or section -->
<div class="card ease-scroll-reveal">
  <h2>Scroll Revealed Title</h2>
  <p>This element gracefully fades in and translates upward as it enters the viewport.</p>
</div>
```

---

### 3. Why is it useful?
- **Zero JavaScript Overhead**: Replaces complex JavaScript `IntersectionObserver` implementations with pure, declarative CSS.
- **Superior Performance**: Runs off the main thread directly on the GPU compositor thread, eliminating scroll jank and continuous event listening overhead.
- **Progressive Enhancement**: Includes a `@supports not (animation-timeline: view())` fallback so older browsers gracefully display content without invisible elements or broken layouts.
