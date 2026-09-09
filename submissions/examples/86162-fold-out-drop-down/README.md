# Fold Out Drop Down Motion Preset (`ease-anim-fold-out-drop-down`)

A pure HTML + Vanilla CSS top-anchored vertical unfolding motion preset featuring `transform-origin: top center`, scaleY and translateY transformations (`0% scaleY(0) translateY(-20px)` -> `60% scaleY(1.08) translateY(4px)` -> `100% scaleY(1) translateY(0)`), customizable duration tokens (`--ease-duration-normal: 350ms`), keyboard accessibility, dark/light theme adaptation, and `prefers-reduced-motion` fallbacks without any JavaScript or external dependencies.

## Features

- **Pure HTML + CSS**: 100% responsive Fold Out Drop Down preset without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Top-Anchored Vertical Unfolding**: Uses hardware-accelerated `transform-origin: top center` with `scaleY()` and `translateY()` for zero layout reflow and smooth 60 FPS compositor rendering.
- **100% Accessible**: Includes explicit focus rings (`:focus-visible`) and `@media (prefers-reduced-motion: reduce)` fallbacks (`animation: none !important; transform: scaleY(1) translateY(0) !important; opacity: 1 !important;`).
- **Theme Adaptability**: Supports light mode default presentation (`#f8fafc`) and dark mode adaptation (`@media (prefers-color-scheme)`).

## Usage

Include `style.css` and use class names or `@keyframes`:

```html
<div class="fold-card ease-anim-fold-out-drop-down" tabindex="0">
  <div class="card-inner-content">...</div>
</div>
```

### Customization Variables

```css
.fold-card {
  --ease-duration-normal: 350ms;
  --ease-ease: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/86162-fold-out-drop-down/demo.html) directly in any modern web browser to view the Fold Out Drop Down Motion Preset offline.
