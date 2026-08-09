# Merry Go Round

### What does this do?

It shows a carousel with a striped canopy, a scalloped valance, and a flag on top. Four horses on brass poles revolve around the center pole, growing as they swing to the front and shrinking as they pass behind, so the ride reads as spinning in 3D. Under reduced motion the horses rest spread around the carousel.

### How is it used?

```html
<div class="carousel">
  <span class="roof"></span>
  <div class="ring">
    <div class="mount m1"><span class="pole"></span><span class="horse"></span></div>
  </div>
  <span class="platform"></span>
</div>
```

The canopy is a `clip-path` cone filled with a `repeating-conic-gradient` for the stripes, over a scalloped valance made from a repeating radial gradient. Each horse is a `clip-path` silhouette on a pole, and every mount runs the `revolve` animation, translating side to side while scaling and restacking so the front horses appear larger and in front, faking a rotation around the central post.

### Why is it useful?

Fair, playful, and celebratory themes use a carousel. This builds a spinning merry go round with pure CSS shapes and animation, no images, with a reduced motion fallback.
