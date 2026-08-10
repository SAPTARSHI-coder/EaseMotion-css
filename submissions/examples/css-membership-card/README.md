# CSS Membership Card

A premium membership card UI featuring a metallic appearance,
premium badge, and CSS-powered metallic sheen effect.

## Features

- Premium membership card design
- Metallic gradient styling
- Animated metallic sheen on hover
- Premium circular badge
- Responsive layout
- Hover elevation effect
- Reduced-motion support
- No JavaScript
- No external dependencies

## How It Works

The metallic sheen is created using a pseudo-like overlay element
with a linear gradient.

On hover, the `.sheen` element moves across the card using a CSS
keyframe animation.

```css
.membership-card:hover .sheen {
  opacity: 1;
  animation: metallic-sheen 1.1s ease-in-out;
}