# Cosmic Dust Particle Float

## What does this do?

It creates an ambient background system composed of floating dust particles that drift and fade out continuously using pure CSS animations.

## How is it used?

Wrap the particle nodes in a `dust-container-uj` container, and apply the `dust-particle-uj` class to each particle:

```html
<div class="dust-container-uj">
  <!-- Basic Particle -->
  <div class="dust-particle-uj"></div>
  
  <!-- Staggered Custom Particle -->
  <div class="dust-particle-uj" style="
    --dust-size: 5px;
    --dust-color: #38bdf8;
    --dust-start-x: 75%;
    --dust-start-y: 10%;
    --dust-travel-x: -30px;
    --dust-travel-y: -200px;
    --dust-duration: 12s;
    --dust-delay: 2s;
  "></div>
</div>
```

Make sure the parent wrapper of `.dust-container-uj` has a defined width/height and positioning context.

## Why is this useful?

This utility provides a lightweight, GPU-optimized particle system without needing Canvas or JavaScript libraries. By animating compositor-friendly properties (`transform` translation/scale and `opacity`), it ensures high-performance ambient backgrounds that automatically halt animations when `prefers-reduced-motion` is enabled.
