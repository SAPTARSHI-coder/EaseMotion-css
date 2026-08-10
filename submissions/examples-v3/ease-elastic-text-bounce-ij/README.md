# Elastic Text Bounce

**Issue:** [#36638](https://github.com/easemotion/easemotion-css/issues/36638)

Springy letter animation where each character bounces with elastic physics. Hover over the text or click the "Bounce!" button to trigger the effect. Letters animate sequentially with a configurable stagger delay.

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--text-color` | `#e2e8f0` | Color of the text characters |
| `--bounce-height` | `40px` | Maximum bounce amplitude per letter |
| `--spring-stiffness` | `6` | Controls spring tension (higher = snappier) |
| `--letter-delay` | `60ms` | Stagger delay between each letter |

## Features

- Each letter animates independently with spring-like bounce keyframes
- Adjustable bounce height, spring stiffness, and letter stagger delay via sliders
- Hover to trigger or click the bounce button
- Reset button to restore all letters
- Dark theme
