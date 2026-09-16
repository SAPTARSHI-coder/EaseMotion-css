# CSS Loading Ellipsis Component (`70230-css-loading-ellipsis`)

A pure HTML + Vanilla CSS 3-dot growing & fading sequence loading indicator featuring staggered `@keyframes ease-ellipsis-pulse` scale and opacity modulation (`0.4` &rarr; `1.2`), custom size and color modifiers, accessibility status roles, dark/light theme adaptation, and reduced motion fallbacks without any JavaScript.

## Features

- **Pure HTML + CSS**: 100% responsive 3-dot loading ellipsis sequence without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Growing & Fading Sequence**: Uses 3 circular dot elements (`.ease-ellipsis-dot`) with staggered `animation-delay` offsets (`0s`, `0.2s`, `0.4s`) to create a smooth sequential pulsing movement.
- **100% Accessible**: Includes `role="status"`, `aria-label="Loading"`, visually hidden text for screen readers (`<span class="sr-only">Loading content...</span>`), and `@media (prefers-reduced-motion: reduce)` fallbacks (`animation: none !important;`).
- **Theme Adaptability & Modifiers**: Supports dark space surface default presentation, light theme adaptation (`@media (prefers-color-scheme)`), Cyan (`#0284c7`), Emerald (`.ease-ellipsis-emerald`), Amber (`.ease-ellipsis-amber`), and size modifiers (`.ease-ellipsis-sm`, `.ease-ellipsis-lg`).

## Usage

Include `style.css` and use semantic HTML:

```html
<!-- Standard Blue Loading Ellipsis -->
<div class="ease-loading-ellipsis" role="status" aria-label="Loading content">
  <span class="ease-ellipsis-dot"></span>
  <span class="ease-ellipsis-dot"></span>
  <span class="ease-ellipsis-dot"></span>
  <span class="sr-only">Loading content...</span>
</div>

<!-- Emerald Matrix Loading Ellipsis -->
<div
  class="ease-loading-ellipsis ease-ellipsis-emerald"
  role="status"
  aria-label="Emerald loading"
>
  <span class="ease-ellipsis-dot"></span>
  <span class="ease-ellipsis-dot"></span>
  <span class="ease-ellipsis-dot"></span>
</div>
```

### Customization Variables

```css
.ease-loading-ellipsis {
  --dot-size: 14px;
  --dot-color: #0284c7;
  --dot-speed: 1.4s;
  --dot-gap: 8px;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/70230-css-loading-ellipsis/demo.html) directly in any modern web browser to view the 3-dot loading ellipsis sequence animation offline.
