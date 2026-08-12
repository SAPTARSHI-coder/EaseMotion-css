# Stock Indicator Component

1. **What does this do?** A pulsing "Only X left" urgency badge for e-commerce product pages, with warning and critical color variants.

2. **How is it used?**
```html
   <!-- Warning (low stock) -->
   <span class="stock-indicator">
     <span class="stock-dot"></span>
     Only 5 left
   </span>

   <!-- Critical (very low stock) -->
   <span class="stock-indicator stock-critical">
     <span class="stock-dot"></span>
     Only 1 left!
   </span>
```

3. **Why is it useful?** Implements the common e-commerce urgency/scarcity UI pattern. The pulsing dot creates a gentle animation that draws attention without being distracting. Two variants — warning (orange) and critical (red) — cover the full range of low-stock scenarios.
