# Filter Chip Group

A group of toggleable filter chips with scale‑on‑active animation and a "Clear all" control.

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--chip-duration` | `0.2s` | Transition duration |
| `--chip-bg` | `#f0f1f5` | Inactive chip background |
| `--chip-active-bg` | `#6366f1` | Active chip background |
| `--chip-text-color` | `#1a1a2e` | Inactive text colour |
| `--chip-active-text-color` | `#ffffff` | Active text colour |
| `--chip-radius` | `9999px` | Chip border‑radius (pill) |
| `--chip-border` | `1px solid transparent` | Chip border |

## Behaviour

- Click a chip to toggle its active state; multiple chips can be active.
- Active chips scale to 1.05× with a coloured background and stronger shadow.
- **Clear all** resets every chip to inactive.
- All transitions are driven by `--chip-duration`.
