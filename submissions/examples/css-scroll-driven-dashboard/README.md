# CSS Scroll-Driven Dashboard

A production-quality analytics dashboard where every animation is purely scroll-driven — zero JavaScript. Combines three modern CSS scroll APIs: `scroll-timeline`, `view-timeline`, and `@property` registrations.

## What This Demo Shows

| Feature | CSS API | What Animates |
|---|---|---|
| **Page progress bar** | `scroll-timeline` + named timeline | Fills from 0→100% as page scrolls |
| **Stat counters** | `@property --num (<integer>)` + `view()` | Numbers count up from 0 as they enter viewport |
| **Skill bars** | `@property --pct (<percentage>)` + `view()` | Progress bars fill to target percentage on scroll |
| **Image reveals** | `view-timeline` + keyframes | Cards fade, scale, sharpen, and slide in |
| **Section progress bars** | Per-section `view-timeline-name` + named timeline | Each section's progress bar tracks its own scroll position |
| **`:nth-child(… of S)`** | Baseline 2024 selector | Skill bar gradients apply to each row in sequence |

## How It Works

**Page progress bar** — The header bar declares a named `scroll-timeline` on the page root:

```css
.scroll-progress {
  scroll-timeline-name: --page-progress;
  scroll-timeline-axis: block;
  animation: progress-scale linear both;
  animation-timeline: --page-progress;
}
```

**Stat counters** — `@property` registers `--num` as `<integer>`, `counter-reset` renders it, and `view()` timeline drives the animation:

```css
@property --num {
  syntax: '<integer>';
  initial-value: 0;
  inherits: false;
}

.stat-value::after {
  counter-reset: num var(--num);
  content: counter(num);
  animation: count-up 2s ease-out forwards;
  animation-timeline: view();
}
```

**Skill bars** — `@property` registers `--pct` as `<percentage>`, width uses the property, view timeline drives it:

```css
@property --pct {
  syntax: '<percentage>';
  initial-value: 0%;
  inherits: false;
}

.skill-fill {
  width: var(--pct);
  animation: fill-bar 2s ease-out forwards;
  animation-timeline: view();
}
```

## Accessibility

- Semantic HTML5 landmarks and ARIA roles
- `role="progressbar"` with `aria-valuemin/max` on the scroll progress bar
- `aria-label` on progress indicators
- `:focus-visible` on all interactive elements
- `prefers-reduced-motion: reduce` disables all animations
- `prefers-contrast: more` thickens borders
- `forced-colors: active` renders correctly in Windows High Contrast Mode
- Print styles hide progress bar, use black-on-white

## Browser Support

- `scroll-timeline` / `view-timeline`: Chrome 115+, Edge 115+
- `@property`: Chrome 85+, Edge 85+, Safari 16.4+, Firefox 128+
- `:nth-child(… of S)`: Chrome 111+, Firefox 113+, Safari 9+, Edge 111+
- Fallback: content remains fully functional but static in unsupported browsers

## Files

- `demo.html` — Dashboard with five scroll-driven animation sections
- `style.css` — Complete stylesheet with `@property`, `scroll-timeline`, `view-timeline`
- `README.md` — This documentation
