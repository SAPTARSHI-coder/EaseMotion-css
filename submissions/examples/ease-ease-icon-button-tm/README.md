# ease-icon-button

CSS-only icon button component with hover, active, and animated states.

**Issue:** #63179

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--icon-btn-size` | `40px` | Button diameter |
| `--icon-btn-radius` | `50%` | Border radius |
| `--icon-btn-color` | `#6366f1` | Icon color |
| `--icon-btn-bg-hover` | `rgba(99,102,241,0.1)` | Hover background |
| `--icon-btn-icon-size` | `20px` | SVG icon size |
| `--icon-btn-glow` | `rgba(99,102,241,0.4)` | Pulse glow color |
| `--icon-btn-size-sm` | `32px` | Small variant |
| `--icon-btn-size-lg` | `52px` | Large variant |

## Variants

- **Primary** — Indigo accent color
- **Danger** — Red for destructive actions
- **Success** — Green for confirmations
- **Warning** — Amber for alerts
- **Pulse** — Ambient glow pulse animation
- **Spin** — Icon spins on hover
- **Badge** — Notification count badge

## Usage

```html
<link rel="stylesheet" href="style.css" />
<button class="icon-btn icon-btn-primary">
  <svg><!-- icon --></svg>
</button>
```

## Accessibility

- Use semantic `<button>` elements
- Add `title` attribute for tooltip text
- `prefers-reduced-motion: reduce` disables animations
