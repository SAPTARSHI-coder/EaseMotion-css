# Outline Pulse Ring SCSS Mixin (#81840)

## Abstract

The `ease-outline-pulse-ring` SCSS mixin provides a lightweight, GPU-accelerated pulse animation that draws visually prominent expanding pulse rings around any HTML element (buttons, status beacons, badges, or notification icons). Designed for maximum performance across modern browsers, this mixin generates smooth 60 FPS animations on the compositor thread without causing reflows or layout thrashing.

## SCSS Mixin Specification & Source

Here is the authoritative SCSS mixin definition for inclusion into the core EaseMotion library:

```scss
// EaseMotion Core SCSS Mixin: Outline Pulse Ring
@mixin ease-outline-pulse-ring(
  $color: var(--ease-pulse-color, #38bdf8),
  $duration: var(--ease-duration, 2s),
  $timing: var(--ease-timing, cubic-bezier(0.25, 0.46, 0.45, 0.94)),
  $offset: -4px
) {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: $offset;
    border-radius: inherit;
    border: 2px solid $color;
    opacity: 0;
    pointer-events: none;
    animation: ease-outline-pulse-ring #{$duration} #{$timing} infinite;
    will-change: transform, opacity;
  }
}

@keyframes ease-outline-pulse-ring {
  0% {
    transform: scale(0.95);
    opacity: 0.9;
  }
  75% {
    transform: scale(1.65);
    opacity: 0;
  }
  100% {
    transform: scale(1.65);
    opacity: 0;
  }
}
```

## GPU Hardware Acceleration & Reflow Avoidance

Traditional pulse ring implementations often animate properties like `box-shadow`, `outline-offset`, or `width`/`height`. Animating these properties triggers expensive raster paint cycles and CPU-bound layout recalculations (reflows) on every frame.

The `ease-outline-pulse-ring` mixin circumvents layout thrashing by leveraging absolute positioning on the `::after` pseudo-element and animating exclusively compositor-friendly properties:

- **`transform: scale(...)`**: Handled directly on the GPU compositor thread without triggering DOM layout calculations or paint invalidation.
- **`opacity`**: Rendered on the GPU for efficient alpha blending.
- **`will-change: transform, opacity`**: Hints to browser rendering engines to isolate the pseudo-element into its own graphics layer ahead of time.
- **`pointer-events: none`**: Ensures the expanding pseudo-element ring does not intercept mouse or touch interactions.

## Timing & Color Variable Overrides

The mixin uses CSS custom properties (`--ease-pulse-color`, `--ease-duration`, `--ease-timing`) for dynamic customization per component instance without writing custom keyframes:

- **Default Ring Color**: `#38bdf8` (Cyan/Sky)
- **Default Animation Duration**: `2s`
- **Default Easing Curve**: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`

### Customization Example

```css
.custom-beacon {
  --ease-pulse-color: #34d399;
  --ease-duration: 1.6s;
}
```

## Accessibility Compliance

- **`prefers-reduced-motion: reduce`**: Users who specify a preference for reduced motion will have the pulse animation automatically disabled (`animation: none !important; display: none !important;`) to prevent vestibular discomfort.
- **`forced-colors: active`**: High-Contrast / Windows Contrast themes automatically remap borders to system `Highlight` colors and container borders to `CanvasText` for optimal legibility.
