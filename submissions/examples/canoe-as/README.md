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

The paddler and the paddle run the same 2.4 second clock, so the body leans exactly when the blade digs in: two separate elements, one rhythm, no JavaScript. The shaft and blade carry no transforms of their own: they are rotated together by their wrapper, pivoted at `transform-origin: 50% 8%` near the top of the shaft where the upper hand grips. That keeps the two parts rigidly joined, so the blade travels a long arc into the water while the grip barely moves, which is what a real stroke looks like. The hull's curve is a single asymmetric `border-radius` that rounds only the bottom corners.

### Why is it useful?

Outdoor, lake, and calm adventure themes use a canoe. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
