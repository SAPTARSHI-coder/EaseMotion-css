# ease-price-toggle

Provides a reusable animated CSS switch to toggle between monthly and yearly pricing plans.

## Usage

```html
<div class="ease-pricing-container">
  <div class="pricing-header">
    <span>Monthly</span>
    <label class="ease-price-toggle" aria-label="Toggle pricing plan">
      <input type="checkbox" class="ease-price-toggle-input" />
      <span class="ease-price-toggle-slider"></span>
    </label>
    <span>
      Yearly
      <span class="ease-price-badge">Save 20%</span>
    </span>
  </div>

  <div class="ease-price-display">
    <div class="ease-price-monthly">$29/mo</div>
    <div class="ease-price-yearly">$290/yr</div>
  </div>
</div>
```

### Modifiers

- `.ease-price-toggle-compact`: Render a smaller variant of the switch.
- `.ease-price-toggle-large`: Render a larger variant of the switch.

### Customization

Customize properties using CSS variables (e.g. locally scoped to `.ease-pricing-container` or `.ease-price-toggle`):

- `--ease-price-toggle-track-off`: Background color when unchecked (default `#cbd5e1`).
- `--ease-price-toggle-track-on`: Background color when checked (default `#3b82f6`).
- `--ease-price-toggle-knob`: Knob color (default `#ffffff`).
- `--ease-price-toggle-speed`: Animation duration (default `0.3s`).
- `--ease-price-toggle-badge-bg`: Badge background color (default `#22c55e`).
- `--ease-price-toggle-badge-color`: Badge text color (default `#ffffff`).

## Why is it useful?

It provides a pure-CSS, accessible, and customizable pricing toggle that handles complex behaviors like price cross-fading and savings badge reveals without requiring JavaScript, perfectly fitting EaseMotion's animation-first and zero-dependency philosophy.
