# Analog Clock UI

A clean analog clock interface with continuous second-hand rotation and smooth minute/hour hand transitions.

## Features

- Classic 12-hour analog clock face with numbered positions
- Continuous CSS animation for the second hand (60s cycle)
- Smooth spring-like transitions for minute and hour hands
- Real-time updates via JavaScript (syncs on load, updates every second)

## Usage

Include the stylesheet and HTML structure with `.clock`, `.clock-face`, and `.clock-hand` elements. The included script keeps the hands in sync with the current time.

```html
<link rel="stylesheet" href="style.css">
```

## Custom Properties

| Property                | Default    | Description               |
|-------------------------|------------|---------------------------|
| `--clock-size`          | `280px`    | Clock diameter             |
| `--clock-bg`            | `#ffffff`  | Clock face background      |
| `--clock-border-color`  | `#cbd5e1`  | Clock rim colour           |
| `--clock-hand-color`    | `#1e293b`  | Hour & minute hand colour  |
| `--clock-second-color`  | `#ef4444`  | Second hand colour         |

## How It Works

The second hand uses a pure CSS `@keyframes` animation that rotates 360° linearly over 60 seconds (`steps(60)` for tick-by-tick movement). Minute and hour hand positions are calculated in JavaScript from the current time and applied via `transform: rotate()`, with a CSS transition for a smooth spring-like motion between updates.
