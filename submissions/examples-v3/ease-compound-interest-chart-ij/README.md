# Compound Interest Chart

A compound interest chart with bars that grow sequentially from bottom, showing year-over-year growth. CSS custom properties control bar color, growth highlight, chart background, and animation speed.

## Features

- Sequential bar growth animation via JS-triggered class
- Last bar highlighted with `--growth-color` to emphasize final value
- All styling driven by CSS custom properties
- Smooth cubic-bezier easing
- Google Fonts Inter integrated

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--bar-color` | `#60a5fa` | Fill color of regular bars |
| `--growth-color` | `#34d399` | Fill color of the final (growth) bar |
| `--chart-bg` | `#1e293b` | Chart background |
| `--grow-duration` | `0.8s` | Duration of the grow transition |

## Usage

Set `data-value` (0–100) on each `.cic-bar`. The JS reads it and sets `--h` as a percentage on staggered delay.
