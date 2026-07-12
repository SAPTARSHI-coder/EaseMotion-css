# Responsive Stepper

## What does this do?
A multi-step progress stepper that displays horizontally on desktop
and collapses to a vertical layout on mobile screens (below 480px)
with no horizontal overflow.

## How is it used?
```html
<div class="stepper-container">
  <div class="stepper-step completed">
    <div class="stepper-node">✓</div>
    <span class="stepper-label">Step 1</span>
  </div>
  <div class="stepper-step active">
    <div class="stepper-node">2</div>
    <span class="stepper-label">Step 2</span>
  </div>
  <div class="stepper-step">
    <div class="stepper-node">3</div>
    <span class="stepper-label">Step 3</span>
  </div>
</div>
```

## Why is it useful?
Fixes the known overflow bug (#1547) where fixed `width: 600px` breaks
mobile viewports. Uses `width: 100%` + flexbox + a media query to switch
to vertical stacking at 480px — consistent with EaseMotion CSS's
mobile-first philosophy.