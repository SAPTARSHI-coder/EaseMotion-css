# Mars Rover

### What does this do?

It shows a rover crossing the Martian surface. The six spoked wheels turn, the chassis rocks over the terrain, the camera eyes glow as they scan, the antenna sends a radio ping that expands and fades, the sample arm sweeps down and back, and dust puffs kick up behind the wheels. Under reduced motion the rover parks.

### How is it used?

```html
<div class="rover">
  <span class="panel"></span>
  <span class="body"></span>
  <span class="wheelr wa"></span>
  <span class="wheelr wb"></span>
</div>
```

Each wheel is a single element: a `repeating-conic-gradient` paints the spokes, a thick `border` gives the tyre, and `border-radius: 50%` makes it round, so a spoked wheel costs one element instead of eight. The solar panel is a `repeating-linear-gradient` of cell strips. The radio ping is one ring that scales out from the antenna while fading, so a broadcast reads without any extra markup.

### Why is it useful?

Space, science, and exploration themes use a rover. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
