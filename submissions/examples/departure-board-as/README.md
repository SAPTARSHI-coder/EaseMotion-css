# Departure Board

### What does this do?

It shows an airport style departure board. Times are rendered as split flap tiles with a center seam, flight codes and gates use a monospace amber type, and each row has a color coded status (on time, delayed, or a blinking boarding). A header row and a live clock complete the panel.

### How is it used?

```html
<div class="board-row">
  <span class="row-time"><i class="flap">0</i><i class="flap">6</i><i class="flap sep">:</i><i class="flap">4</i><i class="flap">0</i></span>
  <span class="row-flight">BA218</span>
  <span class="row-dest">London</span>
  <span class="row-gate">A12</span>
  <span class="row-status boarding">Boarding</span>
</div>
```

Each time digit is a `flap` tile with a split gradient and a seam drawn by `::after`. Rows are a shared grid so the columns line up, and status classes set the color, with `boarding` adding a blink.

### Why is it useful?

Travel apps, dashboards, and status displays use split flap boards for a familiar transit look. This builds one with pure CSS tiles and grid rows, with no images or script.
