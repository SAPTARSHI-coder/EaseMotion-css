# Animated Steps / Process Flow

### What does this do?

It shows a horizontal multi-step progress indicator where completed steps are highlighted, the current step pulses, future steps are dimmed, and the connecting lines fill in as steps complete.

### How is it used?

```html
<div class="process-flow" role="list" aria-label="Checkout progress">
  <div class="step completed" role="listitem">
    <div class="step-circle" aria-hidden="true">1</div>
    <span class="step-label">Cart</span>
  </div>
  <div class="step-line completed" aria-hidden="true"></div>
  <div class="step active" role="listitem" aria-current="step">
    <div class="step-circle" aria-hidden="true">2</div>
    <span class="step-label">Checkout</span>
  </div>
  <div class="step-line" aria-hidden="true"></div>
  <div class="step" role="listitem">
    <div class="step-circle" aria-hidden="true">3</div>
    <span class="step-label">Payment</span>
  </div>
</div>
```

Add `completed` to a step and the line before the next step to mark progress, and `active` with `aria-current="step"` to mark the current step.

### Why is it useful?

Step indicators are essential for checkout flows, onboarding wizards, and multi-step forms. This implementation adds a pulsing current step, a progressive line fill, and a staggered reveal, all in CSS with readable class names. It stays accessible with list semantics and `aria-current`, and all motion is disabled under `prefers-reduced-motion: reduce`, matching the animation-first philosophy of EaseMotion CSS.
