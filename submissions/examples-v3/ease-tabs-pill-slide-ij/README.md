# Tabs Pill Slide

Tabs with a sliding pill-shaped background that follows the active tab.

## Features

- Sliding pill background with translateX transition
- Content fades on switch using opacity transition
- Rounded pill shape for all interactive elements
- Multiple independent tab sets supported
- Custom properties for easy theming

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--tps-duration` | 0.35s | Transition duration |
| `--tps-pill-bg` | #1e293b | Pill background color |
| `--tps-tab-color` | #64748b | Inactive tab text color |
| `--tps-active-text` | #ffffff | Active tab text color |
| `--tps-radius` | 999px | Border radius (pill shape) |

## Usage

Include `style.css` and copy the HTML structure. Each `.pill-group` is self-contained.
