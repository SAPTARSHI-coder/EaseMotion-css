# Animated Column Chart

A column/bar chart with bars that animate from height 0 to their target value on load. Each bar rises with a staggered delay and an elastic easing curve. A **Replay Animation** button re-triggers the sequence.

## Features

- Bars grow from bottom on load with staggered timing
- Value label fades in above each bar
- Elastic cubic-bezier easing for natural motion
- Replay button to re-trigger the animation

## CSS Custom Properties

| Property              | Default   | Description                     |
|-----------------------|-----------|---------------------------------|
| `--col-chart-duration`| `0.6s`    | Duration of bar height animation|
| `--col-bar-color`     | `#3b82f6` | Fill color of bars              |
| `--col-bar-bg`        | `#eff6ff` | Background tint                 |
| `--col-label-color`   | `#6b7280` | Month label text color          |
| `--col-stagger`       | `0.08s`   | Delay increment between bars    |

## Usage

Open `demo.html` in any modern browser. The chart animates automatically on load. Click **Replay Animation** to watch the bars rise again.
