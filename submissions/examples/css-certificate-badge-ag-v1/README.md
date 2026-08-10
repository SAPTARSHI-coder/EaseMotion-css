# CSS Certificate Badge

A stunning, physical-style digital certificate badge built entirely with CSS. Perfect for course completions, skill verifications, or gamification achievements.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript. Utilizes CSS `clip-path` to create the jagged seal edge and the inverted-V cuts on the ribbon tails without relying on SVG backgrounds or images.
- **Metallic Gradients**: Leverages stacked linear gradients and inner box shadows to simulate depth, lighting, and a genuine metallic gold appearance.
- **Micro-Interactions**: Hovering or focusing the badge triggers an orchestrated `cubic-bezier` pop effect. The ribbon tails dynamically swing outward by modifying their `transform: rotate()`, and a pure CSS glare sweeps across the metallic seal using an animated pseudo-element gradient.
- **Accessible**: Fully supports keyboard navigation via `tabindex="0"` and includes appropriate `aria-label`s for screen readers. Respects user preferences by gracefully disabling the swing, scale, and glare animations via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure into your achievement or profile layout. Ensure the inner SVG icon and text fit within the inner gold ring.

```html
<div class="badge-wrapper" tabindex="0" aria-label="...">
  <div class="badge-body">
    <div class="badge-inner">
      <svg class="badge-icon">...</svg>
      <span class="badge-text">Certified</span>
    </div>
  </div>
  <div class="ribbons">
    <div class="ribbon left" aria-hidden="true"></div>
    <div class="ribbon right" aria-hidden="true"></div>
  </div>
</div>
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--gold-light`, `--gold-base`, `--gold-dark`: The core gradient stops for the metallic seal (default: yellow/gold spectrum).
- `--ribbon-red`, `--ribbon-dark`: The color spectrum for the ribbon tails (default: red).
- `--text-primary`: The text and icon color for the inner badge content (default: `#1e293b`).

## Browser Support
Works beautifully in all modern browsers (Chrome, Firefox, Safari, Edge) that support `clip-path`.
