# Contribution Heatmap

## What does this do?

A calendar heatmap grid where each cell's intensity comes from a `data-l` level
attribute, filling in column by column on load.

## How is it used?

```html
<div class="hmc" role="img" aria-label="Contribution heatmap, peak in week 6">
  <div class="hmc-grid">
    <span data-l="0"></span><span data-l="3"></span><span data-l="4"></span>
  </div>
</div>
```

Cells flow top-to-bottom then across, so seven cells make a week column.

## Why is it useful?

The layout trick is `grid-auto-flow: column` with seven explicit rows: the markup
is a flat list of days in date order, and the grid arranges them into week
columns automatically. No week-level wrapper elements, and no date maths in the
template.

The colour scale is the part worth copying. Heatmaps are usually built by
applying one hue at stepped `opacity` values, which looks reasonable in code but
fails in practice — opacity steps compress perceptually toward the dark end, so
the two highest levels become nearly identical, exactly where the data is most
interesting. Declaring five explicit colours with even perceptual spacing keeps
every level distinguishable.

`forced-color-adjust: none` with a `CanvasText` outline is the right call under
High Contrast: the levels *are* the data, so flattening them to a system colour
would destroy the chart, but each cell still needs a visible edge.

The container is `role="img"` with a summary label, since 56 empty spans convey
nothing to a screen reader on their own.
