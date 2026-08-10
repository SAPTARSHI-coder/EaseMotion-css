# Sewing Machine

### What does this do?

It shows a sewing machine stitching a piece of cloth. The needle bar drives up and down fast, the hand wheel spins in time, the fabric feeds steadily under the presser foot, and a dashed seam runs along it. Under reduced motion the needle, wheel, and fabric all stop.

### How is it used?

```html
<div class="machine">
  <span class="wheel"></span>
  <div class="arm"><span class="head"></span><span class="needle"></span><span class="foot"></span></div>
  <div class="bed"><span class="cloth"><span class="seam"></span></span></div>
</div>
```

The needle bar and needle share one `stitch` animation, so they always move as a unit. The hand wheel's spokes are a `repeating-conic-gradient` with two solid rings layered on by inset shadows. The cloth slides under the foot with a `feed` animation while the `bed` clips it with `overflow: hidden`, and the seam is a dashed repeating gradient stitched along the fabric.

### Why is it useful?

Craft, fashion, and making or manufacturing themes use a sewing machine. This builds a running sewing machine with pure CSS shapes and animation, no images, with a reduced motion fallback.
