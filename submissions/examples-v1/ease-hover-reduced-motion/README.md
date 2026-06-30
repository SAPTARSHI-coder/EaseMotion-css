# fix: ease-hover-grow and ease-hover-lift reduced motion guard

## Problem

`ease-hover-grow` and `ease-hover-lift` were animating even when
the user had `prefers-reduced-motion` enabled in their OS settings.

## Fix

Wrapped both classes inside:

```css
@media (prefers-reduced-motion: no-preference) { ... }
```

This disables animations for users who prefer reduced motion,
improving accessibility.

## Affected Classes

- `ease-hover-grow`
- `ease-hover-lift`

## How to Test

1. Enable "Reduce Motion" in OS accessibility settings
2. Open demo.html
3. Hover over buttons — no animation should occur
