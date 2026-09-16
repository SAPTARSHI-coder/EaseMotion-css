# Segment Control

A segmented control with a sliding highlight and crossfade content transitions.

## Features

- Animated highlight that tracks the active segment
- Content panels crossfade with vertical offset
- Elastic easing on the highlight movement
- Keyboard and resize friendly

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--sc-duration` | `0.3s` | Transition duration |
| `--sc-bg` | `#e8e8f0` | Segments track background |
| `--sc-active-bg` | `#ffffff` | Active segment background |
| `--sc-text-color` | `#5a5a6e` | Inactive text color |
| `--sc-active-text` | `#1e1e2e` | Active text color |
| `--sc-radius` | `10px` | Border radius |

## Usage

Click any segment label. The highlight slides to the active position and the associated content panel fades in.
