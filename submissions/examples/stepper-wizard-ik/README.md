# Stepper / Wizard Steps Component

## 1. What does this component do?

Provides an animated multi-step progress indicator (`.ease-stepper`) for wizard workflows, checkout flows, and multi-stage forms. Supports three distinct step states:
- `.is-completed`: Finished step with green checkmark indicator
- `.is-active`: Current active step with glowing pulse animation
- Upcoming step: Pending default state

## 2. How is it used?

```html
<div class="ease-stepper">
  <div class="ease-stepper-track">
    <div class="ease-stepper-progress" style="width: 33%"></div>
  </div>

  <div class="ease-step is-completed">
    <div class="ease-step-circle">✓</div>
    <div class="ease-step-label">Account</div>
  </div>

  <div class="ease-step is-active">
    <div class="ease-step-circle">2</div>
    <div class="ease-step-label">Personal</div>
  </div>

  <div class="ease-step">
    <div class="ease-step-circle">3</div>
    <div class="ease-step-label">Payment</div>
  </div>
</div>
```

## 3. Why does it fit EaseMotion CSS?

Complements existing progress bar utilities with a dedicated step-by-step wizard component, enhancing multi-stage form UX through smooth state transitions and active step pulse keyframes.

## 4. Demo Instructions

Open `demo.html` in any web browser and use **Next Step →** and **← Previous** to test interactive step state transitions.
