# Pagination Keyboard Navigation

## What does this do?
Proposes keyboard navigation enhancements to `components/pagination.css`. Page buttons use `<a>` elements (not `<span>`) for native focusability, with clear `:focus-visible` ring and `aria-current="page"` on the active page button. Arrow key navigation is supported via a small JavaScript enhancement.

## How is it used?
```html
<nav aria-label="Results pagination">
  <a href="#" class="ease-pagination-btn ease-pagination-prev"
     aria-label="Go to previous page">Prev</a>
  <a href="#" class="ease-pagination-btn"
     aria-label="Go to page 1" aria-current="page">1</a>
  <a href="#" class="ease-pagination-btn"
     aria-label="Go to page 2">2</a>
  ...
</nav>
```

## Why is this useful?
Keyboard-only users and screen reader users cannot navigate paginated content without native focusable elements. Spans used as page buttons are invisible to keyboards and assistive technology. This submission makes pagination fully WCAG-compliant while adding only minimal overhead.

## Tech Stack
- `<a>` elements for native keyboard accessibility
- CSS `:focus-visible` for keyboard-only focus ring (not shown for mouse clicks)
- Small JavaScript for `ArrowLeft`/`ArrowRight` navigation
- No external dependencies

## Accessibility (WCAG 2.1 AA)
- All page controls are focusable via Tab
- `aria-current="page"` on active page for screen readers
- `aria-label` on prev/next and page buttons
- `:focus-visible` ring distinguishes keyboard from mouse navigation
- Arrow key navigation for power users

## Browser Support
All modern browsers. `focus-visible` polyfill may be needed for Firefox.
