# CSS Mega Lightbox

A full-screen, responsive image lightbox built using HTML and CSS without JavaScript.

## Features

- Full-screen image viewing
- Previous and next navigation
- Image captions
- Image counter
- Responsive gallery layout
- CSS-only implementation
- Keyboard-accessible links
- Visible focus states
- Hover interactions
- `:target` based lightbox navigation
- `prefers-reduced-motion` support
- No JavaScript dependencies

## How It Works

The component uses the CSS `:target` pseudo-class to control which lightbox is visible.

Each gallery image links to a unique fragment identifier:

```html
<a href="#image-1">
  <img src="image.jpg" alt="Description">
</a>
<section id="image-1" class="lightbox">
  ...
</section>