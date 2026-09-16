# Corner Draw Border Box Motion Preset (`ease-anim-corner-draw-border-box`)

A pure HTML + Vanilla CSS progressive border draw motion preset featuring hardware-accelerated `scaleX()` and `scaleY()` edge drawing starting from the top-left corner (`::before` top & right edges + `::after` bottom & left edges), customizable duration tokens (`--ease-duration-normal: 800ms`), keyboard accessibility, dark/light theme adaptation, and `prefers-reduced-motion` fallbacks without any JavaScript or external dependencies.

## Features

- **Pure HTML + CSS**: 100% responsive Corner Draw Border Box preset without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Top-Left Corner Edge Draw Sequence**: Uses pseudo-elements (`::before` and `::after`) with `transform-origin: top left` and `transform-origin: bottom right` for hardware-accelerated 60 FPS border drawing around rectangular containers.
- **100% Accessible**: Includes explicit focus rings (`:focus-visible`) and `@media (prefers-reduced-motion: reduce)` fallbacks (`animation: none !important; transform: scaleX(1) scaleY(1) !important;`).
- **Theme Adaptability**: Supports light mode default presentation (`#f8fafc`) and dark mode adaptation (`@media (prefers-color-scheme)`).

## Usage

Include `style.css` and use class names or `@keyframes`:

```html
<div class="corner-box ease-anim-corner-draw-border-box" tabindex="0">
  <div class="box-inner-content">...</div>
</div>
```

### Customization Variables

```css
.corner-box {
  --ease-duration-normal: 800ms;
  --ease-ease: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/86156-corner-draw-border-box/demo.html) directly in any modern web browser to view the Corner Draw Border Box Motion Preset offline.
