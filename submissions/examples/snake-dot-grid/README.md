# Snake Dot Grid

1. What does this do?
A dot snakes through a grid matrix, lighting cells with a decaying neon trail effect.

2. How is it used?
Apply `.snake-grid-matrix` to your grid container, with `.grid-cell` for individual dot nodes and `.snake-head` / `.snake-trail-1` through `.snake-trail-5` for the traveling snake effect:

```html
<div class="snake-grid-matrix">
  <div class="grid-cell snake-trail-2"></div>
  <div class="grid-cell snake-trail-1"></div>
  <div class="grid-cell snake-head"></div>
  <div class="grid-cell"></div>
</div>
```

3. Why is it useful?
It provides a mesmerizing, interactive CSS lighting effect perfect for loading visualizers, dynamic hero background accents, dashboard status heatmaps, and creative retro-futuristic UI components.
