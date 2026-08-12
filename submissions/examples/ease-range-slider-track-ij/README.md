# Custom Range Slider Track (`ease-range-slider-track-ij`)

Animated range slider with a gradient track fill that follows the thumb position. Part of the EaseMotion CSS submissions.

## Features

- Track fills proportionally from left to thumb position using `linear-gradient`
- Thumb scales up on hover and drag
- Live tooltip above the thumb showing the current value
- Multiple independent sliders on one page

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--rst-duration` | `0.2s` | Transition duration for thumb scale |
| `--rst-track-bg` | `#e2e8f0` | Unfilled track background color |
| `--rst-fill-color` | `#3b82f6` | Filled track and accent color |
| `--rst-thumb-color` | `#ffffff` | Thumb handle color |
| `--rst-radius` | `6px` | Border radius base for tracks |

## Usage

Open `demo.html` in any modern browser. Drag any slider to see the track fill animate and the tooltip update.
