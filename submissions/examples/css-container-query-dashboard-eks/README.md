# Container Query Dashboard

A production-ready demo showcasing **CSS container queries** (`@container`), the **`light-dark()` CSS function**, and **`oklch()` color space** — three powerful modern CSS features with zero JavaScript.

## Features Demonstrated

| Feature | Usage | Browser Support |
|---------|-------|----------------|
| `container-type: inline-size` | Declares cards as query containers | Chrome 105+, Edge 105+, Safari 16.0+, Firefox 110+ |
| `@container card (min-width: 400px)` | Cards adapt layout to their own width | same |
| `@container card (min-width: 500px)` | Two-column body at wider container | same |
| `light-dark(light, dark)` | Automatic color scheme adaptation | Chrome 123+, Edge 123+, Safari 17.5+, Firefox 120+ |
| `oklch()` | Perceptually-uniform modern color space | Chrome 111+, Edge 111+, Safari 15.4+, Firefox 113+ |

## How It Works

### Container queries (not media queries)

Traditional `@media` queries check the **viewport** width. With `@container`, each card checks its **own element's width**:

```css
.container-card {
  container-type: inline-size;
  container-name: card;
}

/* Applies when THIS specific card is >=400px wide */
@container card (min-width: 400px) {
  .card-value { font-size: 2.25rem; }
}

/* Applies when THIS specific card is >=500px wide */
@container card (min-width: 500px) {
  .card-body { grid-template-columns: 1fr 1fr; }
}
```

When a card sits in a narrow sidebar (~320px), it stays compact. The same card in a wide grid cell automatically expands. No viewport media queries needed.

### light-dark() for automatic theming

All colors use the native `light-dark()` function:

```css
:root {
  color-scheme: light dark;
  --bg-primary: light-dark(#ffffff, #0d1117);
  --text-primary: light-dark(#1f2328, #e6edf3);
}
```

The browser automatically selects the correct value based on the user's OS-level color scheme preference. No `prefers-color-scheme` media query needed.

### oklch() for modern color

Accent colors use the perceptually-uniform `oklch()` color space:

```css
--accent-green:  oklch(0.65 0.19 142);
--accent-blue:   oklch(0.65 0.17 257);
--accent-purple: oklch(0.60 0.18 296);
```

This ensures consistent perceived brightness across all accent colors.

## Accessibility

- Semantic HTML with proper landmarks (`<header>`, `<main>`, `<aside>`, `<footer>`)
- ARIA labels on all data visualizations (`aria-label` on chart elements)
- `:focus-visible` outline for keyboard navigation
- `prefers-reduced-motion` respected globally
- `prefers-contrast: high` increases border contrast
- `forced-colors: active` adapts to Windows High Contrast Mode
- Print stylesheet with simplified layout
- Responsive grid layout that collapses on narrow viewports

## Structure

```
css-container-query-dashboard-eks/
├── demo.html    — Semantic dashboard with sidebar + grid layout
├── style.css    — Container queries, light-dark(), oklch(), accessibility
└── README.md    — This file
```

## Zero Dependencies

No frameworks, no libraries, no npm packages — pure CSS and semantic HTML.
