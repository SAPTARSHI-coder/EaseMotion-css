# Animated Step Progress Bar

Closes #56641

### What does this do?
A step progress tracker component showing completed, active, and upcoming steps, with animated connecting lines and a pulsing indicator on the active step.

### How is it used?
```html
<div class="step-progress">
  <div class="step completed">
    <div class="step-circle">1</div>
    <span class="step-label">Cart</span>
  </div>
  <div class="step-line completed"></div>

  <div class="step active">
    <div class="step-circle">2</div>
    <span class="step-label">Shipping</span>
  </div>
  <div class="step-line"></div>

  <div class="step">
    <div class="step-circle">3</div>
    <span class="step-label">Payment</span>
  </div>
</div>
```

### Why is it useful?
It's a common checkout/onboarding UI pattern built with pure CSS transitions and keyframe animation — no JS required. The pulsing active-step animation and animated connecting lines give clear progress feedback while staying lightweight, and it respects `prefers-reduced-motion` for accessibility.
