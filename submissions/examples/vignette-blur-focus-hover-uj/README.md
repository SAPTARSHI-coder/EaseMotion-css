# Vignette Blur Focus Hover

## What does this do?

It highlights the hovered item in a grid or list while subtly blurring, scaling down, and dimming all other surrounding siblings.

## How is it used?

Apply the `blur-grid-uj` wrapper class and the `grid-item-uj` child classes to your group of cards:

```html
<div class="blur-grid-uj">
  <div class="grid-item-uj">Item 1</div>
  <div class="grid-item-uj">Item 2</div>
  <div class="grid-item-uj">Item 3</div>
</div>
```

## Why is this useful?

This effect uses standard CSS selectors (`:hover` combined with `:not(:hover)`) to direct the user's attention and enhance visual hierarchy in galleries, dashboards, or card grids. It operates entirely on compositor-friendly properties, avoids layout thrashing, and includes a fallback for `prefers-reduced-motion`.
