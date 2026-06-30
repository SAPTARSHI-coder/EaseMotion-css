# Animated Breadcrumb Navigation

A premium animated breadcrumb trail with staggered slide-in effect per item and animated separators. Pure CSS, fully accessible, no JavaScript required.

---

## Overview

This submission demonstrates the `.ease-breadcrumb` component:

- **Animation technique:** Each `<li>` item slides in from left using `@keyframes ease-kf-breadcrumb-in` with staggered `animation-delay` via `nth-child` selectors.
- **Separator animation:** `::before` pseudo-elements fade in between items using `@keyframes ease-kf-sep-fade`.
- **Three separator variants:** Arrow (`›` — default), Slash (`/`), and Dot (`•`).
- **Accessibility:** Uses `<nav aria-label="breadcrumb">`, `<ol>`, and `aria-current="page"` on the current item.
- **Reduced motion:** Respects `prefers-reduced-motion` by skipping all animations.

---

## Usage

```html
<nav aria-label="breadcrumb">
  <ol class="ease-breadcrumb">
    <li class="ease-breadcrumb__item">
      <a href="/" class="ease-breadcrumb__link">Home</a>
    </li>
    <li class="ease-breadcrumb__item">
      <a href="/docs" class="ease-breadcrumb__link">Docs</a>
    </li>
    <li
      class="ease-breadcrumb__item ease-breadcrumb__item--current"
      aria-current="page"
    >
      Breadcrumb
    </li>
  </ol>
</nav>
```

### Separator Variants

| Class                        | Separator |
| ---------------------------- | --------- |
| `.ease-breadcrumb` (default) | `›` arrow |
| `.ease-breadcrumb--slash`    | `/` slash |
| `.ease-breadcrumb--dot`      | `•` dot   |

### CSS Variables

| Variable                | Default | Description                   |
| ----------------------- | ------- | ----------------------------- |
| `--breadcrumb-duration` | `0.45s` | Per-item animation duration   |
| `--breadcrumb-stagger`  | `0.08s` | Delay increment between items |
