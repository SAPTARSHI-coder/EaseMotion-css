# Contribution Heatmap

### What does this do?

It shows a contribution heatmap, the kind on developer profiles, laid out as week columns of day cells that shade by activity level. A less to more legend maps the shades, and the card scrolls sideways when it overflows.

### How is it used?

```html
<div class="heatmap" role="img" aria-label="Contribution heatmap">
  <span class="hm-cell"></span>
  <span class="hm-cell l1"></span>
  <span class="hm-cell l3"></span>
</div>
```

The grid uses `grid-auto-flow: column` with seven rows, so cells fill down each week column and then move to the next week. Give each cell a level class from `l1` to `l4`, or none for an empty day.

### Why is it useful?

Activity heatmaps summarize a period of contributions at a glance. This lays out a column flow grid of day cells shaded by a level class, with a less to more legend, using only CSS. There are no scripts or external assets.
