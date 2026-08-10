# Skeleton Loading Component

A pure CSS skeleton placeholder system for loading states. No JavaScript required — just add the classes to your HTML while data is fetching.

## Files

- `demo.html` — Live preview with pulse, shimmer, and dark mode variants
- `style.css` — All skeleton styles, animations, and layout helpers

## Classes

| Class | Description |
|-------|-------------|
| `.skeleton` | Base placeholder block |
| `.skeleton-pulse` | Opacity pulse animation |
| `.skeleton-shimmer` | Gradient sweep animation |
| `.skeleton-text` | Single-line text placeholder |
| `.skeleton-text-short` | 60% width text line |
| `.skeleton-text-medium` | 80% width text line |
| `.skeleton-circle` | Avatar placeholder (3rem) |
| `.skeleton-circle-sm` | Small avatar (2rem) |
| `.skeleton-circle-lg` | Large avatar (4rem) |
| `.skeleton-image` | 16:9 aspect-ratio image placeholder |
| `.skeleton-button` | Button-shaped placeholder |
| `.skeleton-card` | Wrapper for card-style layouts |
| `.skeleton-dark` | Dark mode color scheme |

## CSS Custom Properties

Override these on `.skeleton` or any parent:

```css
.skeleton {
  --skeleton-base: #e5e7eb;        /* Background color */
  --skeleton-highlight: #f3f4f6;     /* Shimmer gradient peak */
  --skeleton-text-height: 0.875rem;  /* Text line height */
  --skeleton-gap: 0.75rem;           /* Space between lines */
  --skeleton-radius: 0.375rem;       /* Border radius */
  --skeleton-speed: 1.6s;            /* Pulse duration */
  --skeleton-shimmer-speed: 1.8s;    /* Shimmer sweep duration */
}