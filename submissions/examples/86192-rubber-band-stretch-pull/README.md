# Rubber Band Stretch Pull Motion Preset (`ease-anim-rubber-band-stretch-pull`)

A pure HTML + Vanilla CSS motion preset featuring multi-stage elastic stretch & recoil deformation (`scale3d`), customizable duration tokens (`--ease-duration-normal: 1000ms`), keyboard accessibility, dark/light theme adaptation, and `prefers-reduced-motion` fallbacks without any JavaScript or external dependencies.

## Features

- **Pure HTML + CSS**: 100% responsive Rubber Band Stretch Pull preset without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Elastic Multi-Stage Scale Transformation**: Uses hardware-accelerated `scale3d(x, y, 1)` deformation simulating a stretched rubber band pulling back to equilibrium (`0%` -> `30% scale3d(1.25, 0.75, 1)` -> `40% scale3d(0.75, 1.25, 1)` -> `100% scale3d(1, 1, 1)`).
- **100% Accessible**: Includes explicit focus rings (`:focus-visible`) and `@media (prefers-reduced-motion: reduce)` fallbacks (`animation: none !important; transform: none !important;`).
- **Theme Adaptability**: Supports light mode default presentation (`#f8fafc`) and dark mode adaptation (`@media (prefers-color-scheme)`).

## Usage

Include `style.css` and use class names or `@keyframes`:

```html
<div class="rubber-card ease-anim-rubber-band-stretch-pull" tabindex="0">
  <div class="card-inner-content">...</div>
</div>
```

### Customization Variables

```css
.rubber-card {
  --ease-duration-normal: 1000ms;
  --ease-ease: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/86192-rubber-band-stretch-pull/demo.html) directly in any modern web browser to view the Rubber Band Stretch Pull Motion Preset offline.
