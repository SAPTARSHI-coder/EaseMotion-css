# CSS Ripped Paper Card

A paper-inspired card component with a torn top edge created
entirely with CSS.

## Features

- Pure HTML and CSS
- CSS `clip-path` ripped paper effect
- Paper texture styling
- Decorative tape element
- Responsive design
- Hover lift animation
- Semantic HTML structure
- Keyboard focus styling
- Reduced-motion support
- No JavaScript required

## Files

- `demo.html` — Demo markup and card content
- `style.css` — Component styling and ripped-edge effect

## How It Works

The torn paper effect is created using CSS `clip-path` with
multiple polygon points:

```css
clip-path: polygon(
  0 0,
  3% 45%,
  6% 20%,
  9% 65%,
  12% 30%,
  15% 75%,
  100% 60%,
  100% 0
);