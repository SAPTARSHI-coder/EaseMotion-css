# Pretzel

### What does this do?

It shows a warm salted pretzel resting on a napkin. It bobs and tilts slowly, the salt crystals glint one after another, and steam drifts up off it. Under reduced motion it holds still.

### How is it used?

```html
<div class="pretzel">
  <span class="ring"></span>
  <span class="arm al"></span>
  <span class="arm ar"></span>
  <span class="salt sa1"></span>
</div>
```

The pretzel is a ring plus a crossed pair of strands. The ring is one element with a thick `border` and `border-radius: 50%`, so its dough thickness is the border width. The two crossed arms are rounded bars, and each one keeps its own tilt in an `--ap` custom property rather than in a shared rule, so the pretzel twist stays intact. The salt does the same with `--sp`: the glint keyframe rebuilds `rotate(var(--sp))` on every step, so the shared animation never wipes each crystal's angle.

### Why is it useful?

Bakery, snack, and food menu themes use a pretzel. This builds one with pure CSS borders and gradients, no images, with a reduced motion fallback.
