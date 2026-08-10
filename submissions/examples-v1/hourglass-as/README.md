# Hourglass

### What does this do?

It shows an hourglass with wooden caps and two glass bulbs. Sand drains from the top bulb through a falling stream into the bottom bulb, which fills up over the cycle, then repeats. Under reduced motion the sand rests half drained.

### How is it used?

```html
<div class="bulb up"><span class="sand top-sand"></span></div>
<span class="stream"></span>
<div class="bulb down"><span class="sand bottom-sand"></span></div>
```

Each bulb is a `clip-path` triangle that clips the sand inside. The `top-sand` shrinks with the `drain-top` keyframes while the `bottom-sand` grows with `fill-bottom`, and a thin `stream` connects them, all on the same timeline.

### Why is it useful?

Timers, loaders, and waiting states use an hourglass. This builds a draining hourglass with pure CSS clip paths and keyframes, no images or script, with a reduced motion fallback.
