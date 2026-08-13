# Text Wipe Gradient Reveal

A text hover interaction where a vibrant gradient color sweeps across the text from left to right on hover.

## How to use

1. Include the styles in your CSS:
   ```css
   @import "style.css";
   ```

2. Add the markup to your HTML:
   ```html
   <h1 class="wipe-text">Interactive Reveal</h1>
   ```

## Design Details
- **Double Mask Size:** Leverages a `background-size: 200% 100%` background map so the colored half and grey half can slide cleanly.
- **Ease Transition:** Sweeps the background position over `0.6s` using a customized cubic bezier curve to give a premium inertia drag feeling.
