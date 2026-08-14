# Ease Local Time Display — Live Clock

> **PR:** #36782  
> **Component:** `<local-time-display>`

A live-updating local time display with a ticking accent animation.

## CSS Custom Properties

| Property          | Default   | Description          |
|-------------------|-----------|----------------------|
| `--clock-color`   | `#e2e8f0` | Time text color      |
| `--clock-bg`      | `#1e293b` | Clock background     |
| `--tick-duration` | `1s`      | Tick interval        |
| `--accent-color`  | `#10b981` | Accent pulse color   |

## Usage

```html
<local-time-display></local-time-display>
```

## Features

- Real-time clock with second precision
- Pulsing accent dot per tick
- Dark theme by default
