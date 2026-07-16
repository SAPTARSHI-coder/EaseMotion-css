# Custom Scrollbar Styling

Custom scrollbar styling for webkit browsers with thin, medium, and thick variants plus dark mode support

## Features

- scrollbar-thin: minimal 6px scrollbar width
- scrollbar-medium: standard 10px scrollbar
- scrollbar-thick: 14px premium scrollbar
- scrollbar-rounded: fully rounded thumb
- scrollbar-primary/secondary/success/danger/warning color variants
- Dark mode variants with neutral-700 thumb
- Firefox scrollbar-color support
- Smooth hover transitions

## Usage

### Quick Start

```html
<!-- Add the CSS file to your project -->
<link rel="stylesheet" href="submissions/examples/scrollbar-styling-tm/style.css">
```

### Size Variants

| Class | Size | Use Case |
|-------|------|----------|
| `*-sm` | Small | Compact UI, badges, tags |
| `*-md` | Medium | Body text, buttons, cards |
| `*-lg` | Large | Headings, hero text, prominent elements |

## Design Tokens Used

This component uses the following EaseMotion-css design tokens:

- `var(--ease-color-primary)` — Primary brand color
- `var(--ease-color-secondary)` — Secondary accent color
- `var(--ease-color-neutral-50)` through `var(--ease-color-neutral-900)` — Neutral palette
- `var(--ease-color-success)`, `var(--ease-color-danger)`, `var(--ease-color-warning)` — Semantic colors
- `var(--ease-radius-sm)`, `var(--ease-radius-md)`, `var(--ease-radius-lg)`, `var(--ease-radius-xl)` — Border radii
- `var(--ease-shadow-sm)` through `var(--ease-shadow-xl)` — Elevation levels
- `var(--ease-speed-fast)`, `var(--ease-speed-medium)`, `var(--ease-speed-slow)` — Animation durations
- `var(--ease-ease)`, `var(--ease-ease-bounce)` — Easing functions
- `var(--ease-glow-primary)`, `var(--ease-glow-secondary)` — Glow effects
- `var(--ease-space-1)` through `var(--ease-space-16)` — Spacing scale
- `var(--ease-font-sans)`, `var(--ease-font-mono)` — Typography
- `var(--ease-text-xs)` through `var(--ease-text-4xl)` — Type scale
- `var(--ease-glass-bg)`, `var(--ease-glass-border)` — Glass morphism tokens

## Accessibility

- All animations respect `prefers-reduced-motion` — users who prefer reduced motion see static fallback styles
- Dark mode variants via `prefers-color-scheme: dark` query
- Color choices maintain WCAG AA contrast ratios

## License

MIT — submitted to EaseMotion-css competition.
