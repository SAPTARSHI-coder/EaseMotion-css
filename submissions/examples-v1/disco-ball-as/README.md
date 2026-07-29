# Disco Ball

### What does this do?

It shows a mirrorball hanging over a dance floor. The ball turns on its cord, its mirrored facets catch the light, and eight colored beams sweep outward from it, fading in and out as they rotate. Under reduced motion the ball stops and the beams rest in a fixed starburst.

### How is it used?

```html
<div class="rig">
  <span class="beam bm1"></span>
  <div class="ball"><span class="facets"></span></div>
</div>
```

The mirrored surface is three stacked repeating gradients over a sphere gradient: two perpendicular sets of lines cut the ball into tiles, and a diagonal set adds the glint. Each beam is a tapered `clip-path` wedge anchored at the ball's center; it stores its own starting angle in a `--a` custom property, so the shared `sweep` animation can rotate every beam from its own position and fade it in and out.

### Why is it useful?

Party, music, and celebration themes use a disco ball. This builds a spinning mirrorball with sweeping light beams in pure CSS, no images, with a reduced motion fallback.
