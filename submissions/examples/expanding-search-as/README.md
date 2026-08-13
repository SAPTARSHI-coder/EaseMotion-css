# Expanding Search Input

### What does this do?

It is a compact search field that widens smoothly when focused, with a magnifier icon and an accent border and glow on focus.

### How is it used?

```html
<div class="search">
  <input type="search" class="search-input" placeholder="Search" aria-label="Search" />
  <svg class="search-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
</div>
```

The input sits at a compact width and grows when focused. The magnifier is an inline SVG, so there are no images to load.

### Why is it useful?

A search box that expands on focus saves header space until the user needs it. This animates the width and border on focus with a transition, so it needs no JavaScript. The input keeps its native `type="search"` behavior and an accessible label, and the width transition is disabled under `prefers-reduced-motion: reduce`.
