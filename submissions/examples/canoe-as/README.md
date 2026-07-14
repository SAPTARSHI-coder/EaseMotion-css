# Canoe

### What does this do?

It shows a canoe crossing a still lake at sunset. The boat rocks on the water, the paddler leans into each stroke, the paddle sweeps through the water in time with them, wake rings spread out behind, and the moon's reflection shimmers. Under reduced motion everything holds still.

### How is it used?

```html
<div class="boat">
  <span class="hull2"></span>
  <div class="rower">...</div>
  <div class="paddleCn">
    <span class="shaftCn"></span>
    <span class="bladeCn"></span>
  </div>
</div>
```

The paddler and the paddle run the same 2.4 second clock, so the body leans exactly when the blade digs in: two separate elements, one rhythm, no JavaScript. The paddle pivots from `transform-origin: 12% 8%`, the point near the top of the shaft where the upper hand would grip, so the blade travels a long arc through the water while the grip barely moves, which is what a real stroke looks like. The hull's curve is a single asymmetric `border-radius` that rounds only the bottom corners.

### Why is it useful?

Outdoor, lake, and calm adventure themes use a canoe. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
