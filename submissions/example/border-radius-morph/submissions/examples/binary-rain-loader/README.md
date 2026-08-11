# CSS Binary Rain Loader

A pure CSS loading animation featuring streams of binary `0` and `1`
characters falling from the top of the screen while content loads.

## Features

- Pure CSS animation
- No JavaScript
- No external dependencies
- Multiple staggered binary columns
- Responsive layout
- Accessible loading status
- Reduced-motion support
- Works by opening `demo.html` directly

## How It Works

The binary characters are arranged into separate columns.

Each column uses the same CSS animation with a different negative
`animation-delay` to create a continuous staggered rain effect.

```css
.binary-column {
  animation: binaryRain 3.5s linear infinite;
}

.column-1 {
  animation-delay: -2.7s;
}

.column-2 {
  animation-delay: -1.2s;
}