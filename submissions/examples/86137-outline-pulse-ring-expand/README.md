# Outline Pulse Ring Expand Motion Preset (`ease-anim-outline-pulse-ring-expand`)

A pure HTML + Vanilla CSS expanding pulse ring overlay motion preset featuring continuous hardware-accelerated scale expansion and opacity fade (`0% scale(0.95) opacity(0.85)` -> `50% scale(1.25) opacity(0.45)` -> `100% scale(1.55) opacity(0)`), customizable duration tokens (`--ease-duration-slow: 2s`), keyboard accessibility, dark/light theme adaptation, and `prefers-reduced-motion` fallbacks without any JavaScript or external dependencies.

## Features

- **Pure HTML + CSS**: 100% responsive Outline Pulse Ring Expand preset without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Hardware-Accelerated Pseudo-Element Overlay**: Uses `::after` pseudo-element layer with `pointer-events: none` and `transform: scale()` keyframe stages for zero layout recalculation and smooth 60 FPS compositor rendering.
- **100% Accessible**: Includes explicit focus rings (`:focus-visible`) and `@media (prefers-reduced-motion: reduce)` fallbacks (`animation: none !important; opacity: 0 !important;`).
- **Theme Adaptability**: Supports light mode default presentation (`#f8fafc`) and dark mode adaptation (`@media (prefers-color-scheme)`).

## Usage

Include `style.css` and use class names or `@keyframes`:

```html
<div class="pulse-card ease-anim-outline-pulse-ring-expand" tabindex="0">
  <div class="card-inner-content">...</div>
</div>
```

### Customization Variables

```css
.pulse-card {
  --ease-duration-slow: 2s;
  --ease-ease: cubic-bezier(0, 0, 0.2, 1);
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/86137-outline-pulse-ring-expand/demo.html) directly in any modern web browser to view the Outline Pulse Ring Expand Motion Preset offline.
