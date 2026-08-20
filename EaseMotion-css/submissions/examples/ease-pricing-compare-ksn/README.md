# Pricing Comparison Grid with Animated Billing Toggle (ksn)

## What does this do?

A CSS-only, responsive pricing comparison grid with an animated monthly/yearly billing toggle. Purely visual toggle using radio inputs, the `:has()` pseudo-class, and zero JavaScript.

## How is it used?

```html
<!-- The toggle uses standard radio inputs with a styled track -->
<div class="pricing-toggle-wrapper" role="radiogroup" aria-label="Billing cycle">
  <input type="radio" name="billing" id="billing-monthly" value="monthly" checked>
  <label for="billing-monthly">Monthly</label>

  <input type="radio" name="billing" id="billing-yearly" value="yearly">
  <label for="billing-yearly">Yearly</label>

  <div class="pricing-toggle-track">
    <span class="pricing-toggle-thumb"></span>
  </div>
</div>

<!-- Prices switch automatically using dual spans + :has() -->
<span class="pricing-amount">
  <span class="price-monthly">29</span>
  <span class="price-yearly">23</span>
</span>
```

## Why is it useful?

EaseMotion CSS aims to make common UI patterns expressible as simple CSS classes. Pricing comparison grids with billing toggles are nearly universal on SaaS websites but typically require JavaScript. This submission demonstrates that `:has()` selectors can eliminate that dependency entirely — the toggle is a radio group, the prices switch via `display: none` controlled by `body:has(#billing-yearly:checked)`, and the sliding thumb uses a CSS transition on a positioned element.

It covers all major accessibility concerns: keyboard navigation via radio inputs, `:focus-visible` rings, `prefers-reduced-motion`, `prefers-color-scheme`, `prefers-contrast`, `forced-colors`, and print styles — all without a single line of JavaScript.
