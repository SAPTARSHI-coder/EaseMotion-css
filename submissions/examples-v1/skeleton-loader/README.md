# Animated Skeleton Loader Collection

A pure CSS collection of shimmer-sweep and pulse skeleton loading placeholders covering the most common content shapes — text lines, avatars, image blocks, cards, list items, profile headers, and media rows. Zero JavaScript, zero dependencies.

---

## Preview

| Variant | Animation |
|---------|-----------|
| Shimmer | A light gradient band sweeps left-to-right on a continuous loop via `background-position` |
| Pulse | Placeholder opacity fades 1 → 0.4 → 1 on a loop with staggered delays |

Both variants use GPU-friendly properties (`background-position`, `opacity`) for smooth, low-cost animation.

---

## Files

```
submissions/examples/skeleton-loader/
├── demo.html    ← all variants shown together
├── style.css    ← all skeleton classes
└── README.md
```

---

## Classes

### Base animation classes

| Class | Description |
|-------|-------------|
| `ease-skeleton` | Shimmer sweep animation via `background-position` |
| `ease-skeleton-pulse` | Pulse opacity animation |

### Shape classes (combine with base)

| Class | Description |
|-------|-------------|
| `ease-skeleton-text` | Text line — 14px tall, full width, last-child auto-shortens to 70% |
| `ease-skeleton-avatar` | Circle — combine with size modifier |
| `ease-skeleton-image` | Rectangle block — combine with size modifier |
| `ease-skeleton-btn` | Button placeholder — 36px tall |
| `ease-skeleton-badge` | Pill badge placeholder |

### Size modifiers

| Class | Size |
|-------|------|
| `ease-skeleton-avatar-sm` | 32 × 32 px |
| `ease-skeleton-avatar-md` | 48 × 48 px |
| `ease-skeleton-avatar-lg` | 64 × 64 px |
| `ease-skeleton-image-sm` | height 80px |
| `ease-skeleton-image-md` | height 140px |
| `ease-skeleton-image-lg` | height 200px |

### Layout helpers

| Class | Description |
|-------|-------------|
| `ease-skeleton-card` | Flex column container for card shape |
| `ease-skeleton-list-item` | Flex row: avatar + body |
| `ease-skeleton-list-item-body` | Flex column body inside list item |
| `ease-skeleton-profile` | Flex row: large avatar + body |
| `ease-skeleton-profile-body` | Flex column body inside profile |
| `ease-skeleton-media` | Flex row: thumbnail + body |
| `ease-skeleton-media-thumb` | 80 × 60px thumbnail slot |
| `ease-skeleton-media-body` | Flex column body inside media row |

---

## Usage

### Shimmer — text paragraph

```html
<div class="ease-skeleton ease-skeleton-text w-full"></div>
<div class="ease-skeleton ease-skeleton-text w-3/4"></div>
<div class="ease-skeleton ease-skeleton-text w-full"></div>
<div class="ease-skeleton ease-skeleton-text"></div><!-- last-child → 70% -->
```

### Shimmer — card

```html
<div class="ease-skeleton-card">
  <div class="ease-skeleton ease-skeleton-image ease-skeleton-image-md"></div>
  <div class="ease-skeleton ease-skeleton-text w-1/2" style="height:18px"></div>
  <div class="ease-skeleton ease-skeleton-text w-full"></div>
  <div class="ease-skeleton ease-skeleton-text w-3/4"></div>
  <div class="ease-skeleton ease-skeleton-btn w-1/2"></div>
</div>
```

### Shimmer — list item (avatar + lines)

```html
<div class="ease-skeleton-list-item">
  <div class="ease-skeleton ease-skeleton-avatar ease-skeleton-avatar-md"></div>
  <div class="ease-skeleton-list-item-body">
    <div class="ease-skeleton ease-skeleton-text w-1/2"></div>
    <div class="ease-skeleton ease-skeleton-text w-3/4"></div>
  </div>
</div>
```

### Pulse variant — swap `ease-skeleton` for `ease-skeleton-pulse`

```html
<div class="ease-skeleton-pulse ease-skeleton-avatar ease-skeleton-avatar-lg"></div>
<div class="ease-skeleton-pulse ease-skeleton-text w-full" style="height:14px"></div>
```

---

## Animation Details

### Shimmer — `ease-shimmer`
```css
.ease-skeleton {
  background: linear-gradient(
    90deg,
    var(--ease-skeleton-base)      0%,
    var(--ease-skeleton-base)      30%,
    var(--ease-skeleton-highlight) 50%,
    var(--ease-skeleton-base)      70%,
    var(--ease-skeleton-base)      100%
  );
  background-size: 200% 100%;
  animation: ease-shimmer 1.5s linear infinite;
}
@keyframes ease-shimmer {
  0%   { background-position: 100% 0; }
  100% { background-position: -100% 0; }
}
```

Only `background-position` is animated — GPU-composited, no layout cost.

### Pulse — `ease-pulse`
```css
.ease-skeleton-pulse {
  animation: ease-pulse 1.8s ease-in-out infinite;
}
@keyframes ease-pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}
```

Only `opacity` is animated — GPU-composited, no layout cost. Child elements get staggered `animation-delay` for a natural wave feel.

---

## Theming

All colours are CSS custom properties on `:root`:

```css
:root {
  --ease-skeleton-base:      #e2e8f0;
  --ease-skeleton-highlight: #f8fafc;
}
```

Swap to match any brand colour scheme.

---

## Accessibility

- `prefers-reduced-motion` disables all animations; skeletons remain fully visible as solid blocks
- No ARIA required on skeleton elements — they are decorative placeholders. Replace them with real content (and add appropriate ARIA to the real content) once loaded.

---

## Browser Support

Chrome 88+, Firefox 85+, Safari 14+. Uses `background-position` animation, `opacity` animation, and CSS custom properties — all widely supported.

---

## Contributor

**@thakurakanksha288** — GSSoC 2026 participant  
Issue: [#20324](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/20324)