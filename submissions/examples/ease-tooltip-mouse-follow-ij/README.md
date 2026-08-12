# Tooltip Mouse Follow

A tooltip that follows the mouse cursor with smooth scale+fade entrance and slight follow delay.

**Directory:** `ease-tooltip-mouse-follow-ij`

## Features
- Follows cursor with lerp-based smooth animation
- Scale + opacity entrance transition
- Supports rich HTML content (bold, lists, etc.)
- Position modifiers relative to cursor (top, bottom, left, right)
- No external dependencies

## CSS Custom Properties
| Property | Default | Description |
|---|---|---|
| `--tmf-duration` | `0.25s` | Entrance animation duration |
| `--tmf-tooltip-bg` | `#1e293b` | Tooltip background |
| `--tmf-text-color` | `#e2e8f0` | Text color |
| `--tmf-radius` | `8px` | Border radius |
| `--tmf-shadow` | `0 8px 24px rgba(0,0,0,0.3)` | Box shadow |

## Usage
Open `demo.html` in a browser. Hover over any card to see the tooltip follow your cursor.
