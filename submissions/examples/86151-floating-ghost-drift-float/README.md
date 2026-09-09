# Floating Ghost Drift Float Motion Preset (`ease-anim-floating-ghost-drift-float`)

A pure HTML + Vanilla CSS floating motion preset featuring multi-stage organic 3D translation (`translate3d(x, y, 0)`) and opacity pulsing loop simulating a lightweight ghost or suspended object moving through air, customizable duration tokens (`--ease-duration-slow: 4s`), keyboard accessibility, dark/light theme adaptation, and `prefers-reduced-motion` fallbacks without any JavaScript or external dependencies.

## Features

- **Pure HTML + CSS**: 100% responsive Floating Ghost Drift Float preset without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Hardware-Accelerated 3D Translation**: Uses `translate3d(x, y, 0)` and `opacity` keyframe stages (`0% translate3d(0, 0, 0)` -> `25% translate3d(6px, -14px, 0)` -> `50% translate3d(-5px, -24px, 0)` -> `100% translate3d(0, 0, 0)`) for zero layout recalculation and smooth 60 FPS compositor rendering.
- **100% Accessible**: Includes explicit focus rings (`:focus-visible`) and `@media (prefers-reduced-motion: reduce)` fallbacks (`animation: none !important; transform: translate3d(0, 0, 0) !important; opacity: 1 !important;`).
- **Theme Adaptability**: Supports light mode default presentation (`#f8fafc`) and dark mode adaptation (`@media (prefers-color-scheme)`).

## Usage

Include `style.css` and use class names or `@keyframes`:

```html
<div class="ghost-card ease-anim-floating-ghost-drift-float" tabindex="0">
  <div class="card-inner-content">...</div>
</div>
```

### Customization Variables

```css
.ghost-card {
  --ease-duration-slow: 4s;
  --ease-ease: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/86151-floating-ghost-drift-float/demo.html) directly in any modern web browser to view the Floating Ghost Drift Float Motion Preset offline.
