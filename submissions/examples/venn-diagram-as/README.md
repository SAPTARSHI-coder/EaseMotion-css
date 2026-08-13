# Venn Diagram

### What does this do?

It shows a three circle Venn diagram. The circles overlap in the classic arrangement and blend where they meet, so the pairwise and central intersections show as brighter regions. Labels name each set and the center sweet spot.

### How is it used?

```html
<div class="vn-stage">
  <span class="circle a"></span>
  <span class="circle b"></span>
  <span class="circle c"></span>
  <span class="label center">Unicorn</span>
</div>
```

Each `circle` is a translucent disc positioned to overlap the others, with `mix-blend-mode: screen` so overlapping areas add up to lighter colors on the dark stage. Labels sit above the circles with a higher `z-index`.

### Why is it useful?

Venn diagrams explain overlap between sets, common in skills, audiences, and feature comparisons. This builds one purely with CSS circles and blend modes, with no images or SVG.
