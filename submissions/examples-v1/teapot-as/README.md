# Teapot

### What does this do?

It shows a rounded ceramic teapot with a lid, spout, and handle, sitting on a tray. Wisps of steam rise and spread from the top on staggered timings, so the pot looks freshly brewed. Under reduced motion the steam stays hidden.

### How is it used?

```html
<div class="teapot">
  <span class="lid"></span>
  <span class="body"></span>
  <span class="spout"></span>
  <span class="handle"></span>
</div>
```

The body is a rounded gradient shape with a soft inner shadow and a highlight, the spout and handle are separate shapes tucked behind it, and the lid sits on top with a knob. Each `steam` wisp runs the `rise` animation, floating upward while widening and fading, with different delays so the steam never looks repetitive.

### Why is it useful?

Cafe, cozy, and kitchen themes use a teapot. This builds a steaming teapot with pure CSS shapes and animation, no images, with a reduced motion fallback.
