# Kite

### What does this do?

It shows a diamond kite flying in the wind. The kite dips and tilts as it rides the breeze, and its tail with four colored bows wags and flutters behind it while clouds drift past. Under reduced motion the kite, tail, and clouds all hold still.

### How is it used?

```html
<div class="kite">
  <div class="diamond">
    <span class="q top"></span>
    <span class="spine"></span>
    <span class="crossbar"></span>
  </div>
  <div class="tail"><span class="bow b1"></span></div>
</div>
```

The diamond is four `clip-path` triangles meeting at the center, each a different color, crossed by a spine and crossbar for the frame. The whole kite runs the `fly` animation, dipping and rotating like it is catching wind, while the tail wags from its top and each bow flutters by scaling in and out on a staggered delay.

### Why is it useful?

Play, spring, and outdoor themes use a kite. This builds a flying kite with pure CSS shapes and animation, no images, with a reduced motion fallback.
