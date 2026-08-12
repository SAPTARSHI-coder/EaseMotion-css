# Skeleton Loading Utilities

## 1. What does this do?

Adds five composable skeleton loading utility classes to EaseMotion CSS:

| Class | Role |
|---|---|
| `.ease-skeleton` | Base class — sweeping shimmer gradient, rounded corners |
| `.ease-skeleton-text` | Text-line placeholder, auto-narrows last sibling to 65% |
| `.ease-skeleton-avatar` | Circular placeholder for profile photos and avatars |
| `.ease-skeleton-card` | Card-shaped placeholder for widgets and content previews |
| `.ease-skeleton-pulse` | Animation modifier — replaces shimmer with opacity pulse |

All classes expose a CSS custom property API for theming and include
full `prefers-reduced-motion` support.

---

## 2. How is it used?

### Base usage — compose base + shape

```html
<!-- Text lines (paragraph skeleton) -->
<div class="ease-skeleton ease-skeleton-text"></div>
<div class="ease-skeleton ease-skeleton-text"></div>
<div class="ease-skeleton ease-skeleton-text"></div>

<!-- Avatar -->
<div class="ease-skeleton ease-skeleton-avatar"></div>

<!-- Card -->
<div class="ease-skeleton ease-skeleton-card"></div>
```

### Adding the pulse animation modifier

```html
<!-- Shimmer (default) -->
<div class="ease-skeleton ease-skeleton-card"></div>

<!-- Pulse (lighter, simpler animation) -->
<div class="ease-skeleton ease-skeleton-card ease-skeleton-pulse"></div>
<div class="ease-skeleton ease-skeleton-text ease-skeleton-pulse"></div>
<div class="ease-skeleton ease-skeleton-avatar ease-skeleton-pulse"></div>
```

### Composed profile card pattern

```html
<div class="ease-skeleton-profile-row">
  <div class="ease-skeleton ease-skeleton-avatar"></div>
  <div class="ease-skeleton-text-stack">
    <div class="ease-skeleton ease-skeleton-text" style="width:55%;"></div>
    <div class="ease-skeleton ease-skeleton-text"></div>
  </div>
</div>
```

### CSS variable API

```html
<!-- Custom brand colours -->
<div style="
  --skeleton-bg:        #1e293b;
  --skeleton-highlight: #334155;
  --skeleton-shine:     #475569;
">
  <div class="ease-skeleton ease-skeleton-card"></div>
  <div class="ease-skeleton ease-skeleton-text"></div>
</div>

<!-- Custom animation speed -->
<div class="ease-skeleton ease-skeleton-card"
     style="--skeleton-shimmer-duration: 0.9s;"></div>

<!-- Custom avatar size -->
<div class="ease-skeleton ease-skeleton-avatar"
     style="--skeleton-avatar-size: 56px;"></div>

<!-- Custom card height -->
<div class="ease-skeleton ease-skeleton-card"
     style="--skeleton-card-height: 260px;"></div>
```

---

## 3. Why is it useful?

EaseMotion CSS already ships `.ease-skeleton-shimmer`, `.ease-skeleton-pulse`
(animation only), and `.ease-skeleton-block` in `core/animations.css`, plus
basic `.ease-skeleton` and shape classes in `components/skeleton.css`.

This submission **extends and enhances** that foundation with:

- **Composable modifier pattern** — `ease-skeleton` is the base, shape
  classes add geometry, and `ease-skeleton-pulse` swaps the animation.
  This matches EaseMotion's existing BEM-style utility composition model.

- **Full CSS variable API** — `--skeleton-bg`, `--skeleton-highlight`,
  `--skeleton-shine`, `--skeleton-shimmer-duration`, `--skeleton-pulse-duration`,
  `--skeleton-avatar-size`, and `--skeleton-card-height` all allow per-element
  theming without extra classes.

- **Dark-mode-aware by default** — Variables are redefined under
  `@media (prefers-color-scheme: dark)` and `[data-theme="dark"]`,
  matching EaseMotion's existing dark-mode token system.

- **`prefers-reduced-motion` fallback** — All animations are stripped and
  replaced with a static placeholder, so skeletons remain visible and
  usable without any motion.

- **Size variants** — Avatar (`-sm`, `-lg`, `-xl`) and card (`-sm`, `-lg`)
  size modifiers follow the same naming pattern as existing EaseMotion utilities.

- **Composition helpers** — `.ease-skeleton-profile-row` and
  `.ease-skeleton-text-stack` provide pre-built layout shells for the most
  common skeleton UI patterns (profile row, article preview, feed items).

- **Performance** — Only `background-position` (shimmer) or `opacity` (pulse)
  are animated. Both are GPU-compositor-friendly and cause no layout shifts.
  `will-change` is set only on the animated property.
