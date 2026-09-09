# CSS Gradient Border Animated

A continuously rotating animated gradient border built entirely with
HTML and Vanilla CSS.

## ✨ Features

- Continuously rotating gradient border
- Multiple gradient variations
- Smooth CSS animation
- Hover interaction
- Responsive layout
- Dark-mode compatible styling
- Keyboard-accessible interactive elements
- Reduced-motion support
- Hardware-friendly transforms
- No external dependencies
- No JavaScript required

## 🎨 How It Works

The animated border uses a CSS `conic-gradient()` as the visual frame
around the component.

```css
.gradient-border {
  background:
    conic-gradient(
      from 0deg,
      #8b5cf6,
      #ec4899,
      #22d3ee,
      #34d399,
      #facc15,
      #8b5cf6
    );

  animation:
    rotateGradient 7s linear infinite;
}