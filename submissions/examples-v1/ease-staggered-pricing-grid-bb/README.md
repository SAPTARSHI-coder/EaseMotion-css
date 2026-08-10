# Staggered Entrance Pricing Grid

A set of premium SaaS pricing cards featuring staggered entrance animations.

## What does this do?
It builds standard landing page pricing grids where individual plan items fade and slide up sequentially on load, followed by elastic hover shifts.

## How is it used?
Configure standard columns with delay multipliers and layout wrapper styles:

```html
<section class="pricing-grid">
  <div class="pricing-card" style="--delay: 1;" tabindex="0">
    <!-- Card Details -->
  </div>
</section>
```

## Why is it useful?
It structures SaaS marketing pages, leveraging CSS animations and staggered delays to present information dynamically on page entry.
