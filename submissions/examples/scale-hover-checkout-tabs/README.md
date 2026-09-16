# Scale-Hover Checkout Tabs

Fixes #62455 — pure CSS scale-hover tabs for e-commerce checkout layouts (Shipping / Payment / Review), built with the radio-input tab pattern so no JavaScript is required.

## Features

- Smooth scale transform on hover and active/checked states
- CSS keyframe fade-in when switching panels
- Fully responsive: tabs stack vertically on small viewports
- Respects `prefers-reduced-motion: reduce` — disables all transforms/animations
- Uses EaseMotion CSS design tokens (`var(--ease-color-*)`, `var(--ease-space-*)`, `var(--ease-radius-*)`, `var(--ease-shadow-*)`) with hex/px fallbacks

## Usage

```html
<div class="checkout-tabs">
  <input type="radio" name="checkout-tab" id="tab-shipping" class="checkout-tabs__input" checked />
  <input type="radio" name="checkout-tab" id="tab-payment" class="checkout-tabs__input" />
  <input type="radio" name="checkout-tab" id="tab-review" class="checkout-tabs__input" />

  <nav class="checkout-tabs__nav">
    <label class="checkout-tabs__label" for="tab-shipping">1. Shipping</label>
    <label class="checkout-tabs__label" for="tab-payment">2. Payment</label>
    <label class="checkout-tabs__label" for="tab-review">3. Review</label>
  </nav>

  <div class="checkout-tabs__panels">
    <section class="checkout-tabs__panel" id="panel-shipping">...</section>
    <section class="checkout-tabs__panel" id="panel-payment">...</section>
    <section class="checkout-tabs__panel" id="panel-review">...</section>
  </div>
</div>
```

Each panel's `id` must be `panel-<name>` matching its tab's `id="tab-<name>"` for the CSS sibling selectors to show/hide the correct panel.

## Customization

Override these custom properties to restyle:

- `--ease-color-primary` — active tab background/border
- `--ease-space-3`, `--ease-space-4`, `--ease-space-6` — spacing
- `--ease-radius-md`, `--ease-radius-lg` — corner rounding

## How to view

Open `demo.html` directly in a browser — no build step or server required.
