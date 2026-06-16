# .ease-pagination Pagination Component

Adds a pagination component for data tables, search results, blog archives, and paginated content.

## Problem

No pagination component exists in EaseMotion CSS. Users must write custom HTML + CSS for page navigation controls.

## Proposed CSS to Add to `components/pagination.css`

```css
/* Pagination wrapper */
.ease-pagination {
  display: inline-flex;
  align-items: center;
  gap: var(--ease-space-1, 0.25rem);
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Page buttons */
.ease-page-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.25rem;
  height: 2.25rem;
  padding: 0 var(--ease-space-2, 0.5rem);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--ease-color-text);
  background: transparent;
  border: 1px solid #e5e7eb;
  border-radius: var(--ease-radius-md, 0.5rem);
  cursor: pointer;
  transition: all var(--ease-speed-fast, 150ms);
  font-family: inherit;
  line-height: 1;
  text-decoration: none;
  user-select: none;
}

.ease-page-btn:hover:not(:disabled):not(.ease-page-btn-active) {
  background: #f3f4f6;
  border-color: #d1d5db;
}

/* Active page */
.ease-page-btn-active {
  background: var(--ease-color-primary) !important;
  color: white !important;
  border-color: var(--ease-color-primary) !important;
}

/* Disabled state */
.ease-page-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}

/* Ellipsis */
.ease-page-btn-ellipsis {
  border: none;
  cursor: default;
  background: transparent;
}

/* Size variants */
.ease-pagination-sm .ease-page-btn {
  min-width: 1.75rem;
  height: 1.75rem;
  font-size: 0.8rem;
}

.ease-pagination-lg .ease-page-btn {
  min-width: 2.75rem;
  height: 2.75rem;
  font-size: 1rem;
}
```

## Usage

```html
<!-- Small pagination -->
<nav aria-label="Pagination" class="ease-pagination ease-pagination-sm">
  <button class="ease-page-btn" disabled aria-label="Previous page">←</button>
  <button class="ease-page-btn ease-page-btn-active" aria-current="page">1</button>
  <button class="ease-page-btn">2</button>
  <button class="ease-page-btn">3</button>
  <span class="ease-page-btn ease-page-btn-ellipsis" aria-hidden="true">…</span>
  <button class="ease-page-btn">10</button>
  <button class="ease-page-btn" aria-label="Next page">→</button>
</nav>

<!-- Default pagination -->
<nav aria-label="Pagination" class="ease-pagination">
  <button class="ease-page-btn ease-page-btn-active" aria-current="page">1</button>
  <button class="ease-page-btn">2</button>
  <button class="ease-page-btn">3</button>
</nav>

<!-- Large pagination -->
<nav aria-label="Pagination" class="ease-pagination ease-pagination-lg">
  <button class="ease-page-btn ease-page-btn-active" aria-current="page">1</button>
  <button class="ease-page-btn">2</button>
  <button class="ease-page-btn">3</button>
</nav>
```

## Accessibility
- `aria-label="Pagination"` on the nav element
- `aria-current="page"` on the active page button
- `aria-label="Previous page"` / `aria-label="Next page"` on arrow buttons
- `aria-hidden="true"` on ellipsis spans
- `disabled` attribute on disabled buttons

## Files
- `README.md` — this file
- `demo.html` — pagination demo page
- `style.css` — pagination component CSS
