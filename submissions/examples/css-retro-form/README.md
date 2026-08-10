# CSS Retro Form

A responsive contact form styled with a retro pixel-art and arcade
aesthetic using pure HTML and CSS.

## Features

- Retro pixel-inspired visual design
- Name, email, and message fields
- CSS hover and focus interactions
- Pixel-style shadows and borders
- Native keyboard navigation
- Visible focus indicators
- Responsive layout
- `prefers-reduced-motion` support
- No JavaScript
- No external dependencies

## How It Works

The retro appearance is created using CSS borders, offset box shadows,
contrasting colors, and a monospace font.

The submit button uses a small CSS transform to create a physical
arcade-button effect when hovered or pressed.

```css
.submit-button:hover {
  transform: translate(3px, 3px);
}