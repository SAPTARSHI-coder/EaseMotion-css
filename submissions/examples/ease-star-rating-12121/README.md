# Animated Star Ratings (`ease-star-rating`)

## Overview
This submission introduces interactive, animated star ratings with smooth hover effects, satisfying click feedback, and support for half-star displays. Perfect for review systems, feedback forms, and scoring interfaces.

## Features
- **Smooth Hover Animations**: Stars scale up and change color on hover with a custom cubic-bezier curve for natural motion.
- **Satisfying Click Feedback**: Brief scale-down animation on click provides tactile feedback.
- **Selection Animation**: Subtle pulse animation when a star is selected.
- **Half-Star Support**: Display half-star ratings for more granular scoring (e.g., 4.5 stars).
- **Read-only Mode**: Display ratings without interactivity for product reviews and testimonials.
- **Multiple Sizes**: Includes small, default, and large size variants.
- **Fully Accessible**: Uses native radio inputs with proper labels, keyboard navigation, and `:focus-visible` states.
- **Theming Ready**: Leverages `--ease-color-*` CSS variables for seamless integration with the core design token system.
- **Reduced Motion Support**: Gracefully disables animations for users with `prefers-reduced-motion` enabled.
- **Dark Mode Support**: Automatically adapts to dark mode using `prefers-color-scheme`.

## Files Included
- `demo.html`: Interactive showcase with multiple rating variants and a live value display.
- `style.css`: Clean, production-ready CSS with smooth animations.

## How to Test
1. Ensure you are in the `submissions/examples/ease-star-rating-<your-initials>` directory.
2. Open `demo.html` in any modern web browser.
3. Hover over the stars to see the smooth scale and color transitions.
4. Click a star to select it and observe the pulse animation.
5. Use `Tab` and arrow keys to verify keyboard accessibility.
6. Check the read-only variant to see half-star support.

## Usage Example
```html
<!-- Basic Interactive Rating -->
<div class="ease-rating">
  <input type="radio" id="star5" name="rating" value="5" />
  <label for="star5" title="5 stars">★</label>
  <input type="radio" id="star4" name="rating" value="4" />
  <label for="star4" title="4 stars">★</label>
  <!-- ... more stars ... -->
</div>

<!-- Read-only Display with Half Star -->
<div class="ease-rating ease-rating--readonly">
  <span class="ease-rating__star ease-rating__star--full">★</span>
  <span class="ease-rating__star ease-rating__star--full">★</span>
  <span class="ease-rating__star ease-rating__star--full">★</span>
  <span class="ease-rating__star ease-rating__star--full">★</span>
  <span class="ease-rating__star ease-rating__star--half">★</span>
</div>

<!-- Large Size Variant -->
<div class="ease-rating ease-rating--large">
  <!-- ... stars ... -->
</div>