# Origami Paper Fold CSS Tooltip Component

A pure HTML + Vanilla CSS accessible tooltip and popover component featuring a 3D folded-paper note aesthetic with a folded corner flap and paper layers.

## Features

- **Pure HTML + CSS**: 100% interactive without JavaScript, external fonts, external assets, or build scripts.
- **Origami Paper Fold Geometry**: Features cut-corner geometry (`clip-path`), a folded paper corner flap (`::before`), shadow overlays, and a paper tail pointing to the trigger.
- **Dual Hover & Focus Triggers**: Revealed via pointer `:hover` as well as keyboard `:focus` and `:focus-visible` on native `<button>` controls.
- **Accessible (a11y)**: Connects trigger elements to tooltips using `aria-describedby`, with clear paper-inspired `:focus-visible` outlines.
- **Hardware-Friendly Transitions**: Smooth GPU-accelerated `opacity` and `transform` transitions.
- **Responsive & Motion Friendly**: Adapts smoothly to mobile screens (down to 320px), `@media (prefers-color-scheme)`, and `@media (prefers-reduced-motion: reduce)`.

## Usage

Include `style.css` and wrap your trigger and tooltip using `aria-describedby`:

```html
<div class="origami-tooltip-wrapper">
  <button type="button" class="origami-trigger" aria-describedby="tooltip-demo">
    <span>Hover or Focus</span>
  </button>
  <div id="tooltip-demo" class="origami-tooltip" role="tooltip">
    <div class="paper-fold-corner" aria-hidden="true"></div>
    <div class="tooltip-header">QUICK TIP</div>
    <div class="tooltip-body">Contextual information here.</div>
  </div>
</div>
```

### Customization Variables

```css
:root {
  --paper-bg: #fffdf5;
  --paper-fold: #e6d7b8;
  --paper-shadow: rgba(50, 40, 25, 0.16);
  --paper-border: #d6c5a5;
  --paper-text: #2c251d;
  --paper-header: #964a27;
}
```
