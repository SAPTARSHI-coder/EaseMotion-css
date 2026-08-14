# Remote Control Btn

A D-pad remote control button set with 3D press animations using `box-shadow` and `translateY` transitions.

## Features

- Directional buttons (up, down, left, right) with concave/convex 3D press effect
- Center OK button with configurable pulse animation
- SVG arrow icons that scale on press
- Live display showing pressed button
- Toggle to enable/disable OK pulse

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--rcb-duration` | `0.15s` | Transition duration for press animation |
| `--rcb-btn-bg` | `#2c3e50` | Default button background |
| `--rcb-btn-shadow` | `#1a252f` | Shadow color for 3D effect |
| `--rcb-press-color` | `#3498db` | Background color on press |
| `--rcb-radius` | `14px` | Border radius for buttons |

## Usage

```html
<link rel="stylesheet" href="style.css">
<!-- Include the D-pad markup from demo.html -->
```

The 3D effect is achieved by combining `box-shadow` (bottom-heavy) with `translateY` on `:active` / `:hover` states to simulate a physical button being pressed.
