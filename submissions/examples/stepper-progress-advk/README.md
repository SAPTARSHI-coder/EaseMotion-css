# Stepper Progress example

A multi-step progress bar where each connecting line is coloured from the step's **own** done state, so no sibling inspection is needed (a step is only marked done once every step before it is too). Includes forced-colors and dark-mode support.

## What it does
Each step's outgoing connector uses `var(--ease-step-done)` only when that step carries `.is-done`. Because done-ness is monotonic, colouring the connector from the step itself is correct and simpler than inspecting siblings.

## Files
- `demo.html` — copy-paste markup
- `style.css` — pure CSS, forced-colors + dark-mode support
- `README.md` — this guide

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="stepper-progress-advk" role="progressbar" aria-valuenow="2" aria-valuemin="1" aria-valuemax="3" aria-label="Checkout progress">
  <ol class="stepper-progress-advk__steps">
    <li class="stepper-progress-advk__step is-done" aria-current="step"><span class="stepper-progress-advk__dot" aria-hidden="true">1</span><span class="stepper-progress-advk__label">Cart</span></li>
    <li class="stepper-progress-advk__step is-done" aria-current="step"><span class="stepper-progress-advk__dot" aria-hidden="true">2</span><span class="stepper-progress-advk__label">Address</span></li>
    <li class="stepper-progress-advk__step"><span class="stepper-progress-advk__dot" aria-hidden="true">3</span><span class="stepper-progress-advk__label">Pay</span></li>
  </ol>
</div>
```

## Accessibility
- `role="progressbar"` with `aria-valuenow/min/max` on the container.
- `aria-current="step"` on each completed/active step.
- `@media (forced-colors: active)` swaps to system colours.
- `@media (prefers-color-scheme: light)` for dark-mode support.

Closes #75548
