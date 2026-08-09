# Thermostat

### What does this do?

It shows a round smart thermostat dial. A conic gradient ring fills to the target temperature, tick marks ring the dial, and the center face shows the mode, the large target temperature, and the current reading. A single `--frac` custom property sets how far the ring fills.

### How is it used?

```html
<div class="thermostat" style="--frac: 0.62;">
  <div class="ts-dial">
    <div class="ts-ticks"><span style="--i: 3;"></span></div>
    <div class="ts-face"><span class="ts-temp">72&deg;</span></div>
  </div>
</div>
```

The dial background is a `conic-gradient` that switches from the warm fill color to the track at `calc(var(--frac) * 360deg)`. Ticks place themselves with per tick `--i` rotations, and the inset face holds the readout.

### Why is it useful?

Smart home apps and climate controls show a thermostat dial. This builds one with a pure CSS conic ring and ticks driven by a single custom property, with no images or script.
