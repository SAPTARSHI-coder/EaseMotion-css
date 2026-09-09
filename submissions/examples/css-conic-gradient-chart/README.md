# CSS Conic Gradient Chart

A responsive, animated pie/donut chart created using pure CSS
`conic-gradient()`.

Part of the EaseMotion CSS project.

## Features

- Pure CSS implementation
- No JavaScript required
- Uses `conic-gradient()`
- Responsive layout
- Animated chart entrance
- Hover interaction
- CSS custom properties for theming
- Light and dark mode support
- Accessible chart description
- Reduced-motion support
- Mobile friendly
- Zero dependencies

## Demo

Open `demo.html` directly in a modern browser.

## How It Works

The chart is created using the CSS `conic-gradient()` function.

The example uses four sections:

| Product | Percentage | Angle |
|---------|------------|-------|
| Product A | 40% | 144deg |
| Product B | 30% | 108deg |
| Product C | 20% | 72deg |
| Product D | 10% | 36deg |

The total is:

`144 + 108 + 72 + 36 = 360deg`

The gradient is defined as:

```css
background:
  conic-gradient(
    from -90deg,
    var(--chart-a) 0deg 144deg,
    var(--chart-b) 144deg 252deg,
    var(--chart-c) 252deg 324deg,
    var(--chart-d) 324deg 360deg
  );