# Water Well

### What does this do?

It shows a stone water well with a tiled roof and a hand crank. Hovering or focusing the well lets the rope out so the bucket lowers down to the water, where ripples spread from the splash. It works with no JavaScript. Under reduced motion the bucket moves without easing and the ripples stay hidden.

### How is it used?

```html
<div class="well" tabindex="0">
  <span class="roof"></span>
  <span class="crank"></span>
  <span class="rope"></span>
  <span class="bucket"></span>
  <div class="wall"><span class="water"></span><span class="ripple"></span></div>
</div>
```

The stone wall is drawn with two crossed repeating gradients that read as courses of blocks, and the water sits in an ellipse inside it. On `:hover` or `:focus` the `rope` grows taller and the `bucket` moves down together, and a delayed `splash` animation expands the ripple once the bucket reaches the surface.

### Why is it useful?

Village, fantasy, and resource or "draw from the well" themes use a well. This builds an interactive water well with pure CSS shapes and transitions, no images or JavaScript, with a reduced motion fallback.
