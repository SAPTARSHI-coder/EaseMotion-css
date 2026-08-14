# CSS-only Glassmorphism Carousel (V2)

A responsive carousel built using only HTML and CSS with a modern
glassmorphism visual style.

## Features

- Pure HTML and CSS
- No JavaScript
- Four carousel slides
- CSS radio-button navigation
- Previous/next controls
- Responsive layout
- Glassmorphism surfaces
- Backdrop blur effects
- Ambient gradient lighting
- Hover interactions
- Keyboard focus states
- Reduced-motion accessibility support
- Mobile-friendly presentation

## Files

- `demo.html` — carousel markup and slide content
- `style.css` — responsive layout, glass effects, and carousel logic

## How It Works

The carousel uses hidden radio inputs to control the active slide.
CSS sibling selectors update the track position and display the
corresponding navigation controls.

This keeps the component JavaScript-free while maintaining an
interactive carousel experience.

## Usage

Include:

```html
<link rel="stylesheet" href="style.css">