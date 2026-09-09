# Pagination Component with Active/Disabled/Hover States

A pagination component for navigating through pages in list views, blog archives, and search results — with active, disabled, and hover states.

## Features

- **`.ease-pagination`** — flex row container with gap
- **`.ease-page-item`** — wrapper for each page button
- **`.ease-page-link`** — page button with hover effect
- **`.ease-page-item.active`** — highlighted with primary color, bold font
- **`.ease-page-item.disabled`** — reduced opacity, no pointer events
- **`.ease-page-ellipsis`** — ellipsis indicator for truncated ranges
- **Sizes** — `.ease-pagination-sm`, `.ease-pagination-lg`
- **`.ease-pagination-square`** — square (non-rounded) variant
- **Smooth transitions** — background, color, border-color on hover

## Files

- `style.css` — all pagination styles and demo layout
- `demo.html` — working demo with 3 sizes, square variant, and ellipsis
- `README.md` — this file

## Usage

```html
<nav aria-label="Pagination">
  <ul class="ease-pagination">
    <li class="ease-page-item disabled">
      <a class="ease-page-link" href="#" tabindex="-1">‹</a>
    </li>
    <li class="ease-page-item active">
      <a class="ease-page-link" href="#" aria-current="page">1</a>
    </li>
    <li class="ease-page-item">
      <a class="ease-page-link" href="#">2</a>
    </li>
    <li class="ease-page-ellipsis">…</li>
    <li class="ease-page-item">
      <a class="ease-page-link" href="#">›</a>
    </li>
  </ul>
</nav>

<!-- Sizes -->
<ul class="ease-pagination ease-pagination-sm">...</ul>
<ul class="ease-pagination ease-pagination-lg">...</ul>

<!-- Square variant -->
<ul class="ease-pagination ease-pagination-square">...</ul>
```
