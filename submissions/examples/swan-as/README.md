# Swan

### What does this do?

It shows a swan gliding across a lake with its reflection shimmering in the water beneath it. The swan drifts from side to side, preens its wing now and then, blinks, and ripples spread from where it sits on the surface. Under reduced motion the swan holds still.

### How is it used?

```html
<div class="glide">
  <div class="swan">
    <span class="bodys2"></span>
    <span class="necks"></span>
    <span class="beaks"></span>
  </div>
  <div class="mirror">...</div>
</div>
```

The reflection is the same markup again inside a `mirror` wrapper that is flipped with `scaleY(-0.72)`, faded, and blurred. Squashing it rather than mirroring it exactly is what sells the foreshortening of a reflection on water. Because both copies sit inside one `glide` wrapper, the swan and its reflection always drift in perfect lockstep. The beak's black base and orange bill come from one hard-stop gradient.

### Why is it useful?

Lake, elegance, and calm or grace themes use a swan. This builds a gliding swan with a live reflection in pure CSS, no images, with a reduced motion fallback.
