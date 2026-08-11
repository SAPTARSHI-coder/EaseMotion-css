# CSS-Only Responsive Pricing Table

A comparison pricing table with featured plan highlight that stacks on mobile.

## What does this do?

Provides a 3-column pricing comparison grid with a featured plan that scales up and has a purple border. On mobile, cards stack vertically with the featured plan first.

## How is it used?

```html
<div class="pricing-grid">
  <div class="pricing-card">
    <div class="pricing-card__name">Starter</div>
    <div class="pricing-card__description">Description text.</div>
    <div class="pricing-card__price">
      <span class="pricing-card__amount">$9</span>
      <span class="pricing-card__period">/month</span>
    </div>
    <ul class="pricing-card__features">
      <li class="pricing-card__feature">
        <svg class="pricing-card__check">...</svg>
        Feature 1
      </li>
    </ul>
    <a href="#" class="pricing-card__cta">Get Started</a>
  </div>

  <div class="pricing-card pricing-card--featured">
    <div class="pricing-card__badge">Most Popular</div>
    <!-- same structure -->
  </div>
</div>
```

## Why is it useful?

- **Responsive** — 3 columns on desktop, stacked on mobile
- **Featured plan** — scales up with border highlight and badge
- **Hover effects** — cards lift with enhanced shadow
- **Dark mode** — respects `prefers-color-scheme: dark`
- **Reduced motion** — transitions disabled when `prefers-reduced-motion` is active
- **Production-ready** — suitable for SaaS pricing pages and product comparison
