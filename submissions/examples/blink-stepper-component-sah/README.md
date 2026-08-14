# Blink Stepper Multi-Step Component (`#54690`)

## What does this do?
Creates a clean wizard progress indicator featuring active node badges that blink with rhythmic concentric glow rings.

## How is it used?
Configure step icon nodes inside an `ease-stepper-blink` parent block and apply `blink-node` to active steps:
```html
<div class="ease-stepper-blink">
  <div class="step-item active">
    <div class="step-icon blink-node">2</div>
    <span class="step-label active">In Progress</span>
  </div>
</div>
```

## Why is it useful?
Solves issue #54690 by giving users clear procedural milestones during complex multi-stage account or checkout sequences.