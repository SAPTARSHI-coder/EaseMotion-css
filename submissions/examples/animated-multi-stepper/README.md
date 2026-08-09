# ease-stepper

An animated multi-step progress indicator (e.g. checkout/onboarding flow) where the connecting line fills in to match completed steps, and the active step pulses.

## What
Adds `.ease-stepper` (container) and `.ease-step` (individual step, with optional `.done` / `.active` modifiers).

## How
- The container takes `--completed` and `--total` custom properties to compute progress.
- A `::before` pseudo-element draws the full-width static connecting line; a `::after` pseudo-element draws the animated blue fill on top, animating its `width` from 0 to the computed completed-percentage via `@keyframes ease-stepper-fill`.
- The active step gets a soft pulsing box-shadow (`ease-step-pulse`) to draw attention to the current step.
- Completed steps get a solid filled circle with a checkmark; all computation is done via CSS `calc()` — no JS.
- Respects `prefers-reduced-motion` by skipping straight to final state.

## Why
Step/progress indicators are core to checkout flows, onboarding, and multi-page forms — a very common real-world need with no equivalent yet in EaseMotion CSS's component set.

## Files
- `demo.html` — a 4-step example with 2 completed, 1 active
- `style.css` — the `ease-stepper` / `ease-step` classes and keyframes
- `README.md` — this file

## Usage
\```html
<div class="ease-stepper" style="--completed:2;--total:4;">
  <div class="ease-step done"><span class="ease-step-circle">✓</span><span class="ease-step-label">Account</span></div>
  <div class="ease-step active"><span class="ease-step-circle">3</span><span class="ease-step-label">Payment</span></div>
  <div class="ease-step"><span class="ease-step-circle">4</span><span class="ease-step-label">Confirm</span></div>
</div>
\```