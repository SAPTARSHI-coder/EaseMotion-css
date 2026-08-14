# Skew Slide Reveal Angle (Engine DSL Motion Preset)

A high-end, premium motion preset intended as a candidate for the EaseMotion core animation engine.

> **Note**: This was originally requested as a core modification, but due to repository constraints (Guard bot rejecting modifications to `core/`), it is submitted here as a reference implementation in the `submissions/` directory.

## Features
- **Dynamic Unveiling**: Translates the element upwards from `100%` while simultaneously correcting a `10deg` skew angle. This creates a premium "unveiling" reveal often seen in high-end typography and imagery entrances on award-winning websites.
- **Configurable Variables**: Built to integrate with EaseMotion's CSS variables (`--ease-duration`, `--ease-timing`) using smart fallbacks.
- **Accessibility**: Explicitly includes a `@media (prefers-reduced-motion: reduce)` override to strip the animation entirely for users who prefer reduced motion.

## Proposed Core Addition
If accepted into the core, the following block should be added to `core/animations.css`:

```css
@keyframes ease-skew-slide-reveal-angle {
  0% {
    opacity: 0;
    transform: translateY(100%) skewY(10deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) skewY(0deg);
  }
}

.ease-anim-skew-slide-reveal-angle {
  animation: ease-skew-slide-reveal-angle var(--ease-duration, 0.8s) var(--ease-timing, cubic-bezier(0.16, 1, 0.3, 1)) both;
}

@media (prefers-reduced-motion: reduce) {
  .ease-anim-skew-slide-reveal-angle {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
```

## Browser Support
Fully hardware-accelerated. Supported in all modern browsers.
