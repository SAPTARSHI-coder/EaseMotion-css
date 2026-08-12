# Responsive Stepper Fix

**Fixes:** Issue #1547 — Horizontal stepper overflows on mobile screens

## Problem
The original stepper used `width: 600px` (hardcoded), which caused
horizontal overflow and a broken scrollbar on viewports under 600px.

## Solution
This example provides a new responsive stepper component that:
- Uses `width: 100%` and `max-width: 100%` instead of fixed pixels
- Uses `flex: 1` and `min-width: 0` so nodes shrink proportionally
- Switches to a **vertical stacked layout** on screens ≤ 479px via media query
- Respects `prefers-reduced-motion` for accessibility

## Files
| File | Purpose |
|------|---------|
| `style.css` | Responsive stepper styles |
| `demo.html` | Live demo — resize below 480px to see vertical layout |
| `README.md` | This file |

## Usage
```html
<ol class="ease-stepper-fix">
  <li class="ease-stepper-fix__item ease-stepper-fix__item--completed">
    <div class="ease-stepper-fix__node">✓</div>
    <div class="ease-stepper-fix__track"></div>
  </li>
  <li class="ease-stepper-fix__item ease-stepper-fix__item--active">
    <div class="ease-stepper-fix__node">2</div>
    <div class="ease-stepper-fix__track"></div>
  </li>
  <li class="ease-stepper-fix__item">
    <div class="ease-stepper-fix__node">3</div>
  </li>
</ol>
```
