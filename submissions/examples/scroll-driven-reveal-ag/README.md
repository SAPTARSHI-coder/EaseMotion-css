# Scroll-Driven Reveal Animation

1. **What does this do?** Creates a hardware-accelerated viewport scroll-driven entry reveal animation for UI content cards using pure CSS.
2. **How is it used?** Add the `.reveal-card` class to any section or div within a scrolling container.
3. **Why is it useful?** It allows performant reveal animations driven by scrolling position without running main-thread script observers.

---

## Technical Documentation

### 1. What Scroll-Driven Animations Are
Scroll-driven animations are a modern CSS feature that allows you to bind the playback of a CSS animation to the scroll position of a scroll container or the visibility of an element within a viewport, rather than an elapsed time duration.

### 2. How `animation-timeline: view()` Works
The `view()` function sets up an anonymous scroll progress timeline. The animation starts when the element enters the scrollport on one side, and ends when it exits on the opposite side.

### 3. How `animation-range` Controls Timing
The `animation-range` defines the segment of the scroll timeline where the animation executes:
- **`entry 10%`**: Starts when 10% of the element has crossed into the viewport boundary.
- **`cover 40%`**: Completes when the element has reached 40% coverage through its traversal.

### 4. How the Reveal Keyframes Work
The keyframes smoothly translate the element upward while fading in the opacity and scaling it up to its natural bounds:

```css
@keyframes reveal-fade-in {
  from {
    opacity: 0;
    transform: translateY(60px) scale(0.92);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
```

### 5. Customizing Animation Duration/Range
Because the animation is scroll-driven, any `animation-duration` value (if specified) is ignored. Timing is customized by modifying the range offsets:
- **To make it reveal slower (over a longer scroll)**: Increase the end percentage, e.g., `animation-range: entry 0% cover 60%;`
- **To make it reveal faster (sooner on entry)**: Decrease the end percentage, e.g., `animation-range: entry 0% cover 25%;`

### 6. Progressive Enhancement Fallback
By default, elements have `.reveal-card` styles with `opacity: 1` and `transform: none`. Animation properties are wrapped inside `@supports (animation-timeline: view())` queries. Unsupported browsers ignore the scroll animations entirely, displaying all cards normally.

### 7. Reduced-Motion Handling
Users who enable system motion reduction are protected using:

```css
@media (prefers-reduced-motion: reduce) {
  .reveal-card {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
```
This halts wobbly translations and scales, serving static legible components.

### 8. Browser Support Considerations
CSS scroll-driven animations are natively supported in Chromium-based browsers (Chrome, Edge, Opera) and Safari 18+. Browsers that do not support this feature will fall back cleanly to static layouts via our progressive enhancement architecture.
