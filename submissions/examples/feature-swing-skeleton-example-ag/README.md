# Swing Skeleton Example

## Description
This is a standard HTML/CSS example demonstrating a "Swing" skeleton loader. While content is loading, skeleton placeholders pulse with a rhythmic color oscillation, drawing user attention to the fact that content is on its way. Each element has a staggered `animation-delay` to create a sequential "wave" effect.

## Files
- `demo.html`: Semantic skeleton card structure with `aria-label` and `aria-busy="true"` for screen reader awareness.
- `style.css`: Uses a simple `@keyframes` oscillating `background-color` with staggered delays to create the visual loading shimmer.

## Accessibility
- The container has `aria-busy="true"` and a descriptive `aria-label` so screen readers announce the loading state.
- **Reduced Motion**: Disables the pulsing animation entirely via `@media (prefers-reduced-motion: reduce)`, leaving a static skeleton appearance without any motion.
