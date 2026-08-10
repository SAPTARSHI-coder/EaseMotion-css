# ease-sidebar

Pure CSS off-canvas sliding sidebar navigation using the checkbox hack.

## Issue Reference

Issue: #63671

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--sidebar-width` | `280px` | Panel width |
| `--sidebar-bg` | `#1a1a2e` | Panel background |
| `--sidebar-border` | `#2a2a4a` | Border/divider color |
| `--sidebar-overlay` | `rgba(0,0,0,0.5)` | Backdrop overlay color |
| `--sidebar-accent` | `#667eea` | Active item accent |
| `--sidebar-text` | `#c8c8d8` | Navigation text color |
| `--sidebar-transition` | `0.35s cubic-bezier(...)` | Slide animation |

## Variants

- **default** — Slides in from the left
- `--sidebar-panel--right` — Slides in from the right
- `--sidebar-panel--wide` — 360px wide variant

## Features

- Pure CSS open/close (checkbox hack — no JS needed)
- Animated hamburger-to-X trigger icon
- Backdrop overlay with blur effect
- Section headers for grouping nav items
- Notification badge counts
- Active state highlighting
- User footer section
- Custom scrollbar styling
- Dark/light mode support
- Reduced motion support
- Mobile responsive (85vw on small screens)
