# Confetti Burst Scale Pop Motion Preset (`ease-anim-confetti-burst-scale-pop`)

A pure HTML + Vanilla CSS celebratory scale pop motion preset featuring one-shot hardware-accelerated scale expansion and overshoot settling (`0% scale(0.75)` -> `45% scale(1.22)` -> `75% scale(0.95)` -> `100% scale(1)`), customizable duration tokens (`--ease-duration-fast: 450ms`), keyboard accessibility, dark/light theme adaptation, and `prefers-reduced-motion` fallbacks without any JavaScript or external dependencies.

## Features

- **Pure HTML + CSS**: 100% responsive Confetti Burst Scale Pop preset without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **One-Shot Scale Pop & Overshoot**: Uses `transform: scale()` keyframe stages (`scale(0.75)` -> `scale(1.22)` -> `scale(0.95)` -> `scale(1.0)`) for zero layout reflow and smooth 60 FPS compositor rendering.
- **100% Accessible**: Includes explicit focus rings (`:focus-visible`) and `@media (prefers-reduced-motion: reduce)` fallbacks (`animation: none !important; transform: scale(1) !important; opacity: 1 !important;`).
- **Theme Adaptability**: Supports light mode default presentation (`#f8fafc`) and dark mode adaptation (`@media (prefers-color-scheme)`).

## Usage

Include `style.css` and use class names or `@keyframes`:

```html
<div class="burst-card ease-anim-confetti-burst-scale-pop" tabindex="0">
  <div class="card-inner-content">...</div>
</div>
```

### Customization Variables

```css
.burst-card {
  --ease-duration-fast: 450ms;
  --ease-ease: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/86139-confetti-burst-scale-pop/demo.html) directly in any modern web browser to view the Confetti Burst Scale Pop Motion Preset offline.
