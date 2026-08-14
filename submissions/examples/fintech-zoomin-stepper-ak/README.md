# CSS Zoom-In Stepper for Fintech Dashboard Layouts

## Description
Fixes #59434 — a pure CSS horizontal stepper with a zoom-in pop animation
on the active step, designed for fintech dashboard flows such as KYC,
onboarding, transfer wizards, and loan applications.

## Usage
```html
<div class="ease-stepper">
  <div class="ease-stepper__step ease-stepper__step--completed">
    <span class="ease-stepper__circle">✓</span>
    <span class="ease-stepper__label">Account Details</span>
  </div>
  <div class="ease-stepper__step ease-stepper__step--active">
    <span class="ease-stepper__circle">3</span>
    <span class="ease-stepper__label">Fund Transfer</span>
  </div>
  <div class="ease-stepper__step">
    <span class="ease-stepper__circle">4</span>
    <span class="ease-stepper__label">Confirmation</span>
  </div>
</div>
```

Add `ease-stepper__step--completed` for finished steps and
`ease-stepper__step--active` for the current step. Steps with neither
modifier render as upcoming/inactive.

## Custom Properties
Uses `--ease-color-primary` (falls back to `#2563eb`) for the active/
completed circle color, connector line, and label accent — consistent
with the framework's existing custom property convention.

## Features
- Pure CSS/HTML — no JavaScript required
- Zoom-in pop animation (`cubic-bezier` overshoot) on the active step's circle
- Connector line between steps that fills in as steps are completed
- Fully responsive — collapses to a vertical, left-aligned layout below 640px
- Dark mode support via `prefers-color-scheme: dark`
- Respects `prefers-reduced-motion: reduce` — disables the zoom-in animation

## Testing
Open `demo.html` in a browser and reload to see the active step's
zoom-in animation. Resize the window below 640px to check the vertical
responsive layout, and toggle your OS "reduce motion" setting to verify
the fallback.