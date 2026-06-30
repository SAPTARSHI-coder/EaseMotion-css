# ease-breadcrumb — Responsive Breadcrumb Component

## 1. What does this do?

Enhances the existing `components/breadcrumb.css` with auto-separator via `::before` pseudo-element (no manual separator elements needed), four separator styles, responsive mobile collapse, and dark mode support.

**New CSS additions:**

- **Auto-separator**: `.ease-breadcrumb-item + .ease-breadcrumb-item::before` inserts separator automatically
- **Separator variants**: `.ease-breadcrumb-chevron` (❯), `.ease-breadcrumb-arrow` (→), `.ease-breadcrumb-dot` (·)
- **Current page**: `.ease-breadcrumb-current` replaces `.ease-breadcrumb-active` with bold text weight
- **Responsive collapse**: `.ease-breadcrumb-collapsible` hides intermediate items on mobile, shows "..."
- **Dark mode**: `.ease-breadcrumb-current` uses `--ease-color-text` for theme-aware coloring
- **Reduced motion**: Transitions disabled

## 2. How is it used?

```html
<!-- Default slash separator -->
<nav aria-label="Breadcrumb">
  <ol class="ease-breadcrumb-list">
    <li class="ease-breadcrumb-item">
      <a href="#" class="ease-breadcrumb-link">Home</a>
    </li>
    <li class="ease-breadcrumb-item">
      <span class="ease-breadcrumb-current">Page</span>
    </li>
  </ol>
</nav>

<!-- Chevron + collapse -->
<nav
  class="ease-breadcrumb-chevron ease-breadcrumb-collapsible"
  aria-label="Breadcrumb"
>
  <ol class="ease-breadcrumb-list">
    <li class="ease-breadcrumb-item">
      <a href="#" class="ease-breadcrumb-link">Home</a>
    </li>
    <li class="ease-breadcrumb-item">
      <a href="#" class="ease-breadcrumb-link">Category</a>
    </li>
    <li class="ease-breadcrumb-item">
      <span class="ease-breadcrumb-current">Item</span>
    </li>
  </ol>
</nav>

<!-- Size variant -->
<nav class="ease-breadcrumb-sm" aria-label="Breadcrumb">...</nav>
```

## 3. Why is this useful?

- **Cleaner HTML** — No manual separator elements needed
- **Four separator styles** — Choose slash, chevron, arrow, or dot
- **Responsive** — Collapses to "..." on mobile automatically
- **Theme-aware** — Uses `--ease-color-*` tokens for light/dark mode
- **Accessible** — Uses `<nav aria-label="Breadcrumb">` and `<ol>` semantics
