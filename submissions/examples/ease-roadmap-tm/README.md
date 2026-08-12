# ease-roadmap

Responsive project roadmap component with phase columns, cards, progress bars, and status badges.

## Issue Reference

Issue: #63672

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--roadmap-card-bg` | `#1a1a2e` | Card background |
| `--roadmap-card-border` | `#2a2a4a` | Card border |
| `--roadmap-card-radius` | `12px` | Card border radius |
| `--roadmap-accent-planned` | `#6b7280` | Planned phase color |
| `--roadmap-accent-progress` | `#667eea` | In-progress phase color |
| `--roadmap-accent-done` | `#2ecc71` | Completed phase color |
| `--roadmap-accent-cancelled` | `#e74c3c` | Cancelled item color |
| `--roadmap-connector` | `#2a2a4a` | Timeline connector line |
| `--roadmap-connector-active` | `#667eea` | Active connector highlight |

## Phase Variants

- `.roadmap__phase--planned` — Gray accent, planned features
- `.roadmap__phase--progress` — Purple accent, in-flight work
- `.roadmap__phase--done` — Green accent, completed work

## Card Badge States

- `roadmap__card-badge--planned`
- `roadmap__card-badge--in-progress`
- `roadmap__card-badge--completed`
- `roadmap__card-badge--cancelled`

## Features

- 3-column desktop layout with vertical timeline connector
- Progress bar within cards
- Avatar stack for team members
- Hover lift effect on cards
- Mobile: converts to vertical timeline
- Dark/light mode support
- Reduced motion support
