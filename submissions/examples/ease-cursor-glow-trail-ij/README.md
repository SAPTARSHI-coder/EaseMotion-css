# Cursor Glow Trail

A cursor glow trail effect where multiple glowing dots follow the mouse cursor with staggered delay, creating a smooth comet-like trail. Toggle on/off or clear the trail.

## Usage

Include the `trail-container` div and glow dots are created and managed by the JavaScript. The effect works with both mouse and touch input.

## CSS Custom Properties

| Property           | Default    | Description                    |
|--------------------|------------|--------------------------------|
| `--glow-duration`  | `0.6s`     | Opacity transition duration    |
| `--glow-color`     | `#6b6bff`  | Glow radial gradient color     |
| `--glow-size`      | `24px`     | Leading dot base diameter      |
| `--glow-blur`      | `16px`     | CSS `filter: blur()` value     |
| `--trail-length`   | `8`        | Number of trailing dots        |

## JavaScript Behavior

- Creates `--trail-length` glow dots on load, each with decreasing size and opacity
- Uses `requestAnimationFrame` with interpolation for smooth following
- Dots are sequenced with `transition-delay` for the trailing effect
- **Disable/Enable** toggles the effect; **Clear Trail** resets dots off-screen

## Demo

Open `demo.html` in a browser and move your cursor around to see the glow trail.
