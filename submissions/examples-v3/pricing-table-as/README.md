# Animated Pricing Table with Highlighted Tier

### What does this do?

It shows a responsive three tier pricing table where the middle tier is highlighted as the most popular, cards animate in with a staggered entrance, and each card lifts on hover.

### How is it used?

```html
<div class="pricing-table">
  <div class="pricing-card">
    <h3>Starter</h3>
    <div class="price"><span>$0</span> /mo</div>
    <ul>
      <li>1 project</li>
      <li>Community support</li>
    </ul>
    <a href="#" class="pricing-cta">Choose Starter</a>
  </div>
  <div class="pricing-card is-popular">
    <span class="pricing-badge">Most Popular</span>
    <h3>Pro</h3>
    <div class="price"><span>$12</span> /mo</div>
    <ul>
      <li>Unlimited projects</li>
      <li>Priority support</li>
    </ul>
    <a href="#" class="pricing-cta">Choose Pro</a>
  </div>
</div>
```

Add `is-popular` to the tier you want to feature, with a `pricing-badge` inside it. The grid uses `auto-fit` so it reflows to a single column on small screens.

### Why is it useful?

Pricing tables appear on nearly every product landing page. This implementation adds a staggered entrance, a hover lift, and a highlighted tier using only transforms and transitions with readable class names. Feature rows use a CSS check mark and the CTA has a visible focus ring, so it is fully self contained and keyboard friendly, with motion disabled under `prefers-reduced-motion: reduce`.
