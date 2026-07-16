# Animated Indeterminate Progress Bar

### What does this do?

It shows a slim loading bar with a highlight that sweeps across in a loop, indicating ongoing work of unknown duration, with color variants.

### How is it used?

```html
<div class="progress-bar" role="progressbar" aria-label="Loading">
  <span class="progress-fill"></span>
</div>
```

Add `is-success` or `is-warning` to the `.progress-bar` to change the sweep color. The fill segment moves with a single transform keyframe.

### Why is it useful?

Indeterminate bars are shown while data loads or a request is in flight. This animates a sweeping highlight with only a transform keyframe, so it needs no JavaScript. The bar carries a `progressbar` role, and under `prefers-reduced-motion: reduce` the sweep is replaced by a calm static fill.
