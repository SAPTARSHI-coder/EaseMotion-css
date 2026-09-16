# Shimmer Light Streak Gloss Motion Preset (`ease-anim-shimmer-light-streak-gloss`)

A pure HTML + Vanilla CSS motion preset featuring hardware-accelerated pseudo-element light streak sweeps (`translateX` & `skewX`), customizable duration tokens (`--ease-duration-slow: 2.5s`), keyboard accessibility, dark/light theme adaptation, and `prefers-reduced-motion` fallbacks without any JavaScript or external dependencies.

## Features

- **Pure HTML + CSS**: 100% responsive Shimmer Light Streak Gloss preset without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Hardware-Accelerated Pseudo-Element Overlay**: Uses `::after` pseudo-element with `pointer-events: none` and `transform: translateX(-150%) skewX(-20deg)` to `translateX(250%) skewX(-20deg)` for zero layout recalculation and smooth 60 FPS compositor rendering.
- **100% Accessible**: Includes explicit focus rings (`:focus-visible`) and `@media (prefers-reduced-motion: reduce)` fallbacks (`display: none !important`).
- **Theme Adaptability**: Supports light mode default presentation (`#f8fafc`) and dark mode adaptation (`@media (prefers-color-scheme)`).

## Usage

Include `style.css` and use class names or `@keyframes`:

```html
<div class="gloss-card ease-anim-shimmer-light-streak-gloss" tabindex="0">
  <div class="card-inner-content">...</div>
</div>

<button type="button" class="gloss-button ease-anim-shimmer-light-streak-gloss">
  <span>CLICK ME</span>
</button>
```

### Customization Variables

```css
.gloss-card {
  --ease-duration-slow: 2.5s;
  --ease-ease: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/86189-shimmer-light-streak-gloss/demo.html) directly in any modern web browser to view the Shimmer Light Streak Gloss Motion Preset offline.
