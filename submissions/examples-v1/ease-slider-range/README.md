# Animated Range Slider (`ease-slider-range`)

A custom-styled `<input type="range">` featuring a smooth, animated value bubble that perfectly tracks the thumb. Built for the EaseMotion-css framework.

## 🚀 Features

- **Perfect Tracking Math**: Native range thumbs don't perfectly align with simple percentage widths. The bubble uses a specialized `calc()` formula that accounts for the thumb's exact 20px dimensions, ensuring the bubble never drifts off-center at the extreme 0% and 100% edges.
- **Bouncy Pop Animation**: The value bubble smoothly fades and scales into view when the user hovers, focuses, or clicks the slider.
- **Interactive Thumb**: The thumb utilizes a `cubic-bezier` timing function to slightly enlarge when actively grabbed, providing excellent tactile feedback.
- **Cross-Browser Compatibility**: Includes both `::-webkit-slider-thumb` and `::-moz-range-thumb` pseudo-selectors for wide support.

## 🛠️ Usage

Wrap the native range input and the value bubble inside a `.ease-slider-wrapper` container. **Important:** The `.ease-slider-bubble` must be placed *after* the input so it can be targeted with CSS sibling selectors.

```html
<div class="ease-slider-wrapper">
  <input type="range" class="ease-slider-range" id="my-slider" min="0" max="100" />
  <div class="ease-slider-bubble" id="my-bubble">50</div>
</div>
