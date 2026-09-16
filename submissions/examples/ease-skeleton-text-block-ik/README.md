# EaseMotion CSS — Article Text Skeleton Loader (`ease-skeleton-text-block-ik`)

Multi-line article text skeleton placeholder component (`ease-skeleton-pulse`) featuring linear gradient shimmer sweeps and responsive line widths.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides a content loading skeleton placeholder component (`ease-skeleton-pulse`) that simulates multi-paragraph article text with continuous background gradient shimmer sweeps (`ease-skel-sweep`).

---

## 2. How is it used?

Apply the `ease-skeleton-pulse` class to skeleton line shapes:

```html
<div class="article-skeleton">
  <div class="skel-line skel-heading ease-skeleton-pulse"></div>
  <div class="skel-line ease-skeleton-pulse"></div>
</div>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS improves perceived application loading speed. The Article Text Skeleton Loader delivers smooth 60fps GPU compositor gradient interpolation while respecting `prefers-reduced-motion` settings.
