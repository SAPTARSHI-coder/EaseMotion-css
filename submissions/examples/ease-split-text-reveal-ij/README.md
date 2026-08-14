# Split Text Reveal

Text that splits into individual characters that animate in with slide and fade effects. Supports multiple animation directions with configurable stagger delays.

## Features

- Each character animates independently with staggered timing
- Directional reveal: up, down, left, right
- Replay button to restart the animation
- Direction toggle buttons for live switching
- CSS custom properties for full control

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--str-duration` | `0.5s` | Animation duration per character |
| `--str-char-color` | `#6366f1` | Color of the character spans |
| `--str-stagger` | `0.04s` | Delay increment between characters |
| `--str-direction` | `up` | Default reveal direction |

## Usage

Include `style.css` and use `.reveal-text` as the container. Characters are automatically wrapped in `.char` spans by the JavaScript. Toggle direction by setting `data-dir` attribute on each character span.
