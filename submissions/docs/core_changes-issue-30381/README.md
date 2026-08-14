# Speed Dial / FAB — Issue #30381

Fixed floating action button with expandable action buttons. Uses checkbox `:checked` hack for CSS-only toggle.

## Classes

| Class | Purpose |
|-------|---------|
| `.ease-speed-dial` | Fixed container (default: bottom-right) |
| `.ease-speed-dial-left` | Left-aligned variant |
| `.ease-speed-dial-down` | Expand downward |
| `.ease-speed-dial-fab` | Main FAB button |
| `.ease-speed-dial-fab-check` | Hidden checkbox for toggle |
| `.ease-speed-dial-actions` | Expandable action list |
| `.ease-speed-dial-action` | Individual action button |
| `.ease-speed-dial-action-tooltip` | Label tooltip |

## CSS Variables

- `--ease-speed-dial-size`, `--ease-speed-dial-bg`, `--ease-speed-dial-color`
- `--ease-speed-dial-gap`, `--ease-speed-dial-radius`, `--ease-speed-dial-shadow`
- `--ease-speed-dial-transition` (bouncy cubic-bezier)
