# Zoom-In Checkout Tabs

Fixes #62454 — pure CSS zoom-in tabs for e-commerce checkout layouts (Shipping / Payment / Review), built with the radio-input tab pattern so no JavaScript is required.

## Features

- Tab underline zooms in from the center on hover and active/checked states, using a bounce easing curve
- Panel content zooms in (scale + fade) when switching tabs
- Fully responsive: tabs stack vertically on small viewports
- Respects `prefers-reduced-motion: reduce` — disables all transforms/animations
- Uses EaseMotion CSS design tokens (`var(--ease-color-*)`, `var(--ease-space-*)`, `var(--ease-radius-*)`, `var(--ease-shadow-*)`, `var(--ease-ease-bounce)`) with fallbacks

## Usage

```html
<div class="zoom-tabs">
  <input type="radio" name="zoom-checkout-tab" id="zoom-tab-shipping" class="zoom-tabs__input" checked />
  <input type="radio" name="zoom-checkout-tab" id="zoom-tab-payment" class="zoom-tabs__input" />
  <input type="radio" name="zoom-checkout-tab" id="zoom-tab-review" class="zoom-tabs__input" />

  <nav class="zoom-tabs__nav">
    <label class="zoom-tabs__label" for="zoom-tab-shipping">1. Shipping</label>
    <label class="zoom-tabs__label" for="zoom-tab-payment">2. Payment</label>
    <label class="zoom-tabs__label" for="zoom-tab-review">3. Review</label>
  </nav>

  <div class="zoom-tabs__panels">
    <section class="zoom-tabs__panel" id="zoom-panel-shipping">...</section>
    <section class="zoom-tabs__panel" id="zoom-panel-payment">...</section>
    <section class="zoom-tabs__panel" id="zoom-panel-review">...</section>
  </div>
</div>
```

Each panel's `id` must be `zoom-panel-<name>` matching its tab's `id="zoom-tab-<name>"` for the CSS sibling selectors to show/hide the correct panel.

## Customization

Override these custom properties to restyle:

- `--ease-color-primary` — underline and active tab text color
- `--ease-ease-bounce` — underline zoom easing curve
- `--ease-space-3`, `--ease-space-4`, `--ease-space-6` — spacing
- `--ease-radius-lg` — panel corner rounding

## How to view

Open `demo.html` directly in a browser — no build step or server required.

## Note

This is a distinct zoom-based variant of the checkout tabs pattern (issue #62454), separate from the scale-hover variant (#62455) — the interaction and easing curve differ: this uses a bouncy underline zoom + panel scale-in, rather than a whole-tab hover scale.
