# Enhanced Breadcrumb Component

1. What does this do? Enhances the existing breadcrumb component with icon support, five separator variants (chevron, slash, arrow, dot, bullet), collapsible intermediate items for deep paths, dropdown menus on intermediate items, and size variants — all with dark mode and reduced-motion support.

2. How is it used? Apply the `.breadcrumb` class to a `<nav>` element with `.breadcrumb-list`, `.breadcrumb-item`, `.breadcrumb-link`, `.breadcrumb-separator`, and `.breadcrumb-current` classes; add `.breadcrumb-sep-chevron` (or slash/arrow/dot/bullet) for separator style, `.breadcrumb-collapse` for collapsed deep paths, and `.breadcrumb-dropdown` for dropdown menus.

```html
<!-- Basic with icon and chevron separator -->
<nav aria-label="Breadcrumb" class="breadcrumb breadcrumb-sep-chevron">
  <ol class="breadcrumb-list">
    <li class="breadcrumb-item">
      <a href="#" class="breadcrumb-link">
        <svg class="breadcrumb-icon"><!-- icon --></svg>
        Home
      </a>
    </li>
    <li class="breadcrumb-separator" aria-hidden="true"></li>
    <li class="breadcrumb-item breadcrumb-current" aria-current="page">
      Current
    </li>
  </ol>
</nav>

<!-- Collapsed with dropdown -->
<nav aria-label="Breadcrumb" class="breadcrumb breadcrumb-sep-arrow">
  <ol class="breadcrumb-list">
    <li class="breadcrumb-item">
      <a href="#" class="breadcrumb-link">Home</a>
    </li>
    <li class="breadcrumb-separator" aria-hidden="true"></li>
    <li class="breadcrumb-item">
      <button class="breadcrumb-collapse-trigger">...</button>
      <div class="breadcrumb-collapsed-items"><!-- hidden links --></div>
    </li>
    <li class="breadcrumb-separator" aria-hidden="true"></li>
    <li class="breadcrumb-item breadcrumb-current">Current</li>
  </ol>
</nav>
```

3. Why is it useful? Breadcrumbs are a core navigation pattern; the existing component is minimal — this enhancement adds real-world features (icons, collapse, dropdowns, separator choices) that make it production-ready while keeping the same accessible `<nav>` / `<ol>` / `<li>` structure and respecting dark mode and reduced motion preferences.

Fixes #16399
