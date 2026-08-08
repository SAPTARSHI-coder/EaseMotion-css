# Coffee Cup

### What does this do?

It shows a cup of coffee on a saucer with three wisps of steam rising and fading above it. The cup has a glossy body, a handle, and a dark brew surface. Under reduced motion the steam holds still.

### How is it used?

```html
<div class="coffee">
  <div class="steam"><span class="wisp w1"></span>...</div>
  <div class="cup"><span class="brew"></span><span class="handle"></span></div>
  <span class="saucer"></span>
</div>
```

The cup is a rounded box with a gradient for the ceramic and a radial `brew` ellipse on top. Each `wisp` of steam rises and widens with the `rise` keyframes on a staggered delay, and a ring `handle` and an ellipse `saucer` complete it.

### Why is it useful?

Cafe sites, loading states, and cozy themes use a coffee cup. This builds a steaming cup with pure CSS shapes and animation, no images, with a reduced motion fallback.
