# Modern Table Styling Utilities

Modern table styling with hover states, striped rows, bordered variants, and responsive scroll wrappers

## Features

- table-modern: clean modern table with subtle borders
- table-striped: alternating row background colors
- table-hover: row highlight on hover
- table-bordered: full grid borders
- table-compact: reduced padding for dense data
- table-responsive: horizontal scroll wrapper
- table-sortable: sort indicator styles
- table-primary/secondary header color variants
- Dark mode support for all table variants

## Usage

### Quick Start

```html
<!-- Add the CSS file to your project -->
<link rel="stylesheet" href="submissions/examples/table-modern-styling-tm/style.css">
```

## Design Tokens Used

- `var(--ease-color-primary)` — Primary brand color
- `var(--ease-color-secondary)` — Secondary accent color
- `var(--ease-color-neutral-50)` through `var(--ease-color-neutral-900)` — Neutral palette
- `var(--ease-color-success)`, `var(--ease-color-danger)`, `var(--ease-color-warning)`, `var(--ease-color-info)` — Semantic colors
- `var(--ease-radius-sm)`, `var(--ease-radius-md)`, `var(--ease-radius-lg)`, `var(--ease-radius-xl)` — Border radii
- `var(--ease-shadow-sm)` through `var(--ease-shadow-xl)` — Elevation levels
- `var(--ease-speed-fast)`, `var(--ease-speed-medium)` — Animation durations
- `var(--ease-ease)`, `var(--ease-ease-bounce)` — Easing functions
- `var(--ease-glow-primary)` — Glow effect token
- `var(--ease-space-1)` through `var(--ease-space-6)` — Spacing scale
- `var(--ease-font-sans)` — Typography
- `var(--ease-text-xs)` through `var(--ease-text-lg)` — Type scale

## Accessibility

- All animations respect `prefers-reduced-motion`
- Dark mode variants via `prefers-color-scheme: dark` query
- WCAG AA compliant color choices for focus indicators

## License

MIT — submitted to EaseMotion-css competition.
