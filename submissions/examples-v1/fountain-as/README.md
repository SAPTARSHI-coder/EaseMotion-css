# Fountain

### What does this do?

It shows a two-tier stone fountain running. A column of water pulses up from the nozzle and droplets arc outward in both directions before falling into the basin, where ripples spread across the pool. Under reduced motion the water stops and the droplets are hidden.

### How is it used?

```html
<div class="fountain">
  <span class="spray"></span>
  <span class="jet jt1"></span>
  <div class="upper"><span class="bowlwater"></span></div>
  <div class="basin"><span class="pool"></span></div>
</div>
```

Each droplet stores its landing offset in a `--jx` custom property, and the shared `arc` animation moves it to a fraction of that offset at the top of its flight before carrying it the rest of the way out and down. That two-stage path is what makes the water follow a parabola instead of a straight diagonal. Alternating the sign of `--jx` and staggering delays gives a continuous fan of water on both sides.

### Why is it useful?

Park, plaza, and calm or ambient themes use a fountain. This builds a running fountain with pure CSS shapes, custom properties, and animation, no images, with a reduced motion fallback.
