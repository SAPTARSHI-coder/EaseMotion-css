# Animated Checkout Stepper

1. **What does this do?**  
Adds an interactive multi-step checkout progress timeline with animated progress bar fill and pulsing step status indicators.

2. **How is it used?**  
Apply the `.checkout-stepper` container class around a list of step nodes with `.step-active` and `.step-completed` modifiers:
```html
<div class="checkout-stepper">
  <ol class="stepper-list">
    <li class="step-item step-completed">...</li>
    <li class="step-item step-active">...</li>
    <li class="step-item step-upcoming">...</li>
  </ol>
</div>
```

3. **Why is it useful?**  
It provides a clear visual progress tracker for e-commerce checkouts, onboarding wizards, and multi-step forms while supporting `prefers-reduced-motion` accessibility.
