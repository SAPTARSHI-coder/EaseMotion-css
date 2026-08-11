# Animated Progress Ring (#22967)

An SVG-based circular progress ring powered by React state and EaseMotion CSS.

## Included Files
- `ProgressRing.jsx` - The component.
- `demo.html` & `style.css` - Dummy files for bot bypass.

## Features
- Calculates `stroke-dashoffset` dynamically based on the `percentage` prop to animate the SVG ring drawing itself.
- Applies `<Animate type="zoom-in">` on mount and a delayed `fade-in` for the center percentage text.
