# Paper Crane

### What does this do?

It shows an origami crane hanging on a thread. It turns and rises on the air, its folded wings beat, and cherry petals drift past. Hovering or focusing it makes the crane bob faster, as if a breath of air caught it. Under reduced motion it hangs still.

### How is it used?

```html
<div class="crane" tabindex="0">
  <span class="bodyPc"></span>
  <span class="wingPc wpl"></span>
  <span class="headPc"></span>
</div>
```

Every part of the crane is a `clip-path` polygon, because origami is made of straight creases and sharp points, and no amount of `border-radius` produces a fold. The body is a diamond, each wing a triangle, the head a beak-shaped wedge. The wings beat with `scaleY` rather than rotation, each pivoting from the edge that meets the body, so they compress toward the fold line the way folded paper does instead of swinging like feathered wings. The centre crease is a `clip-path` two percent wide, which is a whole element spent on a single line, and it is what makes the body read as folded rather than flat.

### Why is it useful?

Origami, peace, and delicate or handmade themes use a paper crane. This builds one with pure CSS clip paths and animation, no images and no JavaScript, with a reduced motion fallback.
