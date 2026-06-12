# ease-pricing-card

A pricing plan card component for SaaS landing pages.

## Usage

```html
<!-- Basic card -->
<div class="ease-pricing-card">
  <div class="ease-pricing-plan">Basic</div>
  <div class="ease-pricing-price">
    <span class="ease-pricing-currency">$</span>
    <span class="ease-pricing-amount">9</span>
    <span class="ease-pricing-period">/month</span>
  </div>
  <ul class="ease-pricing-features">
    <li>5 Projects</li>
    <li>10 GB Storage</li>
  </ul>
  <button class="ease-pricing-btn">Get Started</button>
</div>

<!-- Featured/Popular variant -->
<div class="ease-pricing-card ease-pricing-card-featured">
  <span class="ease-pricing-badge">Most Popular</span>
  ...
</div>
```

## Classes

| Class | Description |
|---|---|
| `ease-pricing-card` | Base card wrapper |
| `ease-pricing-card-featured` | Highlighted popular variant |
| `ease-pricing-plan` | Plan name label |
| `ease-pricing-price` | Price wrapper |
| `ease-pricing-currency` | Currency symbol |
| `ease-pricing-amount` | Price number |
| `ease-pricing-period` | Billing period |
| `ease-pricing-features` | Feature list |
| `ease-pricing-badge` | Popular badge |
| `ease-pricing-btn` | CTA button |

## Features
- Hover lift animation
- Featured variant with primary border
- Respects prefers-reduced-motion
- Uses EaseMotion CSS design tokens