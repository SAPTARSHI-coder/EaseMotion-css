# ease-badge-card

Responsive user badge card component with avatar, status indicator, badges, and stats.

## Issue Reference

Issue: #63676

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--badge-card-bg` | `#1a1a2e` | Card background |
| `--badge-card-border` | `#2a2a4a` | Border color |
| `--badge-card-radius` | `12px` | Border radius |
| `--badge-card-padding` | `24px` | Inner padding |
| `--badge-card-shadow` | `0 4px 24px rgba(0,0,0,0.3)` | Box shadow |
| `--badge-card-primary` | `#667eea` | Primary accent color |
| `--badge-card-secondary` | `#764ba2` | Secondary accent color |
| `--badge-card-online` | `#2ecc71` | Online status color |
| `--badge-card-away` | `#f39c12` | Away status color |
| `--badge-card-offline` | `#6b7280` | Offline status color |

## Variants

- **default** — Centered, full-featured card with avatar, badges, stats, and action
- **compact** — Horizontal layout, suitable for lists
- **gradient** — Dark gradient background
- **glass** — Frosted glass effect with backdrop-filter

## Features

- Status indicator dot (online/away/offline)
- Role badge with optional verified/star variants
- Follower/post stats row
- Hover lift effect with colored top border
- Responsive grid layout
- Dark/light mode support
- Reduced motion support

## Accessibility

- Semantic HTML with proper heading hierarchy
- Alt text for avatar images
- Sufficient color contrast for text
- Keyboard accessible action buttons
- `prefers-reduced-motion` support
