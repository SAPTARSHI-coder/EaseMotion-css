# Mongoose

### What does this do?

It shows a mongoose squaring up to a cobra. The mongoose creeps forward and lunges, its tail bristles, its legs step; opposite it the cobra sways, flares its hood and flicks its tongue. Dust puffs up between them. Under reduced motion both animals hold their ground.

### How is it used?

```html
<div class="mong">
  <span class="bodyMg"></span>
  <div class="headMg"><span class="snoutMg"></span></div>
</div>
<div class="cobra">
  <span class="hood"></span>
  <span class="headSn"></span>
</div>
```

Both animals run on the same 2.6 second clock, which is what makes this read as a standoff rather than two things happening near each other: the mongoose creeps in exactly as the cobra sways, and the hood flares on the same beat. The hood itself only needs `scaleX`, since widening a rounded shape from its centre is enough to read as a snake spreading. The tail bristles by combining a rotation with a `scaleY` stretch, so it thickens as it swings rather than just waving.

### Why is it useful?

Wildlife, standoff, and tension themes use a mongoose and cobra. This builds both with pure CSS gradients and animation, no images, with a reduced motion fallback.
