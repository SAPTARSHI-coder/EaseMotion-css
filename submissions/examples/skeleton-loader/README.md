# Modern Shimmering Skeleton Loader States

GPU-accelerated skeleton loading placeholders with shimmer animation and dark mode support. Provides reusable CSS classes for common loading patterns: text lines, avatars, cards, and blocks.

## Features

- **Shimmer animation** — `@keyframes ease-kf-shimmer` slides a gradient across the element
- **Light & Dark mode** — automatically adapts via `@media (prefers-color-scheme: dark)`
- **Sizing helpers** — `.skeleton-avatar` (with `-sm` / `-lg`), `.skeleton-line` (with `-sm` / `-lg`), `.skeleton-card` (with `-sm`), `.skeleton-block`
- **GPU-accelerated** — animates `background-position` only
- **Reduced motion** — respects `prefers-reduced-motion`
- **Pure CSS** — no JavaScript required

## Usage

```html
<!-- Avatar -->
<div class="skeleton-shimmer skeleton-avatar"></div>

<!-- Text lines -->
<div class="skeleton-shimmer skeleton-line skeleton-line-lg"></div>
<div class="skeleton-shimmer skeleton-line"></div>

<!-- Card placeholder -->
<div class="skeleton-shimmer skeleton-card"></div>

<!-- Block / button -->
<div class="skeleton-shimmer skeleton-block"></div>
```

## Custom Gradient

Override the background to match your brand:

```css
.my-custom-skeleton {
  background: linear-gradient(
    90deg,
    rgba(var(--brand-rgb), 0.1) 25%,
    rgba(var(--brand-rgb), 0.2) 37%,
    rgba(var(--brand-rgb), 0.1) 63%
  );
  background-size: 400% 100%;
}
```
