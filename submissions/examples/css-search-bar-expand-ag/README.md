# CSS Search Bar with Expand

An accessible, responsive, pure CSS search bar component that expands horizontally and morphs its search icon into a clear button on focus without JavaScript.

## How to Use

Link `style.css` in your document and use the semantic search structure:

```html
<link rel="stylesheet" href="style.css">

<form class="ease-search-bar-ag" role="search" aria-label="Site search">
  <label for="search-input" class="sr-only">Search query</label>
  <input 
    type="search" 
    id="search-input" 
    class="ease-search-input-ag" 
    name="q" 
    placeholder="Search..."
  >
  <button type="reset" class="ease-search-btn-ag" aria-label="Clear search">
    <span class="ease-search-icon-ag" aria-hidden="true">
      <span class="ease-icon-lens-ag"></span>
      <span class="ease-icon-handle-ag"></span>
    </span>
  </button>
</form>
```

## Why It Fits EaseMotion CSS

- **Zero JavaScript Dependencies**: Achieves interactive focus expansion and geometric icon morphing purely with CSS `:focus-within`, `:focus-visible`, and transforms.
- **EaseMotion Design Tokens**: Reuses `--ease-speed-*`, `--ease-color-*`, `--ease-radius-*`, `--ease-shadow-*`, and `--ease-glow-*` custom properties for consistent visual styling.
- **Accessibility & Motion First**: Features proper ARIA attributes, semantic form landmarks, high-contrast keyboard focus indicators, responsive viewport adaptation, and full `@media (prefers-reduced-motion: reduce)` support.
