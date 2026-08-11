# Sticky Table Header

## What does this do?

A scrollable data table that pins both the header row and the first column, so
labels stay visible on both axes.

## How is it used?

```html
<div class="sth-scroll">
  <table class="sth">
    <thead><tr><th>Component</th><th>Size</th></tr></thead>
    <tbody><tr><th>fade</th><td>0.4 kB</td></tr></tbody>
  </table>
</div>
```

Row labels must be `<th>`, not `<td>`, for the column pinning to apply.

## Why is it useful?

Two-axis sticky headers are a common request and are usually abandoned because
the first attempt does not work. The reasons are specific and worth documenting.

`position: sticky` has no effect on table elements when `border-collapse:
collapse` is set — the collapsed border model reassigns borders to the table
itself, and the cells stop being positionable. Switching to `border-collapse:
separate` with `border-spacing: 0` keeps the visual result while making sticky
work.

The second trap is the corner cell. The header row and the first column each need
their own `z-index`, and the intersecting cell has to outrank both — otherwise the
row header scrolls over the corner and the top-left label disappears exactly when
it is most needed.

Because collapsed borders are unavailable, borders are applied per cell and the
last row's are removed individually, which is what keeps the rounded container
edge clean.

Using `<th>` for row labels also gives the table real row-header semantics, so a
screen reader announces the row name with each cell rather than reading bare
values.
