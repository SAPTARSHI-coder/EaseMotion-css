# ease-pricing-card — Pricing Card Component

A pricing card component with hover lift animation and a featured/highlighted variant.

## Classes

| Class | Description |
|---|---|
| `ease-pricing-card` | Base card with hover lift |
| `ease-pricing-card-featured` | Highlighted variant with primary glow |
| `ease-pricing-price` | Price slot wrapper |
| `ease-pricing-features` | Features list (`<ul>`) with checkmarks |

## Usage

```html
<div class="ease-pricing-card">
  <div class="ease-pricing-price">
    <span class="currency">$</span>
    <span class="amount">29</span>
    <span class="period">/ mo</span>
  </div>
  <ul class="ease-pricing-features">
    <li>Feature one</li>
    <li>Feature two</li>
  </ul>
</div>

<!-- Featured variant -->
<div class="ease-pricing-card ease-pricing-card-featured">
  ...
</div>
```

## Why it fits EaseMotion CSS

Pure CSS hover lift using `translateY` + `box-shadow` transitions. Uses design tokens for spacing, radius, shadow, and color. Respects `prefers-reduced-motion`.
