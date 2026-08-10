# Weather Vane

### What does this do?

It shows a rooster weather vane on a rooftop. The arrow veers back and forth as the wind shifts, gusts streak past, and clouds drift behind it. Hovering or focusing the vane sends it spinning all the way round, as if a squall just hit. Under reduced motion it holds its heading.

### How is it used?

```html
<div class="vane" tabindex="0">
  <div class="spinner">
    <span class="arrowHead"></span>
    <span class="arrowShaft"></span>
    <span class="rooster"></span>
  </div>
  <span class="poleV"></span>
</div>
```

The arrow head and tail are `clip-path` polygons, which is what gives them true points and a swallowtail that a `border-radius` cannot produce. Everything that turns lives inside one `spinner` wrapper whose `transform-origin: 50% 0` sits exactly on the pivot ball, so the arrow, the fletching and the rooster all rotate around the same post rather than each needing its own transform. That also makes the hover trivial: swapping the keyframe on the wrapper alone takes the whole assembly from a nervous veer to a full spin.

### Why is it useful?

Weather, rooftop, and rustic themes use a weather vane. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
