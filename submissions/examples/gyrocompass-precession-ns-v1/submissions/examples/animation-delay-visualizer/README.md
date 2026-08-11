# CSS Animation Delay Visualizer

An interactive, beginner-friendly showcase demonstrating how the CSS
`animation-delay` property controls when animations begin.

## Features

- Interactive animation-delay slider
- Live display of the selected delay
- Replay button
- Clearly visible staggered animations
- Responsive layout
- Pure CSS animations
- Minimal JavaScript used only for interactive controls
- `prefers-reduced-motion` accessibility support
- No external dependencies

## How It Works

The demo uses the CSS custom property `--animation-delay` to control
the starting time of the animated elements.

Each element receives a slightly different delay:

```css
.item-1 {
  animation-delay: 0s;
}

.item-2 {
  animation-delay: calc(var(--animation-delay) + 0.15s);
}

.item-3 {
  animation-delay: calc(var(--animation-delay) + 0.3s);
}

.item-4 {
  animation-delay: calc(var(--animation-delay) + 0.45s);
}