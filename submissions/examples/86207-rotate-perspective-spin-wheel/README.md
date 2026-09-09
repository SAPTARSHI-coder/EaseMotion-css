# Rotate Perspective Spin Wheel Motion Preset (`ease-anim-rotate-perspective-spin-wheel`)

A pure HTML + Vanilla CSS motion preset featuring 3D perspective GPU rotation (`perspective(800px) rotateX(...) rotateY(...) rotateZ(...) scale(...)`), continuous wheel spinning motion, customizable duration tokens (`--ease-duration-slow: 3s`), keyboard accessibility, dark/light theme adaptation, and `prefers-reduced-motion` fallbacks without any JavaScript or external dependencies.

## Features

- **Pure HTML + CSS**: 100% responsive 3D perspective spin wheel preset without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **3D Perspective Spin Transformation**: Uses hardware-accelerated 3D transforms (`rotateX`, `rotateY`, `rotateZ`, `perspective`, `scale`) for smooth 60 FPS wheel rotation.
- **100% Accessible**: Includes explicit focus rings (`:focus-visible`) and `@media (prefers-reduced-motion: reduce)` fallbacks (`animation: none !important; transform: none !important;`).
- **Theme Adaptability**: Supports light mode default presentation (`#f8fafc`) and dark mode adaptation (`@media (prefers-color-scheme)`).

## Usage

Include `style.css` and use class names or `@keyframes`:

```html
<div
  class="spin-wheel-card ease-anim-rotate-perspective-spin-wheel"
  tabindex="0"
>
  <div class="card-glass-surface">...</div>
</div>
```

### Customization Variables

```css
.spin-wheel-card {
  --ease-duration-slow: 3s;
  --ease-ease: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/86207-rotate-perspective-spin-wheel/demo.html) directly in any modern web browser to view the Rotate Perspective Spin Wheel Motion Preset offline.
