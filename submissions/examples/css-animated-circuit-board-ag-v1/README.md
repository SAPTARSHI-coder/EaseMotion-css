# CSS Animated Circuit Board

A mesmerizing, tech-inspired circuit board animation featuring traveling data pulses, built entirely with CSS and SVG.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript. Utilizes CSS `@keyframes` and the modern SVG `pathLength` attribute to create complex traveling pulse effects along vector paths.
- **Normalized Path Math**: Eliminates the fragile process of calculating exact SVG pixel path lengths in JavaScript. By applying `pathLength="100"` directly to the SVG `<path>`s, CSS can reliably animate `stroke-dashoffset` from 15 to -100 on any vector shape perfectly.
- **Glow Effects**: Leverages CSS `filter: drop-shadow()` to give the traveling pulses and the central CPU core a neon, cybernetic glow.
- **Performant & Accessible**: The continuous animations run purely on the browser's compositor layer. Respects user preferences by gracefully disabling the continuous pulsing and locking the dashes into static positions via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure into your layout. You can draw any circuit trace using SVG `<path>` elements. Just make sure to duplicate the path into the `.pulses` group and add `pathLength="100"` to enable the animation.

```html
<!-- Base Background Trace -->
<path class="trace" d="M 50,250 L 50,150 L 100,100" />

<!-- Animated Overlay Pulse -->
<path class="pulse pulse-1" pathLength="100" d="M 50,250 L 50,150 L 100,100" />
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--bg-color`: The deep space background color (default: `#0b1121`)
- `--trace-color`: The faint background line color (default: `#1e293b`)
- `--pulse-color`: The solid color of the traveling pulse (default: `#38bdf8`)
- `--pulse-glow`: The blurred glow surrounding the pulse (default: `rgba(56, 189, 248, 0.6)`)
- `--node-color`: The outline color of the circular endpoints (default: `#0ea5e9`)

## Browser Support
Works beautifully in all modern browsers (Chrome, Firefox, Safari, Edge). The `pathLength` attribute is fully supported across all major rendering engines.
