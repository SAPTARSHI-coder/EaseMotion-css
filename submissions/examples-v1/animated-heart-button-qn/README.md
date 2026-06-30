# Animated Heart / Like Button

## Description

A highly interactive, pure CSS "Like" button featuring a satisfying bouncy pop effect and a radial burst of particles when clicked. It uses the "checkbox hack" to toggle between the unliked (gray) and liked (red) states, requiring absolutely zero JavaScript.

## Files

- `demo.html`: Contains the HTML structure using a hidden checkbox, an SVG heart, and 6 particle elements.
- `style.css`: Contains the styling, the bouncy pop keyframes, and the 6 directional particle burst keyframes.

## How to use

1. Open `demo.html` in your browser and click the heart to see the pop and particle burst effect.
2. Copy the HTML and CSS into your project.
3. Wrap the SVG and particles in a `.heart-icon-qn` div, and wrap that in a `.heart-label-qn` label along with the hidden checkbox.
4. **Customization:**
   - **Colors:** Change the unliked color by modifying the `fill` in `.heart-icon-qn svg`. Change the liked color and particle color by modifying `#e74c3c`.
   - **Size:** Adjust the `width` and `height` in `.heart-icon-qn` to make the button larger or smaller.
   - **Animation Speed:** Tweak the durations in the `animation` properties for the heart pop and particle bursts.
