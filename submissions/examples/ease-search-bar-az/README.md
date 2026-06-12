# Search Bar Component

### What does this do?

Adds `ease-search-bar-az` — an animated search bar with a CSS-drawn search icon, a clear button that appears on typing, focus glow, and multiple style variants.

### How is it used?

The maintainer should copy `style.css` into `components/search-bar.css` and import it.

```html
<div class="ease-search-bar-az rounded">
  <span class="ease-search-bar-icon-az">
    <svg><!-- search icon --></svg>
  </span>
  <input
    class="ease-search-bar-input-az"
    type="search"
    placeholder="Search..."
  />
  <button class="ease-search-bar-clear-az">&times;</button>
</div>
```

Variants: `.rounded`, `.with-button`, `.expanded`, `.sm`, `.lg`.

### Why is it useful?

1. **Animated focus** — border color, glow shadow, and icon color transition smoothly on focus
2. **Clear button** — appears with a scale animation when input has text (pure CSS via `:placeholder-shown`)
3. **Size variants** — `.sm` and `.lg` scale the entire search bar consistently
