# Bottom Navigation / Mobile Tab Bar — Issue #30379

Fixed bottom navigation bar for mobile-first layouts with safe area support.

## Classes

| Class | Purpose |
|-------|---------|
| `.ease-bottom-nav` | Fixed bottom nav container |
| `.ease-bottom-nav-item` | Individual tab button |
| `.ease-bottom-nav-icon` | Icon area |
| `.ease-bottom-nav-label` | Text label |
| `.ease-bottom-nav-badge` | Notification badge |
| `.ease-bottom-nav-icons-only` | Hides labels |
| `.is-active` | Active tab state (accent bar) |

## CSS Variables

- `--ease-bottom-nav-bg`, `--ease-bottom-nav-color`, `--ease-bottom-nav-active`
- `--ease-bottom-nav-height`, `--ease-bottom-nav-font-size`, `--ease-bottom-nav-icon-size`
- `--ease-bottom-nav-border`

Uses `env(safe-area-inset-*)` for notched phones. Dark mode supported.
