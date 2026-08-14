# Rainbow

### What does this do?

It shows a rainbow arcing across a blue sky with a sun and two clouds at its feet. Seven colored bands form the arc, an inner sky colored band closes the gap, and the clouds gently bob. Under reduced motion the clouds hold still.

### How is it used?

```html
<div class="rainbow">
  <span class="band b1"></span>
  <span class="band b7"></span>
  <span class="band inner"></span>
</div>
```

Each band is a box with only a rounded top border, so it renders as an arc of that color's thickness. Stacking seven smaller bands inside each other builds the spectrum, and a final `inner` band in the sky color fills the middle.

### Why is it useful?

Weather, celebration, and cheerful themes use a rainbow. This builds one from stacked CSS border arcs with clouds, no images, with a reduced motion fallback.
