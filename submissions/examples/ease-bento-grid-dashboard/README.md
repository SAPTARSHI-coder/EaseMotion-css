# ease-bento-grid-dashboard

A responsive Bento Grid dashboard layout with content-aware auto-span sizing, scroll-triggered stagger entrance, live pulse-indicator cards, and drag-to-reorder affordance — going beyond a static bento grid demo toward something dashboard-realistic.

## Why this is different

Most bento grid examples use hardcoded `grid-template-areas` and load-time animations. This one adds:

- **Content-aware auto-span** — cards declare their own size via `data-size="1x1" | "2x1" | "1x2" | "2x2"`, so the grid layout is driven by data attributes rather than fixed template areas — easier to reorder or extend
- **Scroll-triggered stagger entrance** — cards fade/slide in with staggered delays as they enter the viewport via `IntersectionObserver`, not just on page load
- **Live pulse indicator cards** — a pure-CSS animated status dot (`@keyframes` ripple) for "live" metrics, no JS polling required
- **Drag-to-reorder affordance** — visual drag/drop states (ghost outline, grab cursor, opacity feedback) with working reorder logic in the demo
- **Density variant** — `.ease-bento-grid--compact` modifier for tighter dashboard layouts

## Classes

| Class | Description |
|---|---|
| `ease-bento-grid` | Grid container |
| `ease-bento-grid--compact` | Tighter gap/padding variant |
| `ease-bento-card` | Individual dashboard card |
| `ease-bento-card--visible` | Applied on scroll-into-view (via JS) |
| `ease-bento-card--drag-ghost` | Drag-over placeholder state |
| `ease-bento-card__title` | Card label |
| `ease-bento-card__value` | Main metric value |
| `ease-bento-card__subtext` | Secondary supporting text |
| `ease-bento-pulse` | Live status indicator wrapper |
| `ease-bento-pulse-dot` | Animated pulsing dot |

## Usage

1. Link `style.css` and include the script block from `demo.html`.
2. Add cards with a `data-size` attribute to control their grid span:

```html
<div class="ease-bento-grid" id="bentoGrid">
  <div class="ease-bento-card" data-size="2x1" draggable="true">
    <p class="ease-bento-card__title">Live Visitors</p>
    <p class="ease-bento-card__value">2,481</p>
    <span class="ease-bento-pulse"><span class="ease-bento-pulse-dot"></span>Live</span>
  </div>
</div>