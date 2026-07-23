# Fireplace

### What does this do?

It shows a lit brick fireplace. Three stacked flames flicker at different speeds inside the firebox, logs sit in the grate, sparks rise and fade, and the room glow on the floor breathes in time with the fire. Under reduced motion the fire holds still.

### How is it used?

```html
<div class="hearth">
  <span class="mantel"></span>
  <div class="firebox">
    <span class="flame fo"></span>
    <span class="flame fm"></span>
    <span class="flame fi"></span>
  </div>
  <span class="bricks"></span>
</div>
```

The brickwork is two `repeating-linear-gradient`s crossed over the hearth, so the whole wall costs one property instead of dozens of elements. The fire is three teardrop flames layered largest to smallest, each with its own flicker duration and one running in reverse, so they never line up and the flame never looks like it is pulsing on a single beat. Each flame scales from `transform-origin: 50% 100%` so it stays rooted in the logs while the tip whips.

### Why is it useful?

Cozy, winter, and home themes use a hearth. This builds a burning fireplace with pure CSS gradients and animation, no images, with a reduced motion fallback.
