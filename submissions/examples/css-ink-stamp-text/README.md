# CSS Ink Stamp Text

A lightweight CSS animation that makes text appear with a quick
ink-stamp "thud" effect.

## Features

- Punchy ink-stamp entrance animation
- Scale and translate movement
- Small overshoot for a physical stamp effect
- Responsive typography
- `prefers-reduced-motion` support
- No JavaScript
- No external dependencies

## How It Works

The animation uses CSS transforms and keyframes to simulate the
movement of a physical stamp.

The text begins slightly above its final position and scaled up,
then quickly moves downward and compresses before settling into
its final position.

```css
@keyframes ink-stamp {
  0% {
    transform: translateY(-80px) scale(1.25);
  }

  100% {
    transform: translateY(0) scale(1);
  }
}