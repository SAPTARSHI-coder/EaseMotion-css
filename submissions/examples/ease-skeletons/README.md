# ease-skeleton — Skeleton / Shimmer Loading Component

**Fixes:** Issue #11473

## Overview

A pure CSS shimmer placeholder component that replaces blank loading
states with animated placeholders mimicking the shape of upcoming
content. Zero JavaScript. Dark mode via CSS tokens.
`prefers-reduced-motion` safe.

## Usage

```html
<!-- Text lines -->
<div class="ease-skeleton-group">
  <div class="ease-skeleton ease-skeleton--text"></div>
  <div class="ease-skeleton ease-skeleton--text"></div>
  <div class="ease-skeleton ease-skeleton--text"></div>
</div>

<!-- Profile card -->
<div class="ease-skeleton-row">
  <div class="ease-skeleton ease-skeleton--avatar"></div>
  <div class="ease-skeleton-group" style="flex:1;">
    <div class="ease-skeleton ease-skeleton--text" style="width:70%"></div>
    <div class="ease-skeleton ease-skeleton--text" style="width:45%"></div>
  </div>
</div>

<!-- Article card -->
<div class="ease-skeleton ease-skeleton--thumbnail"></div>
<div class="ease-skeleton ease-skeleton--text"></div>
<div class="ease-skeleton ease-skeleton--badge"></div>

<!-- Button placeholder -->
<div class="ease-skeleton ease-skeleton--btn"></div>
```

## Shape Variants

| Class | Shape | Dimensions |
|---|---|---|
| `.ease-skeleton--text` | Text line | `height: 1rem`, `width: 100%` |
| `.ease-skeleton--avatar` | Circle | `3rem × 3rem` |
| `.ease-skeleton--avatar.ease-skeleton--sm` | Small circle | `2rem × 2rem` |
| `.ease-skeleton--avatar.ease-skeleton--lg` | Large circle | `4.5rem × 4.5rem` |
| `.ease-skeleton--card` | Full card | `width: 100%`, `height: 180px` |
| `.ease-skeleton--thumbnail` | Image block | `width: 100%`, `height: 120px` |
| `.ease-skeleton--btn` | Button | `8rem × 2.25rem` |
| `.ease-skeleton--badge` | Badge / pill | `4rem × 1.25rem` |

## Speed Variants

| Class | Duration |
|---|---|
| `.ease-skeleton--fast` | 0.8s |
| *(default)* | 1.6s |
| `.ease-skeleton--slow` | 2.8s |

## Staggered Delays

```html
<div class="ease-skeleton ease-skeleton--text"></div>
<div class="ease-skeleton ease-skeleton--text ease-skeleton-delay-100"></div>
<div class="ease-skeleton ease-skeleton--text ease-skeleton-delay-200"></div>
<div class="ease-skeleton ease-skeleton--text ease-skeleton-delay-300"></div>
```

## CSS Token Customisation

```css
:root {
  --ease-skeleton-base:     #e2e8f0;  /* background color */
  --ease-skeleton-shine:    #f8fafc;  /* shimmer highlight */
  --ease-skeleton-radius:   6px;      /* border radius */
  --ease-skeleton-duration: 1.6s;     /* sweep duration */
}
```

Dark mode overrides are built in — no extra work needed.

## How the Shimmer Works

```css
@keyframes ease-kf-shimmer {
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
}

.ease-skeleton {
  background-image: linear-gradient(
    90deg,
    var(--ease-skeleton-base)   0%,
    var(--ease-skeleton-shine) 50%,
    var(--ease-skeleton-base) 100%
  );
  background-size: 200% 100%;
  animation: ease-kf-shimmer 1.6s ease-in-out infinite;
}
```

A gradient wider than the element (`200%`) sweeps left to right by
animating `background-position` — no pseudo-elements, no extra markup.

## Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  .ease-skeleton {
    animation: none;
    background-image: none;
    background-color: var(--ease-skeleton-base);
  }
}
```

Static placeholder shown — no motion for users who need it.

## Acceptance Criteria

- [x] `ease-kf-shimmer` keyframe — gradient sweep animation
- [x] `.ease-skeleton` base class
- [x] `.ease-skeleton--text` variant
- [x] `.ease-skeleton--avatar` variant (sm, default, lg)
- [x] `.ease-skeleton--card` variant
- [x] `.ease-skeleton--thumbnail` variant
- [x] `.ease-skeleton--btn` variant
- [x] `.ease-skeleton--badge` variant
- [x] Dark mode via CSS custom properties
- [x] Speed variants (fast, slow)
- [x] Staggered delay utilities
- [x] Layout helpers (`.ease-skeleton-group`, `.ease-skeleton-row`)
- [x] `prefers-reduced-motion` — static placeholder, no motion
- [x] Live toggle demo (skeleton → real content)
- [x] Zero JavaScript
- [x] No `core/` or `components/` files modified