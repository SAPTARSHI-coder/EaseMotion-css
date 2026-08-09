# Ease Skeleton

`ease-skeleton` is a lightweight CSS loading placeholder. Apply the base class to create an animated shimmer, then combine it with a shape class for a text line or avatar.

## Classes

| Class | Purpose |
| --- | --- |
| `.ease-skeleton` | Adds the animated linear-gradient shimmer. |
| `.ease-skeleton-text` | Creates a full-width text-line placeholder. |
| `.ease-skeleton-circle` | Creates a 3rem circular avatar placeholder. |
| `.ease-skeleton-card` | Styles a padded, bordered wrapper for a skeleton card. |

## Usage

```html
<link rel="stylesheet" href="style.css" />

<article class="ease-skeleton-card" aria-label="Loading profile" aria-busy="true">
  <span class="ease-skeleton ease-skeleton-circle" aria-hidden="true"></span>
  <div style="display: grid; flex: 1; gap: 0.75rem">
    <span class="ease-skeleton ease-skeleton-text" aria-hidden="true"></span>
    <span class="ease-skeleton ease-skeleton-text" style="width: 80%" aria-hidden="true"></span>
    <span class="ease-skeleton ease-skeleton-text" style="width: 60%" aria-hidden="true"></span>
  </div>
</article>
```

## Why it fits EaseMotion CSS

This dependency-free loader provides a clear, motion-aware loading state with small, reusable CSS classes. It supports accessible loading semantics and respects visitors who prefer reduced motion.
