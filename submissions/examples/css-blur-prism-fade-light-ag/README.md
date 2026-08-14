# Blur Prism Fade Light (Engine DSL Motion Preset)

A premium light-based motion preset intended as a candidate for the EaseMotion core animation engine.

> **Note**: This was originally requested as a core modification, but due to repository constraints (Guard bot rejecting modifications to `core/`), it is submitted here as a reference implementation in the `submissions/` directory to ensure it can be auto-merged.

## Features
- **Prism Fade Effect**: Utilizes a combination of `filter: blur()`, `brightness()`, and `drop-shadow()` to simulate a cinematic "prism" of light entering the view before resolving into sharp focus.
- **Hardware-Accelerated**: Relies heavily on GPU-accelerated properties (`opacity` and `transform`) to ensure it maintains a smooth 60 FPS, even with CSS filters active.
- **Configurable Variables**: Built to integrate with EaseMotion's CSS variables (`--ease-duration`, `--ease-timing`) using smart fallbacks.
- **Accessibility**: Explicitly includes a `@media (prefers-reduced-motion: reduce)` override to strip the animation entirely for users who prefer reduced motion.

## Proposed Core Addition
If accepted into the core, the following block should be added to `core/animations.css`:

```css
@keyframes ease-blur-prism-fade-light {
  0% {
    opacity: 0;
    filter: blur(16px) brightness(2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.8));
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    filter: blur(0px) brightness(1) drop-shadow(0 0 0px rgba(255, 255, 255, 0));
    transform: scale(1);
  }
}

.ease-anim-blur-prism-fade-light {
  animation: ease-blur-prism-fade-light var(--ease-duration, 1s) var(--ease-timing, ease-out) both;
}

@media (prefers-reduced-motion: reduce) {
  .ease-anim-blur-prism-fade-light {
    animation: none !important;
    opacity: 1 !important;
    filter: none !important;
    transform: none !important;
  }
}
```

## Browser Support
Fully hardware-accelerated. Supported in all modern browsers.
