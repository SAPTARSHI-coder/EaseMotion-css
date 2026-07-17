# Olive Branch

### What does this do?

It shows an olive branch in the breeze with a dove crossing behind it. The branch sways, each leaf flutters on its own offset, the olives dangle, and a stray leaf drifts down. Hovering or focusing the branch makes it sway faster, as if a gust caught it. Under reduced motion everything is still.

### How is it used?

```html
<div class="branch3" tabindex="0">
  <span class="stemO"></span>
  <span class="leafOl lo1"></span>
  <span class="oliveO oo1"></span>
</div>
```

Each leaf is one element: a `border-radius` of `0 100% 0 100%` rounds two opposite corners fully and leaves the other two square, which is what produces the pointed leaf shape without a clip path. Every leaf keeps its own angle in a `--ol` custom property, and the flutter keyframe steps to `rotate(calc(var(--ol) + 7deg))`, so each one moves relative to the direction it already points instead of all swinging parallel. The olives dangle from `transform-origin: 50% -20%`, a point above the fruit where it joins the stem, so they swing from the branch rather than spinning in place.

### Why is it useful?

Peace, nature, and Mediterranean themes use an olive branch. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
