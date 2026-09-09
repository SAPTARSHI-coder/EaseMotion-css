# Neon Text Glow

A CSS component that creates a neon-sign-style glowing text effect with pulsing animation, flicker effect, and interactive controls.

## Features

- Pulsing neon glow animation with smooth brightness oscillation
- Optional flicker effect for a vintage neon sign feel
- Multiple neon color presets (pink, cyan, blue, green, yellow, purple, red)
- Toggle power on/off
- Adjustable animation speed via slider
- Editable text (click to type your own)
- Preset phrase buttons for quick text changes

## Usage

```html
<link rel="stylesheet" href="style.css">
```

```html
<div class="ntg-display">
  <p class="ntg-text" id="neonText" contenteditable="true">NEON</p>
</div>
```

Toggle the glow on/off by adding/removing the `.off` class. Enable flicker by adding the `.flicker` class.

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ntg-duration` | `1s` | Animation speed for the pulse cycle |
| `--ntg-text-color` | `#fff` | Base text color |
| `--ntg-glow-color-1` | `#ff2d95` | Inner glow color |
| `--ntg-glow-color-2` | `#ff6eb4` | Outer glow color |
| `--ntg-flicker-speed` | `0.15s` | Speed of the flicker keyframes |

## Browser Support

All modern browsers (Chrome, Firefox, Safari, Edge).

## Demo

Open `demo.html` in a browser to try the interactive demo.
