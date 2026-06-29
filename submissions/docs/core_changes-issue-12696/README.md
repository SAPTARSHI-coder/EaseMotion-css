# ease-pagination

## What does this do?

Provides a CSS-only Pagination component for navigating multi-page content. Supports a full page-number list with active highlight, disabled states for boundaries, three sizes, and a simple Prev/Next variant.

## How is it used?

**Default pagination:**

```html
<nav aria-label="Pagination">
  <ul class="ease-pagination">
    <li class="is-disabled"><span>&laquo; Prev</span></li>
    <li class="is-active"><span>1</span></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">Next &raquo;</a></li>
  </ul>
</nav>
```

**Simple variant (Prev / Next + counter):**

```html
<ul class="ease-pagination ease-pagination-simple">
  <li class="is-disabled"><span>&laquo; Previous</span></li>
  <li><span>Page 3 of 10</span></li>
  <li><a href="#">Next &raquo;</a></li>
</ul>
```

### Variants

| Modifier | Effect |
|---|---|
| (none) | Default pill-style page buttons |
| `.ease-pagination-sm` | Smaller buttons (1.75rem) |
| `.ease-pagination-lg` | Larger buttons (2.75rem) |
| `.ease-pagination-simple` | Minimal: Prev / counter / Next |

### States

| Class | Effect |
|---|---|
| `.is-active` | Current page — brand background, white text |
| `.is-disabled` | Disabled action — reduced opacity, no pointer events |

### CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--psize` | `2.25rem` | Min-width & height |
| `--pfont` | `0.875rem` | Font size |
| `--pradius` | `0.5rem` | Border radius |

## Why is it useful?

Pagination is essential for blog listings, search results, data tables, and any paginated content. This component provides a consistent pagination pattern that integrates with EaseMotion's design language.

## Features

- Full page-number list with Previous/Next navigation
- Active page highlighted with brand color
- Disabled state for boundary buttons (reduced opacity, no pointer events)
- Three sizes: sm, md (default), lg
- Simple variant with only Prev/Next and page counter
- Subtle hover scale animation on links
- Dark mode support via `prefers-color-scheme`
- CSS custom properties for easy customization
