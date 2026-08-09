# Ghost

### What does this do?

It shows a cute ghost floating in the dark. The whole ghost drifts up and down, the wavy bumps along its bottom edge wobble like a rippling sheet, and the shadow beneath shrinks and fades as it rises. Under reduced motion the ghost holds still.

### How is it used?

```html
<div class="ghost">
  <div class="body">...</div>
  <div class="skirt"><span class="bump"></span>...</div>
</div>
<span class="shadow"></span>
```

The body is a rounded gradient dome with a soft glow, the eyes and mouth are dark shapes, and the four `bump` elements at the base each animate up and down on a staggered delay to give a floating sheet effect. The shadow scales and fades in sync with the drift.

### Why is it useful?

Halloween themes, 404 pages, and playful loaders use a ghost. This builds a floating ghost with pure CSS shapes and animation, no images, with a reduced motion fallback.
