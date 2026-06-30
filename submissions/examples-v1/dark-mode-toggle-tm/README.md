# Dark Mode Toggle Button Utilities

A collection of theme toggle buttons with smooth animated transitions. Supports icon buttons, slider switches, pill buttons, and multi-option groups.

## Features

- **Icon toggle**: sun/moon icons with rotation animation on switch
- **Size variants**: `--sm`, default, `--lg`
- **Glow effect**: `--glow` adds primary color glow on hover
- **Switch slider**: pill-shaped track with sliding thumb
- **Theme group**: light/dark/system preference pill group
- **Pill button**: icon + label in a rounded pill
- **Focus-visible**: keyboard-accessible focus styles
- **Reduced motion**: respects `prefers-reduced-motion`

## Usage

Icon toggle button:

```html
<button class="theme-toggle" aria-label="Toggle theme">
  <svg class="theme-toggle__sun" viewBox="0 0 24 24">...</svg>
  <svg class="theme-toggle__moon" viewBox="0 0 24 24">...</svg>
</button>
```

Switch slider:

```html
<label class="theme-switch">
  <input type="checkbox" class="theme-switch__input" />
  <span class="theme-switch__track"></span>
</label>
```

## Files

- `style.css` — toggle utilities
- `demo.html` — interactive showcase
- `README.md` — this documentation
