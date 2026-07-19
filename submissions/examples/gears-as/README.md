# Gears

### What does this do?

It shows two interlocking gears that turn in opposite directions. A twelve tooth gear and a nine tooth gear mesh at their contact point, each an inline SVG cog with a center hole, rotating about its own axis. Under reduced motion they hold still.

### How is it used?

```html
<g class="gear g1"><path class="cog c1" d="..." /><circle class="hole" r="14" /></g>
<g class="gear g2"><path class="cog c2" d="..." /><circle class="hole" r="11" /></g>
```

Each gear group rotates with `transform-box: view-box` and a `transform-origin` at its center in viewBox coordinates, so the cog spins in place. One turns clockwise and the other counter clockwise, and the tooth paths are placed so the gears mesh.

### Why is it useful?

Settings, processing, and mechanical themes use turning gears. This renders meshing cog wheels from inline SVG paths rotating with pure CSS, no images or script.
