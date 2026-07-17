# Gift Box

### What does this do?

It shows a wrapped gift with a ribbon cross, a lid, and a two loop bow on top. Hovering or focusing the gift lifts the lid and pops the bow, as if it is about to open. Under reduced motion the parts do not move.

### How is it used?

```html
<div class="gift" tabindex="0">
  <div class="bow"><span class="loop left"></span><span class="loop right"></span><span class="knot"></span></div>
  <div class="lid"><span class="ribbon-v"></span></div>
  <div class="box"><span class="ribbon-v"></span><span class="ribbon-h"></span></div>
</div>
```

The box and lid are stacked rounded blocks with vertical and horizontal `ribbon` bands crossing them. The bow is two tilted `loop` ellipses with a center `knot`, and a hover lifts the lid and bow.

### Why is it useful?

Rewards, unboxing, and celebration flows use a gift box. This builds a wrapped present with a bow and an open on hover effect using pure CSS, no images.
