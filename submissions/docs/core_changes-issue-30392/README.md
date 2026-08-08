# Scroll-Driven Animations — Issue #30392

Utility classes using the CSS Scroll-Driven Animations API (animation-timeline: view()).

## Browser Support
Chrome 115+, Edge 115+. Currently experimental.

## Classes

| Class | Effect |
|-------|--------|
| `.ease-scroll-animate` | Base: animation-timeline: view() |
| `.ease-scroll-fade-in` | Opacity 0→1 on scroll |
| `.ease-scroll-slide-up` | Fade + translateY |
| `.ease-scroll-slide-left` | Fade + translateX(right→left) |
| `.ease-scroll-slide-right` | Fade + translateX(left→right) |
| `.ease-scroll-scale` | Fade + scale(0.8→1) |
| `.ease-scroll-range-start/end` | Customize animation range |

Respects prefers-reduced-motion: reduce.
