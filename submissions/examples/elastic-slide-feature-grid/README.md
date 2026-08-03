# CSS Elastic-Slide Feature Grid

Submission for Issue #54412

## What this adds

A reusable CSS feature grid component with elastic slide-in animations,
staggered entrance, icon bounce on hover, shimmer effect, and scroll-driven
reveal support. Fully accessible, fully responsive. Zero JavaScript required.

## HTML Structure

```html
<div class="esfg-grid esfg-grid--3">

  <div class="esfg-card esfg-card--accent esfg-card--shimmer">
    <div class="esfg-icon esfg-icon--green">⚡</div>
    <h3 class="esfg-card-title">Feature Title</h3>
    <p class="esfg-card-desc">Feature description text goes here.</p>
    <span class="esfg-card-tag esfg-card-tag--green">Tag</span>
    <a href="#" class="esfg-card-link">Learn more →</a>
  </div>

  <!-- more cards... -->

</div>
```

## Grid Layout Classes

| Class | Columns |
|---|---|
| `esfg-grid` | Auto-fill, min 280px |
| `esfg-grid--2` | 2 columns |
| `esfg-grid--3` | 3 columns |
| `esfg-grid--4` | 4 columns |

## Card Span Classes (Bento Grid)

| Class | Effect |
|---|---|
| `esfg-card--wide` | Spans 2 columns |
| `esfg-card--tall` | Spans 2 rows |
| `esfg-card--full` | Full row width |

## Slide Direction Variants

| Class | Direction |
|---|---|
| (default) | Slide up |
| `esfg-card--from-left` | Slide from left |
| `esfg-card--from-right` | Slide from right |
| `esfg-card--from-top` | Slide from top |
| `esfg-card--pop` | Scale pop from center |
| `esfg-card--scroll` | Scroll-driven reveal |

## Card Style Variants

| Class | Effect |
|---|---|
| `esfg-card--accent` | Gradient top border |
| `esfg-card--shimmer` | Shimmer sweep on hover |
| `esfg-card--glass` | Frosted glass background |
| `esfg-card--dark` | Dark slate theme |
| `esfg-card--featured` | Highlighted gradient background |

## Icon Color Variants

| Class | Color |
|---|---|
| (default) | Indigo |
| `esfg-icon--green` | Green |
| `esfg-icon--amber` | Amber |
| `esfg-icon--rose` | Rose |
| `esfg-icon--cyan` | Cyan |
| `esfg-icon--purple` | Purple |

## Card Tag Color Variants

| Class | Color |
|---|---|
| `esfg-card-tag` | Indigo (default) |
| `esfg-card-tag--green` | Green |
| `esfg-card-tag--amber` | Amber |
| `esfg-card-tag--rose` | Rose |
| `esfg-card-tag--cyan` | Cyan |

## Speed Variants (on grid)

| Class | Duration |
|---|---|
| `esfg-grid--fast` | 0.35s |
| (default) | 0.6s |
| `esfg-grid--slow` | 1s |

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--esfg-gap` | `1.5rem` | Grid gap |
| `--esfg-radius` | `16px` | Card border radius |
| `--esfg-duration` | `0.6s` | Animation duration |
| `--esfg-ease` | spring cubic-bezier | Elastic easing |
| `--esfg-color-bg` | `#ffffff` | Card background |
| `--esfg-color-border` | `#e2e8f0` | Card border |
| `--esfg-color-text` | `#0f172a` | Title text color |
| `--esfg-color-muted` | `#64748b` | Description text |
| `--esfg-color-accent` | `#4f46e5` | Accent color |

## Animations

| Keyframe | Effect |
|---|---|
| `esfg-slide-up` | Slide + elastic from below |
| `esfg-slide-left` | Slide + elastic from left |
| `esfg-slide-right` | Slide + elastic from right |
| `esfg-slide-down` | Slide + elastic from above |
| `esfg-pop` | Scale pop with overshoot |
| `esfg-icon-bounce` | Icon bounces on card hover |
| `esfg-shimmer` | Light sweep across card on hover |
| `esfg-reveal` | Scroll-driven fade-up |

## Scroll-Driven Reveal

```html
<div class="esfg-card esfg-card--scroll">...</div>
```

Uses `animation-timeline: view()` — no JavaScript, no IntersectionObserver.
Supported in Chrome 115+, Edge 115+. Falls back gracefully (visible, no animation).

## Accessibility

- Stagger uses `:nth-child` — no aria changes needed
- All cards are valid semantic HTML
- `prefers-reduced-motion`: all animations and hover transforms disabled
- Tab-focusable links with visible focus states (browser default)

## Browser Support

| Feature | Chrome | Edge | Firefox | Safari |
|---|---|---|---|---|
| CSS animations | all | all | all | all |
| CSS Grid | all | all | all | all |
| `animation-timeline: view()` | 115+ | 115+ | 121+ | — |
| `prefers-reduced-motion` | all | all | all | all |

## Demo Sections

1. SaaS feature grid (3 columns, slide-up stagger, shimmer)
2. Metric / stat cards (4 columns, pop animation, progress bars)
3. Bento grid (mixed spans, directional slides per card)
4. Dark variant (dark cards on dark background)
5. Glass cards (frosted glass on gradient background)
6. Scroll-driven reveal (animation-timeline: view())
