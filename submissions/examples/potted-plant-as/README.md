# Potted Plant

### What does this do?

It shows a leafy plant in a terracotta pot. Five leaves fan out at different angles and heights and sway gently in a breeze on staggered timings, each with a center vein. Under reduced motion the leaves hold still.

### How is it used?

```html
<div class="foliage"><span class="leaf lf1"></span>...</div>
<div class="pot"><span class="rim"></span></div>
```

Each leaf is a teardrop shape rotated by its `--r` angle from a shared bottom origin, with a vein drawn by `::after`. The `sway` animation rocks each leaf a few degrees around its base, and the pot is a `clip-path` trapezoid with a rim.

### Why is it useful?

Nature themes, empty states, and cozy interfaces use a plant. This builds a swaying potted plant with pure CSS shapes and animation, no images, with a reduced motion fallback.
