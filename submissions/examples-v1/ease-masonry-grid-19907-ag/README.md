# CSS Masonry Grid with Stagger Entrance

This submission implements the `ease-masonry-grid` component — a CSS-only masonry grid using native `columns` layout, with staggered `fade-in-up` entrance animations and hover zoom effects.

---

## How It Works

### Masonry Layout via CSS Columns

Unlike CSS Grid (which requires explicit row definitions), `columns` allows items to naturally fill vertical space and flow across columns — creating a true masonry effect:

```css
.ease-masonry-grid {
  columns: var(--ease-columns-count) 240px;
  column-gap: 20px;
}

.masonry-item {
  break-inside: avoid; /* prevents card from splitting across columns */
}
```

### Staggered Entrance

Each `.masonry-item` animates from `opacity: 0; translateY(24px)` to fully visible, with incremental `animation-delay` on each `nth-child`:

```css
.masonry-item:nth-child(1) {
  animation-delay: 0.05s;
}
.masonry-item:nth-child(2) {
  animation-delay: 0.15s;
}
/* ...and so on */
```

### Configurable Columns

The column count is driven by a CSS custom property:

```css
/* Default: 3 columns */
.ease-masonry-grid { --ease-columns-count: 3; }

/* Override per instance via HTML */
<div class="ease-masonry-grid" style="--ease-columns-count: 4;">
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Verify cards animate in one by one from bottom with a subtle upward slide.
3. Verify cards flow naturally across 3 columns with varying heights.
4. Hover any card — verify it lifts with a purple glow and the image inside zooms slightly.
5. Resize the window to verify responsive column collapse.
6. Enable `prefers-reduced-motion` — verify all animations are suppressed.
