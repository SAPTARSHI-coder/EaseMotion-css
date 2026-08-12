# CSS Reveal on Hover Grid

A responsive CSS-only image grid where additional information smoothly reveals when a user hovers or focuses on a grid item.

## Features

- Pure CSS implementation
- Smooth overlay reveal animation
- Responsive grid layout
- Keyboard-accessible focus states
- Supports light and dark themes
- Uses CSS custom properties for easy customization
- No JavaScript or external dependencies
- Works by opening `demo.html` directly in a browser

## Usage

Include the HTML structure from `demo.html` and the accompanying `style.css` file in your project.

```html
<link rel="stylesheet" href="style.css">

<div class="reveal-grid">
  <article class="reveal-card">
    <img src="image.jpg" alt="Description of the image">
    <div class="reveal-overlay">
      <h3>Card Title</h3>
      <p>Additional information appears on hover.</p>
    </div>
  </article>
</div>