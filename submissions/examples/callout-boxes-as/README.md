# Callout Note Boxes

### What does this do?

It provides a set of callout boxes for docs and articles in four tones: info, success, warning, and danger. Each has a colored left bar, a tinted background, an inline SVG icon, and a bold title. It is built with only CSS.

### How is it used?

```html
<div class="callout is-info">
  <svg class="callout-icon">...</svg>
  <div><strong>Note</strong><p>Helpful context here.</p></div>
</div>
```

Swap the tone class between `is-info`, `is-success`, `is-warning`, and `is-danger`. Each tone sets a `--tone` and a matching `--tint` custom property that colors the bar, icon, title, and background.

### Why is it useful?

Callouts and admonitions are common in documentation and readme content. This offers a consistent set of note boxes driven by a single tone class, using only CSS and inline SVG so there are no external assets.
