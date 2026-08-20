# Overscroll Behavior Control Mixins — `overscroll-behavior-control-ps`

## What does this do?

Provides a comprehensive set of SCSS mixins that control `overscroll-behavior` on modals, drawers, sidebars, and any scrollable overlay — preventing unwanted scroll chaining from propagating to the parent document.

## How is it used?

### 1. Forward the partial in your SCSS

```scss
@use 'path/to/overscroll-behavior-control-ps' as *;
```

### 2. Apply mixins with `@include`

```scss
// Modal — contain scroll on both axes
.modal {
  @include overscroll-contain;
}

// Drawer — suppress all overscroll effects
.drawer {
  @include overscroll-none;
}

// Full page — restore browser default
.page-wrapper {
  @include overscroll-auto;
}

// Sidebar — lock vertical scroll, allow horizontal gestures
.sidebar {
  @include overscroll-y-contain;
}

// Carousel — lock horizontal scroll, allow vertical chaining
.carousel {
  @include overscroll-x-contain;
}

// Custom per-axis control
.custom-panel {
  @include overscroll-behavior(contain, auto);
}

// Apply only at a specific breakpoint (responsive)
.drawer-mobile {
  @include overscroll-responsive(768px, contain, contain);
}

// Apply inside prefers-reduced-motion query
.overlay {
  @include overscroll-reduced-motion(contain, contain);
}
```

### Mixin Reference

| Mixin | Parameters | Description |
|---|---|---|
| `overscroll-behavior($x, $y)` | `$x`, `$y`: `auto \| contain \| none` | Core mixin — full per-axis control with browser fallbacks |
| `overscroll-contain` | — | Contain scroll on both axes (modal/drawer default) |
| `overscroll-none` | — | Disable all overscroll effects (bounce/pull-to-refresh) |
| `overscroll-auto` | — | Restore browser default overscroll behaviour |
| `overscroll-y-contain` | — | Lock vertical scroll; allow horizontal gesture chaining |
| `overscroll-x-contain` | — | Lock horizontal scroll; allow vertical chaining |
| `overscroll-responsive($bp, $x, $y)` | `$bp`: min-width breakpoint | Apply overscroll rule inside a `@media (min-width)` block |
| `overscroll-reduced-motion($x, $y)` | `$x`, `$y` | Apply overscroll rule inside `prefers-reduced-motion: reduce` |

### CSS Variable Integration

The mixins read from EaseMotion CSS tokens when available:

```css
:root {
  --ease-overscroll-x: contain;
  --ease-overscroll-y: contain;
}
```

If these custom properties are not set, the mixins default to `contain`.

### Browser Fallback Chain

1. `overscroll-behavior` shorthand — all modern browsers
2. `overscroll-behavior-x` / `overscroll-behavior-y` — granular axis control
3. `-ms-scroll-chaining` — IE 11 and legacy Edge

## Why is it useful?

EaseMotion CSS powers animated UI elements such as modals, drawers, and overlays where scroll containment is critical for a polished user experience. Without `overscroll-behavior: contain`, a user scrolling a modal to its boundary causes the entire page to scroll — breaking immersion and animation continuity.

This mixin suite gives EaseMotion users a single, zero-friction API to apply correct scroll containment across all overlay patterns, with built-in browser compatibility, CSS variable integration, responsive breakpoint helpers, and a `prefers-reduced-motion` guard — all aligned to EaseMotion's token-first philosophy.
