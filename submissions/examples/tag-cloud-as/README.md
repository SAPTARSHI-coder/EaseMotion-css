# Tag Cloud

### What does this do?

It shows a tag cloud where each tag sizes by a weight set with a custom property, so popular topics appear larger. Tags wrap across lines, cycle through a few accent colors, and lift and fill on hover.

### How is it used?

```html
<nav class="tag-cloud" aria-label="Popular topics">
  <a href="#" style="--w: 6">design</a>
  <a href="#" style="--w: 2">css</a>
</nav>
```

Set each tag weight with the `--w` custom property. The font size is computed as `calc(0.78rem + var(--w) * 0.13rem)`, so higher weights render larger.

### Why is it useful?

Blogs and knowledge bases use a tag cloud to surface popular topics. This sizes and colors tags by a weight custom property and wraps them cleanly, using only CSS. Tags have hover and focus states and the lift is removed under reduced motion.
