# CSS Elastic Scale Button Component

A pure HTML + Vanilla CSS button component featuring an "Elastic Scale" hover animation with overshoot keyframe physics (`@keyframes elastic-scale`), smooth cubic-bezier mouse-leave transitions, tactile active press state (`scale(0.96)`), and layout-stable GPU scaling.

## Features

- **Pure HTML + CSS**: 100% interactive without JavaScript, external fonts, external image assets, or build scripts. Works offline.
- **Elastic Scale Hover Identity**: GPU-accelerated `transform: scale()` overshoot keyframe animation (`@keyframes elastic-scale`), cubic-bezier spring curve on mouse leave, and zero layout shift.
- **100% Accessible**: Built using native `<button type="button">` with native keyboard activation (`Enter`, `Space`), disabled-state styling (`disabled`), and clear `:focus-visible` indicators.
- **Detailed Technique Documentation**: Inline CSS comments explaining transform layout stability, keyframe overshoot physics, and reduced-motion considerations.
- **Clear `:focus-visible` States**: Dedicated focus outlines on active button controls with radiant cyan glow.
- **Responsive & Mobile Ready**: Responsive flex layout wraps cleanly across mobile viewports (320px–1440px+).
- **Theme Adaptability & Motion Controls**: Supports light/dark theme adaptation (`@media (prefers-color-scheme)`) and reduced motion controls (`@media (prefers-reduced-motion: reduce)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<button class="elastic-button" type="button">
  <span>EXPLORE CORE</span>
</button>

<button class="elastic-button" type="button" disabled>
  <span>SYSTEM OFFLINE</span>
</button>
```

### Customization Variables

```css
:root {
  --elastic-bg: #f8fafc;
  --elastic-surface: #ffffff;
  --elastic-accent: #4f46e5;
  --elastic-focus: #0284c7;
  --elastic-duration: 520ms;
}
```
