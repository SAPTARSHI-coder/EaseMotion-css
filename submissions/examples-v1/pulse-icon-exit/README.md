# Animation: Pulse Icon Exit

A satisfying exit animation for icon components. The icon pulses (scales up ~1.3×), then shrinks and fades out — ideal for delete, close, logout, and dismiss interactions.

## Features

- **Pure CSS** — `@keyframes ease-pulse-icon-exit` with no JavaScript dependency for the animation itself
- **Spring-like easing** — `cubic-bezier(0.25, 1, 0.5, 1)` for a snappy, natural feel
- **GPU-accelerated** — animates only `transform` and `opacity`
- **Multiple color variants** — red (default), teal, amber, blue via `--ease-icon-*` custom properties
- **Reduced motion** — respects `prefers-reduced-motion`
- **Cross-browser** — Chrome, Firefox, Safari, Edge

## Usage

```html
<button class="pulse-icon exit-active">
  <!-- SVG icon -->
</button>
```

Trigger the `.exit-active` class on click (or any event) to play the animation. Remove the class to reset.
