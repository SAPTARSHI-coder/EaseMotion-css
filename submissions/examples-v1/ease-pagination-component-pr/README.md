# Pure CSS Pagination Component

## What does this do?
A pagination component built using a semantic `<nav>` element with an
unordered list (`<ul>`), providing a clean, horizontal row of page numbers
with clear active, hover, and disabled states.

## How is it used?

```html
<nav aria-label="Pagination">
  <ul class="ease-pagination-list">
    <li><a href="#" class="ease-page-link">Previous</a></li>
    <li><a href="#" class="ease-page-link">1</a></li>
    <li><a href="#" class="ease-page-link ease-page-active" aria-current="page">2</a></li>
    <li><a href="#" class="ease-page-link">3</a></li>
    <li><a href="#" class="ease-page-link">Next</a></li>
  </ul>
</nav>
```

Add `is-disabled` to a link (e.g. "Previous" on the first page) to disable it.

## Why is it useful?
- **Zero JavaScript:** Fully functional using pure CSS.
- **Accessible:** Relies on semantic `<nav>` and `aria-current="page"`
  attributes so screen readers understand the active state.
- **Essential UI Element:** Fits alongside existing components for
  building complete dashboard or list layouts.
- **Human-readable:** Simple classes for hover, active, and disabled states,
  with full `prefers-reduced-motion` support.