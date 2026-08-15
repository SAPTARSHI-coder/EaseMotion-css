# Morphing Pagination with Neumorphism Styling

A responsive pagination component inspired by neumorphic UI design.

The component uses soft surfaces, layered shadows, active-state
morphing, and tactile interactions while remaining lightweight and
completely JavaScript-free.

## Features

- Fully responsive
- Neumorphic styling
- Morphing active state
- Soft outer shadows
- Pressed inner-shadow state
- Previous and next controls
- Active page indicator
- Ellipsis support
- Keyboard focus state
- No JavaScript
- No external dependencies
- Reduced-motion support

## Files

- `demo.html`
- `style.css`

## Usage

Basic pagination markup:

```html
<nav class="pagination" aria-label="Pagination">
  <a
    class="pagination__control pagination__control--arrow"
    href="#"
    aria-label="Previous page"
  >
    ‹
  </a>

  <a class="pagination__item" href="#" aria-label="Page 1">
    1
  </a>

  <a class="pagination__item" href="#" aria-label="Page 2">
    2
  </a>

  <a
    class="pagination__item pagination__item--active"
    href="#"
    aria-current="page"
    aria-label="Page 3"
  >
    3
  </a>

  <a class="pagination__item" href="#" aria-label="Page 4">
    4
  </a>

  <span class="pagination__dots" aria-hidden="true">
    ...
  </span>

  <a class="pagination__item" href="#" aria-label="Page 12">
    12
  </a>

  <a
    class="pagination__control pagination__control--arrow"
    href="#"
    aria-label="Next page"
  >
    ›
  </a>
</nav>