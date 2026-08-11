# Spin Orbit Animation

## What does this do?

It creates a CSS orbital animation system where child elements smoothly revolve around a static central core.

## How is it used?

Wrap the core and satellite nodes inside a parent container with the `orbit-center-uj` class, and apply `orbit-satellite-uj` to the rotating nodes:

```html
<div class="orbit-center-uj">
  <!-- Central static element -->
  <div class="core-element">Core</div>

  <!-- Orbiting element -->
  <div class="orbit-satellite-uj" style="--orbit-radius: 80px; --orbit-duration: 6s;">
    <div class="satellite"></div>
  </div>
</div>
```

Configure parameters using CSS variables:
- `--orbit-radius`: Orbital translation radius (defaults to `60px`).
- `--orbit-duration`: Duration of a full orbit rotation (defaults to `6s`).
- `--orbit-delay`: Animation delay offsets for staggering multiple satellites.

## Why is this useful?

This orbit animation is ideal for interactive loaders, product features showcases, and animated headers. Bound completely to compositor-friendly transformations (`rotate` and `translateX`), it runs efficiently on the GPU without triggering repaint cycles or layout recalculations. It halts all orbital movement when users request reduced motion.
