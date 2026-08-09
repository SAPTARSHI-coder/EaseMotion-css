# ease-spotlight

Spotlight border sweep hover effect using animated gradient borders.

## Issue Reference

Issue: #63645

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--spotlight-bg` | `#1a1a2e` | Card background |
| `--spotlight-border` | `#2a2a4a` | Border color |
| `--spotlight-radius` | `12px` | Border radius |
| `--spotlight-accent` | `#667eea` | Primary accent color |
| `--spotlight-accent-secondary` | `#764ba2` | Secondary accent |
| `--spotlight-sweep-width` | `3px` | Border sweep thickness |
| `--spotlight-glow-spread` | `12px` | Outer glow spread |
| `--spotlight-shadow` | `0 4px 24px rgba(0,0,0,0.3)` | Card shadow |

## Angle Variants

- `.spotlight-card--top-left` — `--spotlight-angle: 315deg`
- `.spotlight-card--top-right` — `--spotlight-angle: 225deg`
- `.spotlight-card--bottom-left` — `--spotlight-angle: 45deg`
- `.spotlight-card--bottom-right` — `--spotlight-angle: 135deg`
- `.spotlight-card--top` — `--spotlight-angle: 270deg`
- `.spotlight-card--bottom` — `--spotlight-angle: 90deg`
- `.spotlight-card--left` — `--spotlight-angle: 0deg`
- `.spotlight-card--right` — `--spotlight-angle: 180deg`

## Color Variants

- **default** — Purple gradient
- `.spotlight-card--success` — Green gradient
- `.spotlight-card--error` — Red gradient
- `.spotlight-card--warning` — Orange gradient
- `.spotlight-card--mono` — Gray monochrome

## Style Variants

- `.spotlight-card--static` — Border always visible
- `.spotlight-card--glow` — Enhanced outer glow on hover
- `.spotlight-card--thick` — 5px sweep width
- `.spotlight-card--thin` — 2px sweep width

## Features

- Pure CSS using `mask-composite` border animation
- Animated flowing gradient effect
- Multiple color and angle variants
- Hover lift transform
- Outer glow on hover
- Dark/light mode support
- Reduced motion support
