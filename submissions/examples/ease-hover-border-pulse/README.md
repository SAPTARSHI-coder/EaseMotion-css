# ease-hover-border-pulse

## What does it do?
Border pulses in and out while hovered using a keyframe animation — pure CSS, no JavaScript.

## Features
- `outline` pulses with keyframe animation on `:hover`
- Stops when not hovered
- Custom property `--ease-border-pulse-color`
- Attention-drawing hover for interactive elements

## Usage
```css
.element:hover {
  animation: border-pulse 1s ease-in-out infinite;
}

@keyframes border-pulse {
  0%, 100% {
    outline-color: transparent;
    outline-width: 2px;
  }
  50% {
    outline-color: var(--ease-border-pulse-color, rebeccapurple);
    outline-width: 4px;
  }
}
```

## Customisation
| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-border-pulse-color` | `#a78bfa` | Color of the pulsing border |

## Browser Support
- `@keyframes` + `outline` — Chrome 26+, Firefox 16+, Safari 6.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
