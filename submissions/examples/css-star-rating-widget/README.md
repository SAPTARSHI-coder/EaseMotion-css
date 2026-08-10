# CSS Star Rating Widget

A responsive, accessible, CSS-only 5-star rating widget built using radio inputs and CSS selectors.

## Features

- ⭐ Five-star interactive rating
- 🎨 Pure CSS implementation
- ♿ Uses native radio inputs for keyboard accessibility
- 📱 Responsive layout for different screen sizes
- 🌗 Supports light and dark color schemes
- 🎯 Hover and selected-state feedback
- 🧩 Easy to customize with CSS custom properties
- 🚫 No JavaScript required

## How It Works

The component uses five radio inputs, each representing a rating from 1 to 5.

CSS sibling selectors are used to highlight the selected rating and provide a visual preview when the user hovers over the stars. The native radio controls remain available for keyboard navigation and screen-reader interaction.

## Usage

Copy the HTML structure from `demo.html` and include `style.css` in your project.

### HTML

```html
<div class="star-rating" role="radiogroup" aria-label="Rate this item">
  <input type="radio" id="rating-5" name="rating" value="5">
  <label for="rating-5" aria-label="5 stars">★</label>

  <input type="radio" id="rating-4" name="rating" value="4">
  <label for="rating-4" aria-label="4 stars">★</label>

  <input type="radio" id="rating-3" name="rating" value="3">
  <label for="rating-3" aria-label="3 stars">★</label>

  <input type="radio" id="rating-2" name="rating" value="2">
  <label for="rating-2" aria-label="2 stars">★</label>

  <input type="radio" id="rating-1" name="rating" value="1">
  <label for="rating-1" aria-label="1 star">★</label>
</div>