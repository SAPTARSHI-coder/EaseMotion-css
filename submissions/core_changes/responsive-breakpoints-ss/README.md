# Responsive Breakpoint Utilities

Adds responsive utility classes with `ease-sm-*`, `ease-md-*`, `ease-lg-*`, `ease-xl-*`, and `ease-2xl-*` prefixes for building responsive layouts.

## Breakpoints

| Prefix | Min Width | Example |
|---|---|---|
| `ease-sm-*` | 640px | `ease-sm-flex` |
| `ease-md-*` | 768px | `ease-md-hidden` |
| `ease-lg-*` | 1024px | `ease-lg-grid-cols-3` |
| `ease-xl-*` | 1280px | `ease-xl-flex-row` |
| `ease-2xl-*` | 1536px | `ease-2xl-gap-8` |

## Utilities Included

| Category | Properties | Example |
|---|---|---|
| Display | flex, inline-flex, grid, block, inline-block, inline, hidden | `ease-md-flex` |
| Grid Columns | cols-1,2,3,4,6,12 | `ease-lg-grid-cols-4` |
| Flex Direction | flex-row, flex-col, flex-row-reverse, flex-col-reverse | `ease-md-flex-row` |
| Flex Wrap | flex-wrap, flex-nowrap | `ease-lg-flex-wrap` |
| Gap | 0,1,2,3,4,5,6,8,10,12 | `ease-xl-gap-8` |
| Text Align | left, center, right, justify | `ease-md-text-center` |
| Width | 1/2, 1/3, 2/3, 1/4, 3/4, 1/5, 2/5, 3/5, 4/5, full, auto | `ease-md-w-1/2` |
| Order | first, last, none, 1–6 | `ease-lg-order-last` |
| Justify | start, end, center, between, around, evenly | `ease-xl-justify-center` |
| Align | start, end, center, baseline, stretch | `ease-lg-items-center` |

## Usage

```html
<div class="ease-md-flex ease-lg-flex-row ease-xl-gap-8">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<div class="grid ease-md-grid-cols-2 ease-lg-grid-cols-4">
  <div>1</div><div>2</div><div>3</div><div>4</div>
</div>

<div class="ease-sm-hidden ease-md-block">
  Visible only on tablet+
</div>
```

No JavaScript required. Just add the class at the desired breakpoint.
