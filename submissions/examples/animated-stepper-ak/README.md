# Animated Stepper / Step Indicator

## What does this do?
A CSS-only animated stepper/step indicator for multi-step forms, onboarding wizards, and checkout flows, with horizontal and vertical layout variants.

## How is it used?
```html
<div class="ease-stepper">
  <div class="ease-stepper__step ease-stepper__step--completed">
    <div class="ease-stepper__circle"></div>
    <span class="ease-stepper__label">Cart</span>
  </div>
  <div class="ease-stepper__connector ease-stepper__connector--filled"></div>
  <div class="ease-stepper__step ease-stepper__step--active">
    <div class="ease-stepper__circle" aria-current="step">2</div>
    <span class="ease-stepper__label">Shipping</span>
  </div>
  <div class="ease-stepper__connector"></div>
  <div class="ease-stepper__step ease-stepper__step--upcoming">
    <div class="ease-stepper__circle">3</div>
    <span class="ease-stepper__label">Payment</span>
  </div>
</div>
```
Add `.ease-stepper--vertical` to the wrapper for a vertical layout.

## Why is it useful?
Step indicators are a commonly needed pattern not currently in EaseMotion CSS. This provides completed/active/upcoming states, a scale-in checkmark for completed steps, a left-to-right connector fill animation, a pulsing ring on the active step, full accessibility (`aria-current="step"`, `aria-label` on each circle), and `prefers-reduced-motion` support — matching the component request in issue #55260.

## CSS Custom Properties
- `--ease-step-color-completed` (default: `#6366f1`)
- `--ease-step-color-active` (default: `#6366f1`)
- `--ease-step-color-upcoming` (default: `#d1d5db`)
- `--ease-step-size` — circle diameter (default: `2rem`)
- `--ease-step-connector-duration` (default: `0.4s`)
