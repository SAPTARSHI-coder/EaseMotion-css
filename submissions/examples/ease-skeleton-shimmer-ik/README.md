# EaseMotion CSS — Animated Skeleton Loader Shimmer (`ease-skeleton-shimmer-ik`)

Continuous GPU-accelerated linear-gradient shimmer sweeps (`ease-skeleton-shimmer`) for content loading placeholders with `prefers-reduced-motion` compliance.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides a shimmer placeholder class (`ease-skeleton-shimmer`) that applies a continuous CSS background gradient sweep to skeleton elements while dynamic data loads.

---

## 2. How is it used?

Apply the `ease-skeleton-shimmer` class to placeholder shapes (cards, text lines, avatars):

```html
<div class="card-placeholder">
  <div class="avatar ease-skeleton-shimmer"></div>
  <div class="line ease-skeleton-shimmer"></div>
</div>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS aims to enhance application perceived performance. Skeleton shimmer loaders provide smooth visual feedback during data fetching, utilizing GPU background-position interpolation for 60fps performance.
