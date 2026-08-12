# Progress Steps

A multi-step checkout wizard with a connecting progress line that fills in as you advance, popping checkmarks on completed steps.

## How is it used?

Mark the current step with the container's `data-active` attribute and add `.active` / `.done` to each `.step`:

```html
<div class="stepper" id="stepper" data-active="2">
  <div class="step done"><span class="step-num">1</span></div>
  <span class="step-line"></span>
  <div class="step active"><span class="step-num">2</span></div>
</div>
```

The `.step-line::before` gradients scale in based on `data-active`, `.step.done` swaps the number for a springy ✓, and the active panel fades in.

## Why is it useful?

Steppers guide users through checkout and onboarding flows. This component demonstrates a tidy declarative pattern — the entire progress state is expressed by one attribute and two classes, with the connecting line animating via `scaleX` on `::before`, a natural fit for EaseMotion's class-driven animation philosophy.
