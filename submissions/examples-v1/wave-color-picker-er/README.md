# Wave Color Picker

A pure-CSS color picker component with animated wave ripple effects for product color selection. Designed for e-commerce interfaces. **No JavaScript required** — state is handled entirely via native `<input type="radio">` `:checked` pseudo-class.

## What does this do?

Provides a set of color swatches with animated wave ripple effects that play on selection. Users can click or keyboard-navigate to pick a color, and each selection triggers a smooth dual-wave animation radiating outward from the selected swatch.

## How is it used?

```html
<fieldset class="wave-picker" role="radiogroup" aria-label="Choose a color">
  <legend class="sr-only">Select a product color</legend>

  <label class="wave-picker__swatch" style="--swatch-color: #3b82f6">
    <input type="radio" name="color" value="blue" class="wave-picker__input" checked />
    <span class="wave-picker__face">
      <span class="wave-picker__wave"></span>
      <span class="wave-picker__wave wave-picker__wave--delay"></span>
    </span>
    <span class="wave-picker__ring"></span>
  </label>

  <!-- Add more swatches with different --swatch-color values -->
</fieldset>
```

Set the `--swatch-color` custom property on each label to define the color. The component handles hover, focus, and selected states entirely in CSS.

## Why is it useful?

Color pickers are among the most commonly needed UI elements in e-commerce. This wave variant provides a polished, reusable building block that contributors can drop directly into product pages. It fits EaseMotion CSS's animation-first philosophy by using `ease-kf-wave-ripple` keyframes and CSS custom properties for theming, while remaining fully accessible and responsive.

## Features

- Pure CSS — zero JavaScript dependencies
- Dual wave ripple animation on selection via `ease-kf-wave-ripple` keyframes
- Keyboard accessible (Tab + Space to select)
- `:focus-visible` outlines for keyboard users
- `prefers-reduced-motion` support — disables animations for accessibility
- Responsive sizing via CSS custom properties
- BEM naming convention with `wave-picker__` prefix
- E-commerce-inspired design pattern

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-wave-duration` | `0.6s` | Base transition duration |
| `--ease-wave-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Bounce easing for swatch scale |
| `--ease-wave-ripple-easing` | `cubic-bezier(0, 0, 0.2, 1)` | Smooth easing for wave ripple |
| `--ease-wave-swatch-size` | `2.75rem` | Swatch diameter |
| `--ease-wave-ring-size` | `1.85rem` | Selection ring diameter |
| `--ease-wave-gap` | `1rem` | Gap between swatches |

## Accessibility

- Uses native `<input type="radio">` for natively keyboard-operable selection
- Wrapped in `<label>` for large click targets
- `role="radiogroup"` and `<fieldset>`/`<legend>` for semantic structure
- `.sr-only` legend for screen reader context
- Visible `:focus-visible` outline on the hidden input
- `aria-live="polite"` on the preview region
- `prefers-reduced-motion: reduce` collapses all transitions and animations
