# Metric Comparison Bar

1. What does this do? A comparison widget showing two horizontal bars per metric — current period vs previous period. Both bars animate from 0 to their target width on load. The difference between values is highlighted with green (improvement) or red (decline).

2. How is it used? Add a `.comparison-card` with `.comparison-group` sections. Each group contains a `.bar-pair` with two `.bar-row` elements (`.current` and `.previous`). Set the bar width via the `--bar-width` CSS variable inline. The `.diff-indicator` with `.up` or `.down` shows the percentage change.

3. Why is it useful? Month-over-month comparison is a standard dashboard pattern. The side-by-side bars make it easy to visually compare performance, and the color-coded diff indicator gives immediate context on whether metrics are trending positively or negatively.
