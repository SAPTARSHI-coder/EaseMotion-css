# Animated Search Bar

A modern expanding search bar component built with pure HTML and CSS. It expands smoothly on focus and includes a clean glassmorphism design.

## Features

- Pure HTML and CSS implementation.
- Expands smoothly when focused.
- Modern glassmorphism design.
- Search icon highlight animation.
- Responsive layout.
- Supports `prefers-reduced-motion`.

## Usage

Copy the HTML structure from `demo.html` and link `style.css`.

```html
<div class="search-box">
  <input
    type="search"
    id="search-input"
    class="search-input"
    placeholder="Search..."
  />

  <label for="search-input" class="search-icon">
    <!-- Search icon -->
  </label>
</div>