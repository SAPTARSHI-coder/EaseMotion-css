# Vaporwave Grid Pulse Horizon Motion Preset (`ease-anim-vaporwave-grid-pulse-horizon`)

A pure HTML + Vanilla CSS motion preset featuring retro-futuristic 3D perspective grid scanning (`perspective(500px) rotateX(60deg) translateY(...) scaleY(...)`), customizable duration tokens (`--ease-duration-slow: 3s`), keyboard accessibility, dark/light theme adaptation, and `prefers-reduced-motion` fallbacks without any JavaScript or external dependencies.

## Features

- **Pure HTML + CSS**: 100% responsive Vaporwave Grid Pulse Horizon preset without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Hardware-Accelerated Pseudo-Element Overlay**: Uses `::before` pseudo-element with `pointer-events: none` and `transform: perspective(500px) rotateX(60deg) translateY(...) scaleY(...)` for zero layout recalculation and smooth 60 FPS compositor rendering.
- **100% Accessible**: Includes explicit focus rings (`:focus-visible`) and `@media (prefers-reduced-motion: reduce)` fallbacks (`animation: none !important; opacity: 0.5 !important;`).
- **Theme Adaptability**: Supports light mode default presentation (`#f8fafc`) and dark mode adaptation (`@media (prefers-color-scheme)`).

## Usage

Include `style.css` and use class names or `@keyframes`:

```html
<div class="vaporwave-card ease-anim-vaporwave-grid-pulse-horizon" tabindex="0">
  <div class="card-inner-content">...</div>
</div>
```

### Customization Variables

```css
.vaporwave-card {
  --ease-duration-slow: 3s;
  --ease-ease: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/86184-vaporwave-grid-pulse-horizon/demo.html) directly in any modern web browser to view the Vaporwave Grid Pulse Horizon Motion Preset offline.
