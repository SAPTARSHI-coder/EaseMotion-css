# Notification Badge with Pulse Animation

## What does this do?

Provides two notification badge variants — a **pulse dot** and a **numeric count badge** — that can be anchored to the corner of any icon or avatar using pure CSS and no JavaScript.

## Variants

### 1. Pulse dot (`badge--pulse`)

A small circular dot with two staggered ripple rings that expand outward and fade to transparent, creating a continuous "radar ping" effect.

```html
<button class="badge-wrap" type="button" aria-label="Notifications — new activity">
  <!-- icon SVG (aria-hidden) -->
  <span class="badge-icon" aria-hidden="true"><!-- SVG --></span>

  <!-- decorative pulse ring (aria-hidden) -->
  <span class="badge badge--pulse" aria-hidden="true"></span>

  <!-- screen-reader label -->
  <span class="visually-hidden">New notifications</span>
</button>
```

Use `badge--pulse-green` for an "online / active" indicator.

### 2. Count badge (`badge--count`)

A pill-shaped badge that expands horizontally for multi-digit numbers (1 → 99+) and caps gracefully.

```html
<button class="badge-wrap" type="button" aria-label="Notifications, 3 unread">
  <span class="badge-icon" aria-hidden="true"><!-- SVG --></span>
  <span class="badge badge--count" aria-hidden="true">3</span>
</button>
```

## CSS techniques

- `position: absolute` on `.badge` anchored to `position: relative` on `.badge-wrap`
- `::before` / `::after` pseudo-elements for the two staggered ripple rings — zero extra HTML
- `transform: scale()` + `opacity` for GPU-accelerated animation (no `width`/`height` changes)
- CSS custom properties for colours, sizes, and timing — easy to re-theme
- `outline` (not `border`) on the badge to create a gap between badge and surface without affecting layout
- `@media (prefers-reduced-motion: reduce)` disables looping pulse; dot and count remain visible
