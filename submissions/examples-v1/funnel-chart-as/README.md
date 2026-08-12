# Funnel Chart

### What does this do?

It shows a conversion funnel chart. Each stage is a centered, trapezoid clipped bar whose width shrinks down the funnel, with the stage name on the left and the value centered on the bar. Widths are set by a `--w` custom property, so the funnel silhouette comes straight from the data.

### How is it used?

```html
<div class="fn-stage" style="--w: 48%;">
  <span class="fn-name">Add to cart</span>
  <span class="fn-track"><span class="fn-bar"></span><em class="fn-val">4,050</em></span>
</div>
```

Set each stage width with the `--w` inline variable. The `fn-bar` uses a `clip-path` polygon to angle its sides so the stacked bars read as a funnel, and the `fn-val` label sits centered over the bar.

### Why is it useful?

Analytics and marketing dashboards use funnels to show drop off between steps. This renders that funnel from stacked, clipped bars driven by one custom property, with no charting script.
