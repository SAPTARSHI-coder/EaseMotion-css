# CSS Shimmer Sweep Tabs - SaaS Showcase

### 1. What does this do?

This is a pure CSS interactive tab component built with a clean modern SaaS appearance. When a tab is selected, a subtle and smooth shimmer sweep animation slides across the active tab's accent background.

### 2. How is it used?

Include the `style.css` stylesheet in your HTML. Use the class name `.shimmer-sweep-tabs` for the parent container, and structure the elements using radio inputs and labels:

```html
<div class="shimmer-sweep-tabs">
  <input type="radio" id="tab-1" name="saas-tabs" class="tab-input" checked>
  <input type="radio" id="tab-2" name="saas-tabs" class="tab-input">
  <input type="radio" id="tab-3" name="saas-tabs" class="tab-input">

  <div class="tabs-header">
    <label for="tab-1" class="tab-label">Analytics</label>
    <label for="tab-2" class="tab-label">Campaigns</label>
    <label for="tab-3" class="tab-label">Integrations</label>
  </div>

  <div class="tab-panels">
    <div class="tab-panel" id="panel-1">...</div>
    <div class="tab-panel" id="panel-2">...</div>
    <div class="tab-panel" id="panel-3">...</div>
  </div>
</div>
```

Configure style overrides directly on the container via custom CSS variables:

```css
.shimmer-sweep-tabs {
  --tabs-duration: 0.6s;
  --tabs-easing: ease-in-out;
  --tabs-shimmer-color: rgba(255, 255, 255, 0.4);
  --tabs-shimmer-width: 50px;
  --tabs-scale: 1;
}
```

### 3. Why is it useful?

- **Zero JavaScript Overhead:** Relies entirely on optimized CSS keyframes and selectors.
- **Fluid & Responsive:** Layout handles auto-sizing headers out of the box.
- **Modern SaaS Aesthetics:** Offers a premium, clean look that highlights active elements with a sweeping light reflection.
- **Accessible-First:** Includes native keyboard arrow navigation, distinct focus states, and supports reduced-motion system preferences.
