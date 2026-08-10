# CSS Heartbeat EKG Loader

A beautiful, medical-inspired EKG heartbeat loader built entirely with SVG and CSS keyframe animations. Perfect for healthcare dashboards or system status monitors.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript. Utilizes CSS `@keyframes` and the modern SVG `pathLength` attribute to create a traveling pulse effect along a complex vector path.
- **Normalized Path Math**: Eliminates the fragile process of calculating exact SVG pixel path lengths in JavaScript. By applying `pathLength="100"` directly to the SVG `<path>`, CSS can reliably animate `stroke-dashoffset` across the entire shape effortlessly.
- **Neon Medical Aesthetic**: Leverages CSS `filter: drop-shadow()` to give the traveling heartbeat pulse a glowing, monitor-like appearance against a faint background track. The page background features a subtle CSS grid pattern.
- **Accessible**: Functions as a proper loading indicator with `role="status"` and `aria-live="polite"` to correctly announce its presence to screen readers. Respects user preferences by gracefully disabling the continuous pulsing and locking the heartbeat to a solid static line via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure into your application's loading overlay.

```html
<div class="loader-container" role="status" aria-live="polite">
  <svg viewBox="0 0 400 100">
    <path class="ekg-track" d="..." />
    <path class="ekg-line" pathLength="100" d="..." />
  </svg>
  <div class="loading-text">Monitoring Status...</div>
</div>
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--bg-color`: The deep monitor background color (default: `#0b1120`)
- `--ekg-line-color`: The solid color of the traveling heartbeat (default: `#ef4444`)
- `--ekg-glow`: The blurred glow surrounding the heartbeat (default: `rgba(239, 68, 68, 0.6)`)
- `--ekg-track`: The faint background path color (default: `rgba(239, 68, 68, 0.15)`)

## Browser Support
Works beautifully in all modern browsers (Chrome, Firefox, Safari, Edge). The `pathLength` attribute is fully supported across all major rendering engines.
