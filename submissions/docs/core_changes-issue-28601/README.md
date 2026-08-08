# ease-grid — CSS Grid Layout Utilities

## What does this do?

Completes the CSS Grid utility class set in EaseMotion CSS. Adds missing grid column/row templates, auto-fill/auto-fit responsive grids, shorthand gap classes, and full column/row span utilities. These classes allow developers to build multi-column layouts entirely with utility classes.

## How is it used?

**Basic grid layouts:**

```html
<div class="ease-grid ease-grid-cols-3 ease-grid-gap">
  <div class="ease-col-span-2">Spans 2 columns</div>
  <div>Normal cell</div>
  <div class="ease-col-span-full">Full width row</div>
</div>
```

**Auto-fill responsive grid (no media queries needed):**

```html
<div class="ease-grid ease-grid-cols-auto-fill">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

**Explicit rows and row spans:**

```html
<div class="ease-grid ease-grid-cols-4 ease-grid-rows-3 ease-grid-gap">
  <div class="ease-row-span-2">Tall cell</div>
  <div class="ease-col-span-2 ease-row-span-full">Spans both</div>
</div>
```

### Variants

| Class | Effect |
|---|---|
| `.ease-grid-cols-1` to `.ease-grid-cols-12` | Fixed column count (fills existing gaps) |
| `.ease-grid-cols-none` | Reset column template |
| `.ease-grid-cols-auto-fill` | `repeat(auto-fill, minmax(250px, 1fr))` |
| `.ease-grid-cols-auto-fit` | `repeat(auto-fit, minmax(250px, 1fr))` |
| `.ease-grid-rows-1` to `.ease-grid-rows-6` | Fixed row count |
| `.ease-grid-rows-none` | Reset row template |
| `.ease-grid-gap-sm` / `.ease-grid-gap` / `.ease-grid-gap-lg` | Shorthand `gap` using spacing tokens |
| `.ease-col-span-1` to `.ease-col-span-4` | Column span (1-4 columns) |
| `.ease-col-span-full` | Span all columns (`1 / -1`) |
| `.ease-row-span-1` to `.ease-row-span-6` | Row span |
| `.ease-row-span-full` | Span all rows (`1 / -1`) |

### CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-grid-min` | `250px` | Minimum column width for auto-fill/auto-fit |

## Why is it useful?

CSS Grid is the most powerful layout system in CSS, but it requires verbose declarations. These utility classes condense common grid patterns into single class names, enabling rapid prototyping and consistent layouts without leaving the HTML.

## Features

- Fixed column layouts from 1 to 12 columns
- Auto-fill and auto-fit responsive grids (no media queries)
- Explicit row templates
- Column and row spanning utilities
- Full-width (`col-span-full`) and full-height (`row-span-full`) variants
- Shorthand gap classes using design tokens
- All classes use `!important` to match EaseMotion utility conventions
- Compatible with existing `ease-grid-flow-*` and `ease-col-span-{5-11}` utilities
