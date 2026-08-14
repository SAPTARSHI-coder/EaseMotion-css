# CSS Reduced Motion Alternative

A pure CSS demonstration of an animation that provides an accessible
alternative for users who prefer reduced motion.

## Features

- Pure HTML and CSS
- No JavaScript required
- Smooth floating animation
- Pulsing inner element
- Responsive design
- Accessible reduced-motion alternative
- Uses the `prefers-reduced-motion` media query

## Files

- `demo.html` - Demonstration page
- `style.css` - Component styling and animations

## How It Works

The component normally displays a floating and pulsing animation.

The animation is created using CSS keyframes:

```css
@keyframes floating-box {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}