# Snow Globe

### What does this do?

It shows a snow globe with a little cabin and pine trees inside, snow drifting gently down. Hovering or focusing it shakes the globe and sends the snow swirling back up before it settles again. It works with no JavaScript. Under reduced motion the globe stays still and the snow is hidden.

### How is it used?

```html
<div class="globe" tabindex="0">
  <div class="dome">
    <span class="hut"></span>
    <div class="snow"><span class="flake fk1"></span></div>
    <span class="glassg"></span>
  </div>
  <span class="baseg"></span>
</div>
```

The dome clips everything with `overflow: hidden`, so the scene and the snow stay inside the glass. Each flake normally runs a slow `driftdown`; on `:hover` the animation *name* is swapped to a faster `flurry` that first throws the flakes back up before letting them fall, while the dome itself runs a brief `shake`. Swapping the keyframes rather than the element is what makes the shake feel like it disturbed the snow.

### Why is it useful?

Winter, holiday, and nostalgic or keepsake themes use a snow globe. This builds an interactive snow globe with pure CSS shapes and animation, no images or JavaScript, with a reduced motion fallback.
