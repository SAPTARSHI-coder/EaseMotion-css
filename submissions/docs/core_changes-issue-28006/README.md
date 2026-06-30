# ease-grid-span — CSS Grid Span Utility Classes

## What does this do?

Provides CSS Grid `grid-column` and `grid-row` span utility classes for quick grid layout without writing custom CSS.

## How is it used?

```html
<div class="ease-grid">
  <div class="ease-col-span-2">Spans 2 columns</div>
  <div class="ease-col-span-full">Spans all columns</div>
  <div class="ease-row-span-2">Spans 2 rows</div>
</div>
```

### Classes

| Class                 | Property      | Value             |
| --------------------- | ------------- | ----------------- |
| `.ease-col-span-1`    | `grid-column` | `span 1 / span 1` |
| `.ease-col-span-2`    | `grid-column` | `span 2 / span 2` |
| `.ease-col-span-3`    | `grid-column` | `span 3 / span 3` |
| `.ease-col-span-4`    | `grid-column` | `span 4 / span 4` |
| `.ease-col-span-5`    | `grid-column` | `span 5 / span 5` |
| `.ease-col-span-6`    | `grid-column` | `span 6 / span 6` |
| `.ease-col-span-full` | `grid-column` | `1 / -1`          |
| `.ease-row-span-1`    | `grid-row`    | `span 1 / span 1` |
| `.ease-row-span-2`    | `grid-row`    | `span 2 / span 2` |
| `.ease-row-span-3`    | `grid-row`    | `span 3 / span 3` |
| `.ease-row-span-full` | `grid-row`    | `1 / -1`          |
