# Scale-Hover Feature Grid

A responsive grid of feature cards that scale up smoothly on hover
or focus, designed for creative portfolio layouts — skills,
services, or project highlight sections.

## 1. What does this do?

Renders a responsive grid of cards. On hover (or keyboard focus),
the hovered card scales up slightly and lifts with a soft shadow and
accent border, while its icon scales and tilts a touch further for
emphasis — all other cards stay put, so the hovered item reads
clearly as the focus.

## 2. How is it used?

Open `demo.html` directly in any browser — no build step or server
required. Structure:

```html
<div class="sh-grid">
  <a class="sh-card" href="#">
    <div class="sh-card-icon">🎨</div>
    <h3 class="sh-card-title">Card Title</h3>
    <p class="sh-card-desc">Card description text.</p>
  </a>
  <!-- repeat .sh-card for each grid item -->
</div>
```

`.sh-grid` is a plain CSS grid that reflows from 3 columns down to 2
and then 1 as the viewport narrows. Each `.sh-card` can be any block
or link element — the demo uses `<a>` since feature cards are
commonly clickable, but the styles apply equally to a `<div>`.

### Key values to tune

- `.sh-grid { grid-template-columns: repeat(3, 1fr); }` — change the
  base column count
- `.sh-card:hover, .sh-card:focus-visible { transform: scale(1.06); }`
  — the hover scale amount (reduced to `1.03` under `560px` to avoid
  an oversized card on small/touch screens)
- `.sh-card-icon` hover transform (`scale(1.12) rotate(-4deg)`) —
  the icon's extra emphasis motion

## 3. Features

- **Pure CSS / HTML** — no JavaScript, hover/focus state only.
- **Scale-hover interaction** — smooth `transform: scale()` on the
  card plus a slightly larger, rotated scale on its icon, using an
  eased cubic-bezier curve for a natural, non-linear feel.
- **Fully responsive** — 3 columns on desktop, 2 columns under
  `900px`, 1 column under `560px`, with a reduced hover scale on
  narrow/touch viewports.
- **`prefers-reduced-motion` support** — removes all `transform`
  scaling on hover/focus, keeping only the border/shadow color
  change, so the card still indicates interactivity without motion.
- **Keyboard accessible** — `:focus-visible` receives the identical
  scale/shadow treatment as `:hover` plus a visible outline, so
  keyboard users get the same affordance as mouse users.

Fixes #56339.
