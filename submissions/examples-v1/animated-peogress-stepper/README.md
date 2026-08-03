# Animated Progress Stepper Component

A responsive, pure CSS/HTML multi-step progress stepper with animated active-step highlighting and a filling connector line. No JavaScript required.

## Features

- 🧭 Horizontal stepper that stacks vertically on small screens (≤520px)
- ✨ Animated pulsing ring on the active step
- ✅ Completed steps animate a checkmark pop-in and fill the connector line to the next step
- 📱 Fully responsive — no layout breakage at any width
- ♿ Respects `prefers-reduced-motion` for accessibility
- 🧩 Pure HTML + CSS — no JavaScript dependencies

## Usage

Include `style.css`, then build an ordered list where each step is a `<li class="stepper-step">`. Add a state class to control its appearance:

```html
<ol class="stepper">
  <li class="stepper-step is-complete">
    <div class="stepper-circle">
      <span class="stepper-number">1</span>
      <span class="stepper-check">✓</span>
    </div>
    <span class="stepper-label">Cart</span>
  </li>

  <li class="stepper-step is-active">
    <div class="stepper-circle">
      <span class="stepper-number">2</span>
      <span class="stepper-check">✓</span>
    </div>
    <span class="stepper-label">Shipping</span>
  </li>

  <li class="stepper-step">
    <div class="stepper-circle">
      <span class="stepper-number">3</span>
      <span class="stepper-check">✓</span>
    </div>
    <span class="stepper-label">Payment</span>
  </li>
</ol>