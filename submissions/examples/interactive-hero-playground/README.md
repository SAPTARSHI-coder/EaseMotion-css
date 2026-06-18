# Interactive Asymmetric Hero Playground Section

A dark-themed hero landing section showcasing EaseMotion CSS animations at the viewport entry point. Asymmetric 3-column layout with live micro-animations.

## Layout

```text
┌─────────────────┬──────────────────┬─────────────────┐
│   Left Panel    │   Center CTA     │  Right Panel    │
│  Stacked glass  │  Headline +      │ Motion Inspector│
│  card preview   │  CTA buttons     │ with track bars │
│  (idle float)   │  class pills     │ and grid cells  │
└─────────────────┴──────────────────┴─────────────────┘
```

## Features

- **Left panel** — stacked glass cards with floating animation and skeleton shimmer
- **Center** — headline, CTA buttons, animated class name pill strip
- **Right panel** — Motion Inspector with animated track bars (Scale/Opacity/Rotate/Blur) and a 4-cell animation grid
- **Ambient glow** — radial gradient behind center, slowly pulses
- **Trigger State** button — activates a purple highlight state on the front card
- **Responsive** — left/right panels hide on mobile, center content remains

## Classes

| Class | Description |
|-------|-------------|
| `.ease-hero-playground` | Section container (3-col grid) |
| `.ease-hero-glow` | Ambient radial glow |
| `.ease-hero-glass` | Glass card base |
| `.ease-hero-left/right/center` | Column containers |
| `.ease-hero-card--front/back` | Stacked preview cards |
| `.ease-hero-badge` | "Interactive Demo" badge |
| `.ease-hero-pill` | Animated class name pill |
| `.ease-hero-inspector` | Motion inspector panel |
| `.ease-hero-track` | Inspector track row |
| `.ease-hero-grid` | 4-cell animation grid |

## Animations

| Animation | Target | Duration |
|-----------|--------|----------|
| `ease-hero-float` | Front card, inspector | 6s/7s infinite |
| `ease-hero-shimmer` | Skeleton bars | 2s infinite |
| `ease-hero-dot-pulse` | Active dot | 2s infinite |
| `ease-hero-track-anim` | Track fills | 3s staggered |
| `ease-hero-pill-drift` | Pills | 6s staggered |
| `ease-hero-pulse-glow` | Ambient glow | 8s infinite |

## Accessibility

- Left/right decorative panels marked `aria-hidden="true"`
- `prefers-reduced-motion`: all ambient animations disabled

Closes #12387
