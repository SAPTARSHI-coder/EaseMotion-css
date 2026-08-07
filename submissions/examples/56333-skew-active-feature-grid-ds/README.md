# Skew-Active Feature Grid

A responsive grid of feature cards that skew slightly on hover,
keyboard focus, or active press, designed for creative portfolio
layouts — skills, services, or project highlight sections.

## 1. What does this do?

Renders a responsive grid of cards. On hover, focus, or click/press,
the card shell skews a few degrees along the X axis while an accent
edge bar skews in sync and thickens slightly — but the inner content
(icon, title, description) is skewed in the opposite direction by
the same amount, so text and icons stay upright and readable while
only the card's silhouette leans. Pressing a card (`:active`) skews
it a touch further with a slight scale-down, giving a tactile "push"
feel.

## 2. How is it used?

Open `demo.html` directly in any browser — no build step or server
required. Structure:

```html
<div class="sk-grid">
  <a class="sk-card" href="#">
    <span class="sk-card-edge"></span>
    <div class="sk-card-inner">
      <div class="sk-card-icon">🎨</div>
      <h3 class="sk-card-title">Card Title</h3>
      <p class="sk-card-desc">Card description text.</p>
    </div>
  </a>
  <!-- repeat .sk-card for each grid item -->
</div>
```

`.sk-grid` reflows from 3 columns down to 2 and then 1 as the
viewport narrows. The `.sk-card-edge` element is what carries the
accent color bar along the card's left side — it's optional to
include visually, but keeping the markup means the skew-in-sync
effect matches the demo exactly.

### Key values to tune

- `.sk-card:hover { transform: skewX(-4deg); }` and the matching
  `.sk-card-inner` counter-skew (`skewX(4deg)`) — the base skew
  angle (reduced to `2deg` under `560px`)
- `.sk-card:active { transform: skewX(-6deg) scale(0.99); }` — the
  extra press-down skew and scale
- `.sk-card-edge { width: 4px; ... }` — accent bar thickness, which
  grows to `6px` on hover/focus/active

## 3. Features

- **Pure CSS / HTML** — no JavaScript, hover/focus/active state only.
- **Skew-active interaction** — the card shell and accent edge skew
  one direction while the inner content counter-skews the opposite
  direction by the same angle, keeping text upright while only the
  card's outline visually leans.
- **Tactile active state** — `:active` adds a slightly stronger skew
  plus a small scale-down for a pressed feel on click or tap.
- **Fully responsive** — 3 columns on desktop, 2 under `900px`, 1
  under `560px`, with a reduced skew angle on narrow/touch viewports
  to avoid visual clipping between stacked cards.
- **`prefers-reduced-motion` support** — removes all `skewX()`
  transforms on hover/focus/active, keeping only the border-color
  and accent-bar-width change, so interactivity is still signaled
  without motion.
- **Keyboard accessible** — `:focus-visible` receives the identical
  skew treatment as `:hover` plus a visible outline.

Fixes #56333.
