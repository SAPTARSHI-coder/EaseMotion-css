# Minimalist Outline CSS Tooltip Component

A clean, lightweight, accessible tooltip and popover component with a "Minimalist Outline" visual identity.

## Features

- **Pure HTML + CSS**: 100% interactive without JavaScript, external fonts, external image assets, or build dependencies. Works offline.
- **Minimalist Outline Aesthetic**: Crisp 1px borders, subtle border-radius, clean typography, and zero unnecessary visual clutter or glow.
- **Dual Hover & Focus Discovery**: Revealed via pointer `:hover` as well as keyboard `:focus` and `:focus-visible` on native `<button>` controls.
- **Accessible (a11y)**: Semantic `<button>` triggers connected to tooltips using `aria-describedby`, with clear `:focus-visible` outlines.
- **Hardware-Friendly Transitions**: Smooth GPU-accelerated `opacity` and `transform` transitions.
- **Responsive & Dark Mode**: Adapts seamlessly across mobile viewports (down to 320px), `@media (prefers-color-scheme)`, and `@media (prefers-reduced-motion: reduce)`.

## Usage

Include `style.css` and associate your trigger and tooltip using `aria-describedby`:

```html
<div class="tooltip-wrapper">
  <button type="button" class="tooltip-trigger" aria-describedby="tip-demo">
    <span>Hover or Focus</span>
  </button>
  <div id="tip-demo" class="outline-tooltip tooltip-top" role="tooltip">
    <div class="tooltip-title">System Status</div>
    <div class="tooltip-body">Contextual information appears here.</div>
  </div>
</div>
```

### Customization Variables

```css
:root {
  --tooltip-bg: #ffffff;
  --tooltip-border: #cbd5e1;
  --tooltip-border-active: #0f172a;
  --tooltip-text: #0f172a;
  --tooltip-muted: #64748b;
  --tooltip-radius: 6px;
}
```
