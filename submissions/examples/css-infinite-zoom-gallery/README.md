# CSS Infinite Zoom Gallery

An endless, hypnotic zoom effect diving through nested frames of images or geometric patterns.

## Features

- **Pure CSS**: No JavaScript required for the zoom logic.
- **Fractal Loop**: Achieves a perfect infinite loop by scaling the outermost container from `scale(1)` to `scale(2)`, while each nested frame is exactly `50%` the size of its parent.
- **Backdrop Filters**: Uses `backdrop-filter: blur()` on each layer to create depth and a glass-like optical effect.

## Preview

Open `demo.html` in your browser to dive into the infinite zoom.
