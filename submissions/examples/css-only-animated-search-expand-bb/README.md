# CSS-Only Animated Search Expand

An expandable search input that animates from a compact icon to a full search bar on hover or focus.

## What does this do?

Provides a search input that starts as a small circular icon button and smoothly expands to a full-width search bar when hovered or focused. The search icon rotates and changes color during the animation.

## How is it used?

```html
<div class="search-expand">
  <input
    type="search"
    class="search-expand__input"
    placeholder="Search..."
    aria-label="Search"
  />
  <svg class="search-expand__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
</div>
```

### Variants

```html
<div class="search-expand search-expand--pill">...</div>
<div class="search-expand search-expand--square">...</div>
<div class="search-expand search-expand--large">...</div>
<div class="search-expand search-expand--dark">...</div>
```

## Why is it useful?

- **Space-efficient** — starts as a small icon, expands on interaction
- **Smooth animation** — cubic-bezier easing for natural feel
- **Accessible** — keyboard focusable, `aria-label` for screen readers
- **Multiple variants** — pill, square, large, and dark themes
- **Reduced motion** — transitions disabled when `prefers-reduced-motion` is active
- **Production-ready** — suitable for navbars, toolbars, and search-heavy interfaces
