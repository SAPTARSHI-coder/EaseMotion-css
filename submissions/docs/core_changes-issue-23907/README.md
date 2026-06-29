# ease-timeline — Vertical Timeline Component

## 1. What does this do?

Adds a vertical timeline component with markers, content cards, multiple color variants, sizes, icon markers, compact mode, alternating branch layout, animated entry (staggered fade-in), and card shadow variant.

**Classes:**
- `.ease-timeline` — Timeline container with vertical line
- `.ease-timeline-item` — Each timeline entry
- `.ease-timeline-marker` — Circular dot/icon on the line
- `.ease-timeline-marker-{primary|success|warning|danger|info|muted}` — Color variants
- `.ease-timeline-marker-outline` — Outlined marker style
- `.ease-timeline-marker-{sm|lg}` — Size variants
- `.ease-timeline-marker-icon` — Icon inside marker
- `.ease-timeline-content` — Content card
- `.ease-timeline-content-header` — Title
- `.ease-timeline-content-time` — Date/timestamp
- `.ease-timeline-content-body` — Description
- `.ease-timeline-right` — Right-aligned variant
- `.ease-timeline-compact` — Dense spacing
- `.ease-timeline-branch` — Alternating left/right
- `.ease-timeline-card` — Card shadow variant
- `.ease-timeline-animated` — Staggered fade-in animation

## 2. How is it used?

```html
<div class="ease-timeline">
  <div class="ease-timeline-item">
    <span class="ease-timeline-marker ease-timeline-marker-success"></span>
    <div class="ease-timeline-content">
      <div class="ease-timeline-content-header">Milestone</div>
      <div class="ease-timeline-content-time">June 2026</div>
      <div class="ease-timeline-content-body">Description here.</div>
    </div>
  </div>
</div>
```

## 3. Why is this useful?

- **6 marker colors** — Semantic status indication
- **Icon markers** — Rich visual markers
- **Compact mode** — Dense layouts
- **Branch layout** — Alternating left/right on same side
- **Animated** — Staggered fade-in entries
- **Card variant** — Shadow/border styling
- **Reduced motion** — Respects `prefers-reduced-motion`
