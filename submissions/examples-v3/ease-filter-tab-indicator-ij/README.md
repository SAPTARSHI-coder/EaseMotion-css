# Filter Tab Indicator

Interactive filter tabs with a sliding underline indicator. Click a tab and the underline smoothly slides to the active position.

## Features

- Sliding underline indicator with smooth left/right animation
- Supports multiple independent tab groups
- Fully customizable via CSS custom properties
- Pure CSS transition — no animation libraries required

## Usage

Include `style.css` and the demo HTML structure. Each `.tab-bar` automatically initializes its own indicator.

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--tab-duration` | `0.3s` | Transition duration |
| `--tab-bg` | `#f3f4f6` | Tab bar background |
| `--tab-active-color` | `#111827` | Active tab text color |
| `--tab-inactive-color` | `#6b7280` | Inactive tab text color |
| `--tab-indicator-color` | `#3b82f6` | Indicator underline color |
| `--tab-radius` | `8px` | Tab bar border radius |
| `--tab-border` | `1px solid #e5e7eb` | Tab bar border |

## Browser Support

Chrome, Firefox, Safari, Edge — any modern browser supporting CSS custom properties and transitions.
