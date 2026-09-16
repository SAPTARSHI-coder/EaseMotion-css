# CSS Centered Auto Grid

A responsive, pure CSS grid component that automatically creates and centers grid items based on the available screen width.

## Features

- Pure HTML and CSS implementation
- Uses CSS Grid `auto-fit` and `minmax()`
- Automatically adapts to different screen sizes
- Keeps grid items centered and balanced
- Responsive on mobile, tablet, and desktop
- Smooth hover interactions
- Accessible semantic HTML structure
- Supports reduced-motion preferences
- No JavaScript required

## Files

- `demo.html` — Demo markup and grid content
- `style.css` — Responsive grid styling and animations

## How It Works

The component uses:

```css
grid-template-columns: repeat(
  auto-fit,
  minmax(min(100%, 240px), 1fr)
);