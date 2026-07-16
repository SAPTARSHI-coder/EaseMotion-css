# CSS-Only Animated Toggle Switches

A collection of accessible toggle switch designs using hidden checkboxes. Pure CSS, no JavaScript.

## What does this do?

Provides multiple toggle switch designs (primary, success, danger, warning) in three sizes (small, default, large) with shape variants (round, square, icon). Uses hidden checkbox for state management.

## How is it used?

```html
<label class="toggle">
  <input type="checkbox" class="toggle__input" />
  <span class="toggle__track">
    <span class="toggle__thumb"></span>
  </span>
  <span class="toggle__label">Toggle label</span>
</label>
```

### Variants

```html
<!-- Color -->
<label class="toggle toggle--success">...</label>
<label class="toggle toggle--danger">...</label>
<label class="toggle toggle--warning">...</label>

<!-- Size -->
<label class="toggle toggle--small">...</label>
<label class="toggle toggle--large">...</label>

<!-- Shape -->
<label class="toggle toggle--square">...</label>
<label class="toggle toggle--icons">...</label>
```

## Why is it useful?

- **Accessible** — uses hidden checkbox for state, `focus-visible` for keyboard users
- **Animated** — smooth thumb slide and color transition
- **Multiple variants** — 4 colors, 3 sizes, 2 shapes
- **Disabled state** — supports disabled toggles with reduced opacity
- **Dark mode** — respects `prefers-color-scheme: dark`
- **Reduced motion** — transitions disabled when `prefers-reduced-motion` is active
- **Production-ready** — suitable for settings panels, feature flags, and forms
