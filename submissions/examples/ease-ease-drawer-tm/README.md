# ease-drawer

Slide-in drawer panel for e-commerce checkout flows using the checkbox hack.

## Issue Reference

Issue: #63644

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--drawer-bg` | `#1a1a2e` | Panel background |
| `--drawer-border` | `#2a2a4a` | Border/divider color |
| `--drawer-width` | `420px` | Panel width |
| `--drawer-radius` | `16px` | Corner radius |
| `--drawer-shadow` | `-8px 0 40px rgba(0,0,0,0.4)` | Left shadow |
| `--drawer-overlay` | `rgba(0,0,0,0.6)` | Backdrop overlay |
| `--drawer-accent` | `#667eea` | Accent/button color |
| `--drawer-success` | `#2ecc71` | Success/promo color |
| `--drawer-text` | `#e0e0e0` | Primary text color |
| `--drawer-muted` | `#6b7280` | Muted/secondary text |

## Variants

- **default** — Slides in from the right
- `--drawer-panel--left` — Slides in from the left
- `--drawer-panel--wide` — 520px wide

## Features

- Pure CSS open/close (checkbox hack)
- Slide-in with smooth cubic-bezier easing
- Blurred backdrop overlay
- Sticky header with close button
- Scrollable body with custom scrollbar
- Sticky summary footer with total
- Promo code input field
- Quantity controls per item
- Remove item button
- Hover highlight on items
- Checkout CTA button
- Secure checkout badge
- Dark/light mode support
- Reduced motion support
- Mobile: full-width drawer
