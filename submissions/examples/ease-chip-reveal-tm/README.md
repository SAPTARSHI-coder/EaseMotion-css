# ease-chip-reveal

Floating action button with reveal chip menu using the checkbox hack.

## Issue Reference

Issue: #63650

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--chip-reveal-btn-size` | `56px` | Main FAB diameter |
| `--chip-reveal-btn-bg` | `#667eea` | FAB background |
| `--chip-reveal-btn-shadow` | `rgba(102,126,234,0.4)` | FAB shadow |
| `--chip-reveal-chip-bg` | `#2a2a4a` | Chip background |
| `--chip-reveal-chip-text` | `#c8c8d8` | Chip text color |
| `--chip-reveal-transition` | `0.3s cubic-bezier(...)` | Animation easing |

## Variants

- **default** — Standard circular FAB with icon
- **extended** — Pill-shaped with text label
- **mini** — 40px diameter smaller FAB
- `--fab-btn--secondary` — Purple accent
- `--fab-btn--success` — Green accent
- `--fab-btn--error` — Red accent
- `--fab-container--top` — Anchored to top-right

## Features

- Pure CSS open/close (checkbox hack)
- Spring-easing animation with stagger delays
- Rotating plus-to-X icon transition
- Multiple chip actions with labels
- Chip hover highlighting
- Dark/light mode support
- Reduced motion support
- Mobile responsive sizing
