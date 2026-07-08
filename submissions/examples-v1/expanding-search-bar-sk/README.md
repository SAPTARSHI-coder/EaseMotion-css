# CSS-Only Expanding Search Bar

## What does this do?
A search bar that expands from an icon-only collapsed state to a full input field when focused, using `:focus-within` — no JavaScript required for the expand/collapse behavior.

## How is it used?

```html
<div class="search-bar">
  <span class="search-bar__icon" aria-hidden="true">
    <!-- search SVG icon -->
  </span>
  <input class="search-bar__input" type="search" placeholder="Search…" aria-label="Search">
  <button class="search-bar__clear" aria-label="Clear search">×</button>
</div>

<!-- dark variant -->
<div class="search-bar search-bar--dark">…</div>

<!-- large variant -->
<div class="search-bar search-bar--lg">…</div>
```

CSS custom properties for theming:
```css
--search-collapsed-width: 44px;
--search-expanded-width: 280px;
--search-border-focus: #6366f1;
--search-duration: 0.3s;
```

## Why is it useful?
Demonstrates `:focus-within` and `:has()` as pure CSS interaction primitives — the bar expands on focus, the clear button appears only when input has content (via `:has(:not(:placeholder-shown))`), all without a single line of JS controlling UI state. Fits EaseMotion CSS's philosophy of CSS-first animation and interaction.
