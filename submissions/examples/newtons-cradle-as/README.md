# Newton's Cradle

### What does this do?

It shows a Newton's cradle: five metal balls hanging on strings from a frame. The end balls swing out and back in alternation while the middle three stay still, mimicking the momentum transfer of the real desk toy. Under reduced motion the balls hang still.

### How is it used?

```html
<div class="balls">
  <span class="pend p1"><span class="string"></span><span class="ball"></span></span>
  <span class="pend"><span class="string"></span><span class="ball"></span></span>
  <span class="pend p5"><span class="string"></span><span class="ball"></span></span>
</div>
```

Each ball hangs from a `pend` element with `transform-origin: top center`. The first and last swing with the `swing-left` and `swing-right` keyframes, offset in time so one returns as the other departs, while the inner balls rest.

### Why is it useful?

Loaders, physics demos, and playful headers use a Newton's cradle. This builds the swinging toy with pure CSS pendulums and keyframes, no images or script, with a reduced motion fallback.
