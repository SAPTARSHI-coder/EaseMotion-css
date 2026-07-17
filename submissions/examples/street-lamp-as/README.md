# Street Lamp

### What does this do?

It shows a street lamp glowing at night. The lantern hums with a faint pulse, a cone of light falls to the pavement and pools there, and two moths circle the lamp on their own orbits. Under reduced motion the light holds steady and the moths stop.

### How is it used?

```html
<div class="lamp">
  <div class="lantern"><span class="glassL"></span><span class="bulb"></span></div>
  <span class="beam"></span>
  <span class="post"></span>
  <span class="moth mo1"></span>
</div>
```

The lantern and its light cone are both `clip-path` trapezoids, so the beam widens naturally from the glass to the ground. Each moth stores its orbit radius in a `--r` custom property and runs the shared `flit` animation, which rotates it around the lamp and counter-rotates it so it never spins on its own axis.

### Why is it useful?

Night, city, and cozy or atmospheric scenes use a street lamp. This builds a glowing street lamp with pure CSS shapes and animation, no images, with a reduced motion fallback.
