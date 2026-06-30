# ease-pricing-card — Pricing Table / Plan Comparison Component

## What does this do?

Adds a pricing table / plan comparison component with feature lists, checkmark icons, a popular/featured variant with accent border and badge, and a 3-column responsive grid layout with optional annual/monthly toggle.

## How is it used?

```html
<div class="ease-pricing-grid">
  <div class="ease-pricing-card">
    <div class="ease-pricing-header">
      <h3>Starter</h3>
    </div>
    <div class="ease-pricing-price">
      <span class="ease-pricing-amount">$19</span>
      <span class="ease-pricing-period">/month</span>
    </div>
    <ul class="ease-pricing-features">
      <li class="ease-pricing-feature">✓ 5 projects</li>
      <li class="ease-pricing-feature">✓ 10GB storage</li>
      <li class="ease-pricing-feature ease-pricing-feature-unavailable">
        ✗ API access
      </li>
    </ul>
    <a class="ease-pricing-cta" href="#">Get Started</a>
  </div>

  <div class="ease-pricing-card ease-pricing-popular">
    <span class="ease-pricing-badge">Most Popular</span>
    <!-- ... -->
  </div>
</div>
```

Open `demo.html` directly in a browser to see the full pricing grid with three plans.

## Why is it useful?

Pricing tables are essential for SaaS landing pages, product comparisons, and subscription sign-up flows. This component provides a standardized, responsive, and accessible pricing card grid that integrates with EaseMotion design tokens and supports popular/featured plan highlighting with accent styling.

Fixes #22848
