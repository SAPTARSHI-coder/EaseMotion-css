# CSS Haptic Feedback Button

A tactile button component that simulates a quick haptic-style
response through CSS press, scale, shadow, and ring animations.

## Features

- Pure HTML and CSS
- No JavaScript required
- Tactile press animation
- Quick scale-down interaction
- Dynamic shadow compression
- Ripple-like feedback ring
- Hover lift effect
- Keyboard focus support
- Responsive design
- Reduced-motion support

## Files

- `demo.html` — Demo markup
- `style.css` — Complete component styling

## How It Works

The button uses the `:active` pseudo-class to create a quick
visual response when the user presses it.

```css
.haptic-button:active {
  transform: translateY(3px) scale(0.96);
  box-shadow:
    0 3px 10px rgba(139, 92, 246, 0.2),
    0 0 0 #5030a0;
}