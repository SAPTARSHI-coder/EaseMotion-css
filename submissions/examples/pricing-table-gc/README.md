# Pricing Comparison Table

### What does this do?
A responsive Pricing Table component designed for SaaS landing pages, featuring plan highlighting, feature lists with checkmarks, and a staggered entrance animation.

### How is it used?
Apply the `.pricing-table` class to a container, and use `.pricing-plan` for individual plan cards. Use `.pricing-featured` to highlight the most popular plan.

```html
<div class="pricing-table">
  <div class="pricing-plan">
    <h3>Starter</h3>
    <div class="pricing-amount">$0</div>
    <ul class="pricing-features">
      <li>✓ Feature 1</li>
    </ul>
    <button class="pricing-cta">Get Started</button>
  </div>
  
  <div class="pricing-plan pricing-featured">
    <span class="pricing-badge">Featured</span>
    <h3>Pro</h3>
    <!-- ... -->
  </div>
</div>
```

### Why is it useful?
It provides a high-converting, accessible layout for product plans that integrates seamlessly with EaseMotion's motion principles. The staggered fade-in animation (`pricing-fade-in`) adds a premium feel to the page load, while the subtle hover effects on the featured card provide clear interactive feedback.
