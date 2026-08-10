# EaseMotion — Native CSS Scroll-Driven Animations

Demonstrates `scroll-timeline` and `view-timeline` — the native CSS APIs for scroll-driven animation, requiring zero JavaScript.

## Features

| Feature | Technique | Description |
|---------|-----------|-------------|
| Reading progress bar | `scroll-timeline` | Fixed bar at the top fills from 0% → 100% as the page scrolls |
| Scroll-reveal cards | `view-timeline` | Each card fades/slides in as it enters the viewport, with staggered range offsets |
| Parallax layers | `scroll-timeline` | Two pseudo-element layers drift at different speeds |

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Demo page with progress bar, reveal cards, parallax, and code snippets |
| `style.css` | All animation keyframes, timeline declarations, and layout styles |

## Browser Support

- Chrome 115+ — full support for `scroll-timeline` and `view-timeline`
- Firefox / Safari — not yet supported; content remains functional but static (no scroll-driven effect)
- A `@supports` fallback ensures the progress bar is visible in all browsers

## Proposed EaseMotion Utility Classes

These classes could be added to `core/animations.css` and `core/utilities.css`:

```css
/* Scroll timeline utilities */
.ease-scroll-timeline {
  scroll-timeline-name: --ease-scroll;
  scroll-timeline-axis: block;
}
.ease-view-timeline {
  view-timeline-name: --ease-view;
  view-timeline-axis: block;
}
.ease-animate-scroll {
  animation-timeline: --ease-scroll;
}
.ease-animate-view {
  animation-timeline: view();
}

/* Range presets */
.ease-scroll-range-cover { animation-range: cover 0% cover 100%; }
.ease-scroll-range-contain { animation-range: contain 0% contain 100%; }
.ease-scroll-range-enter { animation-range: entry 0% entry 100%; }
.ease-scroll-range-exit { animation-range: exit 0% exit 100%; }

/* Scroll-progress component */
.ease-scroll-progress {
  position: fixed;
  top: 0;
  height: 4px;
  background: var(--ease-color-primary, #6366f1);
  scroll-timeline-name: --ease-page-scroll;
  scroll-timeline-axis: block;
  animation: ease-scroll-progress linear forwards;
  animation-timeline: --ease-page-scroll;
}

@keyframes ease-scroll-progress {
  from { width: 0%; }
  to { width: 100%; }
}
```
