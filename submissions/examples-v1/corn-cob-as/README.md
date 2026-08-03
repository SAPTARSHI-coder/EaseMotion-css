# Corn Cob

### What does this do?

It shows a buttered cob of corn on a table. It leans gently, the silk threads wave, butter slides down the kernels, steam curls off it, and light glints along the cob. Hovering or focusing it peels the husks wide open. Under reduced motion it stands still and the husks stay closed.

### How is it used?

```html
<div class="corn" tabindex="0">
  <span class="cob"></span>
  <span class="kernels"></span>
  <span class="husk hkl"></span>
</div>
```

The kernels are two crossed `repeating-linear-gradient`s laid over a cob shaped element. Because both are clipped by the same `border-radius`, the grid curves with the cob and stops cleanly at its rounded ends, so several hundred kernels cost one element and one property. Each husk keeps its own lean in a `--hk` custom property, and the peel multiplies it with `calc(var(--hk) * 3)`, so both leaves swing further out in the direction they already point instead of snapping to the same angle.

### Why is it useful?

Food, harvest, and summer cookout themes use corn. This builds a cob with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
