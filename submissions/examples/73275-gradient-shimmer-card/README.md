# CSS Card: Gradient Shimmer Variation

A responsive card component featuring a soft animated gradient shimmer
effect built entirely with HTML and Vanilla CSS.

## ✨ Features

- Animated gradient shimmer
- Multiple visual card variations
- Smooth hover elevation
- Responsive grid layout
- Dark-mode compatible
- Keyboard-accessible links
- Visible focus states
- Reduced-motion support
- Hardware-friendly CSS transforms
- No JavaScript
- No external dependencies

## 🎨 Design

The card uses a moving pseudo-element as a highlight layer.

The shimmer travels diagonally across the card to create a soft,
premium lighting effect.

## ⚡ Animation

```css
@keyframes shimmerMove {
  0% {
    transform:
      translateX(0)
      rotate(20deg);
  }

  50% {
    transform:
      translateX(330%)
      rotate(20deg);
  }

  100% {
    transform:
      translateX(0)
      rotate(20deg);
  }
}