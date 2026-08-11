# Border Radius Morph Visualizer

A beginner-friendly CSS animation demo that shows how the
`border-radius` property can smoothly transform an element between
different shapes.

## Shapes Demonstrated

The animation moves through four shape states:

1. Rounded Rectangle
2. Circle
3. Pill
4. Organic Blob

## Features

- Smooth CSS `border-radius` animation
- Multiple predefined shape states
- Current shape indicator
- Replay Animation button
- Responsive layout
- Reduced-motion support
- No external dependencies

## How It Works

The shape transformation is created using CSS `@keyframes`.

Different `border-radius` values are defined at different points
in the animation:

```css
@keyframes borderRadiusMorph {
  0% {
    border-radius: 20px;
  }

  25% {
    border-radius: 50%;
  }

  50% {
    border-radius: 999px;
  }

  75% {
    border-radius: 42% 58% 63% 37% / 38% 41% 59% 62%;
  }
}