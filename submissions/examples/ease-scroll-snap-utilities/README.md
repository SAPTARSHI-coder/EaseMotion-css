# CSS Scroll Snap Utilities (`ease-scroll-snap-utilities`)

A collection of CSS utility classes for implementing smooth, native browser scroll-snapping without relying on bulky JavaScript carousel libraries.

## 🚀 Features & EaseMotion Showcase

- **Zero JavaScript**: Build highly performant image carousels, horizontal lists, and paginated sections using only CSS `scroll-snap`.
- **Accessibility Friendly**: Retains native browser scrolling mechanics, meaning trackpads, touchscreens, and keyboards all work flawlessly out of the box. Includes `:focus-visible` styling for the scroll containers.
- **Modifiers Included**: Provides utilities for axes (`x`, `y`), strictness (`mandatory`, `proximity`), and alignment (`start`, `center`).

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

To create a horizontal gallery that snaps to the center of each item:
```html
<!-- 1. Apply snap axis and strictness to the scrollable container -->
<div class="ease-snap-x-mandatory" style="display: flex; overflow-x: auto;">
  
  <!-- 2. Apply snap alignment to the children -->
  <div class="ease-snap-center">Card 1</div>
  <div class="ease-snap-center">Card 2</div>
  <div class="ease-snap-center">Card 3</div>

</div>
