# Ease Stacked Cards (CSS View Timelines)

## 1. What does this do?
`ease-stacked-cards` creates a dynamic, smooth card stacking animation driven purely by scroll position. As cards stick to the top of the viewport during scrolling, subsequent cards overlap them while the sticky cards smoothly scale down, dim, and fade away natively in response to user scroll progress.

## 2. How is it used?
The component pairs CSS `position: sticky` with the modern CSS Scroll-Driven Animations specification (View Timelines).

```css
.ease-stacked-card {
  position: sticky;

  /* Establish a named view timeline tracking the card's position in the scrollport */
  view-timeline-name: --card-exit;
  view-timeline-axis: block;

  /* Link keyframe animation to the card's exit crossing phase */
  animation: ease-scale-down linear both;
  animation-timeline: --card-exit;
  animation-range: exit-crossing 0% exit-crossing 100%;
}

@keyframes ease-scale-down {
  to {
    transform: scale(0.85);
    filter: brightness(0.4);
    opacity: 0;
  }
}
```

By offsetting the `top` property across card modifier classes (`card-1`, `card-2`, etc.), cards dock at slightly staggered sticky offsets to build a natural card deck depth.

## 3. Why is it useful?
- **Zero JavaScript:** Replaces legacy, heavy JavaScript implementations using `IntersectionObserver` loops or window `scroll` event listeners.
- **GPU Compositor Offloading:** Scroll animation progress calculations are handled entirely on the browser's compositor thread, eliminating main-thread jank and frame drops.
- **Declarative & Performant:** Responsive to dynamic viewport height and scroll speed automatically without needing manual scroll distance calculations or ResizeObservers.
