# Stepper/Wizard Component

## What does this do?
Multi-step progress indicator for forms, onboarding, and checkout flows. Horizontal and vertical layouts with completed (checkmark), active (highlighted), and pending (dimmed) states.

## How is it used?
```html
<nav class="ease-stepper ease-stepper-horizontal" role="navigation">
  <div class="ease-step ease-step-completed">
    <div class="ease-step-indicator">&#10003;</div>
    <div class="ease-step-label">Cart</div>
  </div>
  <div class="ease-step ease-step-active" aria-current="step">
    <div class="ease-step-indicator">2</div>
    <div class="ease-step-label">Payment</div>
  </div>
  <div class="ease-step ease-step-pending">
    <div class="ease-step-indicator">3</div>
    <div class="ease-step-label">Confirm</div>
  </div>
</nav>
```

## Why is it useful?
Fills missing stepper/wizard component with horizontal/vertical layouts, connecting lines that fill on completion, animated transitions, ARIA navigation support, and dark mode.

Fixes #12452
