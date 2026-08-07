# Rocking Horse

### What does this do?

It shows a wooden rocking horse tipping back and forth in a nursery. The whole horse rocks on its curved skid, its head nods with the motion, its tail swishes, and it blinks. Hovering or focusing it rocks twice as fast, as if a child climbed on. Under reduced motion it stands still.

### How is it used?

```html
<div class="rocker" tabindex="0">
  <span class="skid"></span>
  <span class="bodyR"></span>
  <div class="headR"><span class="skullR"></span></div>
</div>
```

The whole horse rocks from `transform-origin: 50% 96%`, a point near the bottom of the curved skid rather than the centre of the horse. That is the entire trick: pivoting low makes the body swing through an arc that traces the curve of the rocker, so it reads as rolling on the skid instead of spinning in place. The skid itself is a bordered box with its top border removed, which leaves the bare curve. The head nods on its own pivot at the neck and runs the same three second clock as the rock, so it lags into the motion rather than moving independently.

### Why is it useful?

Nursery, toy, and nostalgic themes use a rocking horse. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
