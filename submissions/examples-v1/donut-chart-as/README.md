# CSS Donut Chart

### What does this do?

It shows a donut chart drawn with a conic gradient, with a hollow center that displays a total and a legend beside it, scaling in on load.

### How is it used?

```html
<div class="donut-card">
  <div class="donut-wrap">
    <div class="donut" role="img" aria-label="Traffic sources"></div>
    <span class="donut-center">1,240</span>
  </div>
  <ul class="donut-legend">
    <li><span class="dot" style="--c: #6c63ff"></span> Direct 45%</li>
  </ul>
</div>
```

The ring is a `conic-gradient` with segment stops, and a radial mask punches the hollow center. The total sits in an overlay so it is not affected by the mask.

### Why is it useful?

Donut charts show proportions on dashboards and reports. This builds a segmented ring from a `conic-gradient` with a masked center and reveals it with a scale, using only CSS with no images. The chart exposes an image role with a label, and the scale in is disabled under `prefers-reduced-motion: reduce`.
