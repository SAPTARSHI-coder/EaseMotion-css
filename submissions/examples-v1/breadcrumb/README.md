# Breadcrumb Navigation Component

A breadcrumb trail showing the user's current location in a hierarchy. Pure CSS component using an `<ol>` with `aria-label="breadcrumb"` for accessibility. Includes 4 separator styles (slash, arrow, bullet, chevron), hover transitions, active page styling, and responsive truncation on mobile.

## Classes

| Class                     | Description                                     |
| ------------------------- | ----------------------------------------------- |
| `ease-breadcrumb`         | Ordered list container (default separator: `/`) |
| `ease-breadcrumb-arrow`   | `›` separator variant                           |
| `ease-breadcrumb-bullet`  | `•` separator variant                           |
| `ease-breadcrumb-chevron` | `❯` separator variant                           |

## Usage

```html
<nav aria-label="breadcrumb">
  <ol class="ease-breadcrumb">
    <li><a href="#">Home</a></li>
    <li><a href="#">Documentation</a></li>
    <li><a href="#">Components</a></li>
    <li aria-current="page">Breadcrumb</li>
  </ol>
</nav>
```

Add a modifier class for a different separator:

```html
<ol class="ease-breadcrumb ease-breadcrumb-arrow"></ol>
```

## Why it fits EaseMotion CSS

Accessible breadcrumb navigation with smooth hover color/background transitions on links, 4 separator variants via CSS pseudo-elements, and mobile truncation to the last 2 items with an ellipsis indicator. Respects `prefers-reduced-motion`.
