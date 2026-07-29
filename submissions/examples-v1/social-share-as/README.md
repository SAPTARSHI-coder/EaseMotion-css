# Social Share Buttons

### What does this do?

It shows a row of round social share buttons that expand into a labeled pill on hover and keyboard focus. Each button uses an inline SVG icon and its own brand color. It is built with only CSS.

### How is it used?

```html
<nav class="share">
  <a class="share-btn tw" href="#"><svg>...</svg><span>Tweet</span></a>
  <a class="share-btn fb" href="#"><svg>...</svg><span>Share</span></a>
</nav>
```

Each button keeps its label in a `span` that animates from zero width to full width on hover or focus. Brand color classes are `tw`, `fb`, `wa`, and `li`.

### Why is it useful?

Share buttons appear on articles and product pages. This animates a compact icon button into a labeled pill using only CSS and inline SVG, so there are no external assets. The label also reveals on keyboard focus and the transition is removed under reduced motion.
