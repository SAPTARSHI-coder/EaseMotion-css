# Animated Step Wizard / Progress Stepper

## What does this do?
This adds a horizontal progress stepper component with four states: **default** (upcoming), **active** (current step — pulsing ring animation), **completed** (filled circle with ✓ checkmark), and the connector lines between steps that fill with color as steps are completed.

## How is it used?
Create an `<ol class="stepper">` with `<li class="step">` items. Add `.active` to the current step and `.completed` to all previous steps. Each `<li>` should contain a `.step-circle` and a `.step-label`.

Example:
```html
<ol class="stepper">
  <li class="step completed">
    <div class="step-circle">✓</div>
    <span class="step-label">Cart</span>
  </li>
  <li class="step active">
    <div class="step-circle" aria-current="step">2</div>
    <span class="step-label">Payment</span>
  </li>
  <li class="step">
    <div class="step-circle">3</div>
    <span class="step-label">Confirm</span>
  </li>
</ol>
```

## Why is it useful?
- Provides a clear, at-a-glance visual map of progress through multi-step flows like checkout, onboarding, or form wizards.
- The connector lines are drawn using `::after` pseudo-elements — no extra markup needed.
- The active step's pulsing ring uses `@keyframes step-pulse` to draw attention without being distracting.
- Includes `aria-current="step"` for screen reader accessibility and a `prefers-reduced-motion` override.
