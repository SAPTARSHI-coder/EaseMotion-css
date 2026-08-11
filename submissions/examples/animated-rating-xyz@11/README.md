# Animated Rating Component (`ease-rating-xyz`)

A zero-dependency, CSS-only animated rating component designed for the **EaseMotion CSS** framework. Perfect for reviews, feedback forms, and ratings with smooth hover and selection animations.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using radio inputs and CSS selectors.
- **Animation-First**: Smooth hover effects, selection pop animation, and color transitions using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-fast`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Icon Types**: Stars (default), hearts, and thumbs up.
- **Size Variants**: Default and large sizes.
- **Read-only Display**: Show average ratings without interactivity.
- **Accessible**: Proper label associations and title attributes.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Star Rating
```html
<div class="ease-rating-xyz">
  <input type="radio" id="star5" name="rating" value="5">
  <label for="star5" title="5 stars">★</label>
  <input type="radio" id="star4" name="rating" value="4">
  <label for="star4" title="4 stars">★</label>
  <input type="radio" id="star3" name="rating" value="3" checked>
  <label for="star3" title="3 stars">★</label>
  <input type="radio" id="star2" name="rating" value="2">
  <label for="star2" title="2 stars">★</label>
  <input type="radio" id="star1" name="rating" value="1">
  <label for="star1" title="1 star">★</label>
</div>