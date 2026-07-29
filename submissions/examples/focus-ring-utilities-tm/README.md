# Focus Ring And Outline Utilities

Accessible focus ring and outline utilities with custom styled focus indicators for keyboard navigation

## Features

- focus-ring: custom primary-colored focus ring using outline-offset and box-shadow
- focus-ring-sm/md/lg: three size variants
- focus-ring-inset: inset shadow focus indicator
- focus-ring-glow: glow-based focus indicator
- focus-visible-only: only shows on keyboard focus, not on mouse click
- outline-none-on-focus: removes default outline when using custom focus
- focus-primary/secondary/success/danger/warning/info color variants
- Dark mode support via prefers-color-scheme
- prefers-reduced-motion support

## Usage

### Quick Start

```html
<!-- Add the CSS file to your project -->
<link rel="stylesheet" href="submissions/examples/focus-ring-utilities-tm/style.css">
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
