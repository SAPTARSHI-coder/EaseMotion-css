# CSS Bubble Wrap Button

A playful CSS-only button interaction that creates a bubble-wrap
popping effect when the button is pressed.

## Features

- Bubble-wrap inspired button
- Multiple bubbles burst outward
- Staggered bubble animations
- CSS-only interaction
- Responsive layout
- Keyboard-accessible button
- Visible focus state
- `prefers-reduced-motion` support
- No JavaScript
- No external dependencies

## How It Works

The surrounding bubble elements are initially hidden.

When the button is pressed, the CSS `:has()` selector detects the
active button state and triggers the bubble animation.

```css
.bubble-button:has(button:active) .bubble {
  animation: bubble-pop 500ms ease-out both;
}