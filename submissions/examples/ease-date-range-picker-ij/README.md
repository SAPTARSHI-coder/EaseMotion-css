# Date Range Picker

Dual-panel date range picker with animated month transitions and range highlight effects.

## Features

- Two month panels displayed side by side
- Click dates to select a start and end date
- Range highlights fade in across selected dates
- Month navigation slides in with a smooth animation
- Clear button resets the selection
- Fully customizable via CSS custom properties

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--dp-duration` | `0.3s` | Duration of range and slide transitions |
| `--dp-primary` | `#6366f1` | Primary accent color for selected dates |
| `--dp-range-bg` | `rgba(99,102,241,0.2)` | Background for dates in range |
| `--dp-hover-bg` | `#2a2a3a` | Day cell hover background |
| `--dp-text-color` | `#e2e8f0` | Default text color |
| `--dp-radius` | `8px` | Day cell border radius |

## Usage

```html
<link rel="stylesheet" href="style.css">
```

The picker renders two consecutive months. Click the first date to begin a range and a second date to complete it. Navigation buttons scroll months forward or backward.
