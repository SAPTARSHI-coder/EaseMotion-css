# Modern pricing spotlight

## What does this do?

This submission provides a responsive three-tier pricing table with a visually highlighted recommended plan and subtle, accessible interaction states.

## How is it used?

Add a pricing grid and give each plan the `pricing-card-jc` class; add `pricing-card-featured-jc` to the plan that should be emphasized.

```html
<div class="pricing-grid-jc">
  <article class="pricing-card-jc">...</article>
  <article class="pricing-card-jc pricing-card-featured-jc">...</article>
</div>
```

## Why is it useful?

Pricing is a common decision point on product and portfolio sites. This standalone HTML and CSS example makes the primary choice clear while keeping every plan readable on smaller screens, keyboard accessible, and respectful of reduced-motion preferences.
