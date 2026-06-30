# Responsive Breakpoint Utility Classes

Adds responsive utility classes with breakpoint prefixes for building responsive layouts.

## Breakpoints

| Prefix | Min Width | Example                          |
| ------ | --------- | -------------------------------- |
| `sm`   | 640px     | `.ease-sm-flex` (already exists) |
| `md`   | 768px     | `.ease-md-hidden`                |
| `lg`   | 1024px    | `.ease-lg-grid-cols-3`           |
| `xl`   | 1280px    | `.ease-xl-flex-row`              |
| `2xl`  | 1536px    | `.ease-2xl-w-1/2`                |

## Utility Categories

| Category           | Classes                                                                                                          |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- |
| **Display**        | `flex`, `grid`, `block`, `hidden`, `inline`, `inline-block`                                                      |
| **Grid columns**   | `grid-cols-1`, `grid-cols-2`, `grid-cols-3`, `grid-cols-4`, `grid-cols-6`, `grid-cols-12`                        |
| **Flex direction** | `flex-row`, `flex-col`, `flex-wrap`, `flex-nowrap`                                                               |
| **Gap**            | `gap-0` through `gap-8`                                                                                          |
| **Text alignment** | `text-left`, `text-center`, `text-right`                                                                         |
| **Width**          | `w-1/2`, `w-1/3`, `w-2/3`, `w-1/4`, `w-3/4`, `w-full`                                                            |
| **Order**          | `order-first`, `order-1`, `order-2`, `order-3`, `order-last`                                                     |
| **Alignment**      | `items-center`, `items-start`, `items-end`, `justify-center`, `justify-between`, `justify-around`, `justify-end` |

## Usage

```html
<!-- 2 cols on md, 4 cols on lg -->
<div class="ease-grid ease-md-grid-cols-2 ease-lg-grid-cols-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>

<!-- Hidden on mobile, flex on md+ -->
<div class="ease-hidden ease-md-flex">
  <span>Visible on md+</span>
</div>
```

## Generation

Classes are generated via CSS `@media (min-width: ...)` queries for each breakpoint. To regenerate, run the Python/SCSS build script in the submission source.

Fixes #12460
