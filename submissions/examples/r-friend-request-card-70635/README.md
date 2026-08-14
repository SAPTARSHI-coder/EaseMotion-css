# CSS Friend Request Card

A responsive friend request card featuring animated accept and decline
buttons, an online status indicator, and a modern social UI design.

The component is built entirely with HTML and CSS.

## Features

- Pure HTML and CSS
- No JavaScript required
- Animated accept button
- Animated decline button
- Pulsing online status indicator
- Responsive mobile layout
- Keyboard-friendly focus states
- Accessible semantic structure
- Reduced-motion support
- Modern dark interface

## Files

- `demo.html` — Friend request card markup
- `style.css` — Complete component styling and animations

## How It Works

The buttons use CSS transitions to provide interactive feedback:

```css
.accept:hover {
  transform: translateY(-2px);
  box-shadow: 0 9px 25px rgba(16, 185, 129, 0.3);
}