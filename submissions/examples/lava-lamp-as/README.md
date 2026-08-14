# Lava Lamp

### What does this do?

It shows a retro lava lamp. Five colored blobs rise and sink inside the glass at their own pace, squashing and stretching as they float, with a warm pool of lava settled at the bottom. A brass cap and base finish the lamp. Under reduced motion the blobs hold still partway up.

### How is it used?

```html
<div class="lamp">
  <span class="cap"></span>
  <div class="glass"><span class="blob bl1"></span>...<span class="pool"></span></div>
  <span class="base"></span>
</div>
```

The glass is a `clip-path` trapezoid that hides anything outside it, so the blobs stay contained. Each blob runs the `lava` animation, which drives its `bottom` from the base to the top and back while scaling it wider then taller, mimicking wax blobs. Different durations and delays keep the blobs out of sync.

### Why is it useful?

Retro, chill, and ambient interfaces use a lava lamp. This builds a bubbling lava lamp with pure CSS shapes and animation, no images, with a reduced motion fallback.
