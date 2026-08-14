# Grid Placement Utilities

A collection of CSS Grid utility classes for controlling item placement and column spanning.

## Usage

```html
<div class="place-center">Centered Item</div>

<div class="place-start">Start Aligned Item</div>

<div class="place-end">End Aligned Item</div>

<div class="col-span-2">Spans Two Columns</div>

<div class="col-span-full">Spans Entire Row</div>
```

## Classes

| Class           | CSS                         |
| --------------- | --------------------------- |
| `place-center`  | `place-items: center;`      |
| `place-start`   | `place-items: start start;` |
| `place-end`     | `place-items: end end;`     |
| `col-span-1`    | `grid-column: span 1;`      |
| `col-span-2`    | `grid-column: span 2;`      |
| `col-span-3`    | `grid-column: span 3;`      |
| `col-span-4`    | `grid-column: span 4;`      |
| `col-span-full` | `grid-column: 1 / -1;`      |

## Use Case

These utilities reduce repetitive CSS by providing reusable classes for common grid alignment and spanning patterns, making layouts easier to build and maintain.
