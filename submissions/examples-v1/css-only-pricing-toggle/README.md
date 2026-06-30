# Pure CSS Animated Pricing Toggle

This submission provides a highly practical, zero-JavaScript "Monthly vs Yearly" pricing toggle component for the EaseMotion framework.

## Features

- **Zero JavaScript:** Built entirely using the hidden checkbox hack (`input type="checkbox"`) and sibling combinators (`~`).
- **Smooth Value Swapping:** When toggled, the monthly and yearly prices gracefully fade and slide up/down instead of harshly jumping.
- **Animated Toggle Switch:** The custom pill-shaped switch smoothly translates the inner circle and updates text colors based on the active state.
- **Accessible:** Uses `.ease-sr-only` to hide the checkbox visually while remaining available to screen readers and keyboard navigation (includes a `:focus-visible` ring on the toggle switch).

## Usage

Wrap your pricing layout in an `.ease-pricing-section`. Place the hidden checkbox at the top, followed by the toggle label, and then your pricing grid.

```html
<div class="ease-pricing-section">
  <input
    type="checkbox"
    id="billing"
    class="ease-sr-only ease-pricing-trigger"
  />

  <label for="billing" class="ease-toggle-label">
    <div class="ease-toggle-slider"></div>
  </label>

  <div class="ease-pricing-grid">
    <div class="ease-pricing-card">
      <div class="ease-price-wrapper">
        <div class="ease-price-monthly">$29/mo</div>
        <div class="ease-price-yearly">$24/mo</div>
      </div>
    </div>
  </div>
</div>
```
