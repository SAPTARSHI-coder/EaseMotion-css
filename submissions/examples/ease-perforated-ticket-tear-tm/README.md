# ease-perforated-ticket

CSS-only perforated ticket tear stub animation.

**Issue:** #63170

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--ticket-width` | `280px` | Full ticket width |
| `--ticket-height` | `120px` | Ticket height |
| `--ticket-radius` | `8px` | Border radius |
| `--ticket-bg` | `#f5f0e8` | Background color |
| `--ticket-border` | `#3a3a4a` | Border/stub color |
| `--ticket-perf-diameter` | `10px` | Perforation circle size |
| `--ticket-tear-duration` | `0.8s` | Tear animation duration |
| `--ticket-size-sm` | `200px` | Small variant |

## Variants

- **Tear Reveal** — Main section tears away revealing stub
- **Stub Slide** — Stub slides in from left after tear
- **Stub Shake** — Subtle shake on stub after landing

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="ticket-full ticket-tear-reveal">
  <div class="ticket-main">...</div>
  <div class="ticket-perf"></div>
  <div class="ticket-stub">...</div>
</div>
```

## Accessibility

- `prefers-reduced-motion: reduce` disables tear animations
