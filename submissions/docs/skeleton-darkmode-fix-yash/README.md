# Skeleton Loader Dark Mode Fix

## What does this do?

It fixes the visual bug where the skeleton loader component (`.ease-skeleton`) has hardcoded light-theme colors (`#e2e8f0` and `#f1f5f9`), rendering as a bright shimmer in dark mode. This fix makes the loading shimmer translucent and dark-mode friendly.

## How is it used?

The fix introduces local variables on the `.ease-skeleton` rule block that adapt to dark mode automatically:

```css
.ease-skeleton {
  --ease-skeleton-bg-start: var(--ease-color-neutral-200, #e2e8f0);
  --ease-skeleton-bg-mid: var(--ease-color-neutral-100, #f1f5f9);

  background: linear-gradient(
    90deg,
    var(--ease-skeleton-bg-start) 25%,
    var(--ease-skeleton-bg-mid) 50%,
    var(--ease-skeleton-bg-start) 75%
  ) !important;
}

@media (prefers-color-scheme: dark) {
  .ease-skeleton {
    --ease-skeleton-bg-start: rgba(255, 255, 255, 0.06);
    --ease-skeleton-bg-mid: rgba(255, 255, 255, 0.12);
  }
}
```

## Why is it useful?

It prevents visual flashes and bright contrast anomalies when a user loads content under a dark mode layout. The skeleton blocks now blend smoothly with dark background tones.
