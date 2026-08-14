# Text Shimmer Reveal Animation

A premium text animation that sweeps a linear gradient across text elements to create a continuous glowing shine.

## How to use

1. Include the styles in your CSS:
   ```css
   @import "style.css";
   ```

2. Add the markup to your HTML:
   ```html
   <h1 class="shimmer-text">Text Shimmer Reveal</h1>
   ```

## Design Details
- **Dynamic Masking:** Leverages `background-clip: text` to constrain the animated gradient map only to the characters of the font.
- **Loop Timing:** Animated continuously via a linear infinite transition loop (`animation: shine 3s linear infinite`).
