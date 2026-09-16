# Drop Bounce Shadow Floor Motion Preset (`ease-anim-drop-bounce-shadow-floor`)

A pure HTML + Vanilla CSS physical drop-and-settle motion preset featuring elevated drop (`translateY(-160px)`), impact squash (`scale(1.15, 0.82)`), rebound, and baseline settling, synchronized with a dynamic floor shadow expansion/contraction (`::after` pseudo-element), customizable duration tokens (`--ease-duration-normal: 1200ms`), keyboard accessibility, dark/light theme adaptation, and `prefers-reduced-motion` fallbacks without any JavaScript or external dependencies.

## Features

- **Pure HTML + CSS**: 100% responsive Drop Bounce Shadow Floor preset without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Physical Drop & Floor Shadow Synchronization**: Uses hardware-accelerated `translateY()` and `scale()` properties paired with a synchronized `::after` floor shadow (`scale()` & `opacity`) simulating real-world physics.
- **100% Accessible**: Includes explicit focus rings (`:focus-visible`) and `@media (prefers-reduced-motion: reduce)` fallbacks (`animation: none !important; transform: translateY(0) scale(1) !important;`).
- **Theme Adaptability**: Supports light mode default presentation (`#f8fafc`) and dark mode adaptation (`@media (prefers-color-scheme)`).

## Usage

Include `style.css` and use class names or `@keyframes`:

```html
<div class="drop-card ease-anim-drop-bounce-shadow-floor" tabindex="0">
  <div class="card-inner-content">...</div>
</div>
```

### Customization Variables

```css
.drop-card {
  --ease-duration-normal: 1200ms;
  --ease-ease: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/86168-drop-bounce-shadow-floor/demo.html) directly in any modern web browser to view the Drop Bounce Shadow Floor Motion Preset offline.
