# CSS Animated SVG Path Drawing

A stunning, purely CSS-driven SVG path drawing animation. It utilizes the classic `stroke-dasharray` offset trick, heavily modernized with the HTML `pathLength` attribute.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript. Utilizes CSS `@keyframes` to animate the `stroke-dashoffset` property.
- **Normalized Path Lengths**: Eliminates the fragile and tedious process of calculating exact SVG pixel path lengths in JavaScript. By applying the modern `pathLength="100"` attribute directly to the SVG `<path>`, CSS can reliably animate `stroke-dashoffset` from 100 to 0 on any complex vector shape perfectly.
- **Sequential Animations**: Leverages `animation-delay` to queue a subtle color `fill` fade-in exactly as the line drawing sequence completes.
- **Accessible**: Fully respects user preferences by gracefully disabling the drawing sequence and instantly rendering the completed, filled vector graphic via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure into your layout. You can replace the inner `<path>` with any vector you like—just ensure you leave `pathLength="100"` attached to the new path so the CSS animation timing remains perfectly calibrated.

```html
<svg class="animated-svg" viewBox="0 0 100 100">
  <path pathLength="100" d="..." />
</svg>
```

## CSS Custom Properties
Easily customize the visual styling using the root variables in `style.css`:
- `--stroke-color`: Color of the drawn line (default: `#38bdf8`)
- `--fill-color`: Color of the faded-in interior fill (default: `rgba(56, 189, 248, 0.15)`)
- `--animation-duration`: Total duration of the line drawing sequence (default: `3s`)

## Browser Support
Works beautifully in all modern browsers (Chrome, Firefox, Safari, Edge). The `pathLength` attribute is fully supported across all major rendering engines.
