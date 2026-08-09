# Before After Slider

### What does this do?

It shows a before and after image comparison where the after image sits in a resizable panel over the before image. Dragging the handle at the panel edge reveals more or less of the after version. It is genuinely draggable with no JavaScript.

### How is it used?

```html
<div class="compare">
  <div class="cmp-before"><span class="cmp-tag">Before</span></div>
  <div class="cmp-after-wrap">
    <div class="cmp-after"><span class="cmp-tag">After</span></div>
    <span class="cmp-handle"><svg>...</svg></span>
  </div>
</div>
```

The after panel uses `resize: horizontal` with `overflow: hidden`, so dragging its edge changes how much of the after image shows. The after image is fixed to the full frame width so it does not stretch as the panel resizes. Swap the gradient placeholders for real images in production.

### Why is it useful?

Edits, retouches, and renovations are shown with a before and after wipe. This builds a draggable image comparison from the CSS `resize` property, using only CSS and gradient placeholders so there are no external files.
