# 3D Flip Card

## Description
A smooth, interactive 3D flip card component. When the user hovers over the card, it flips 180 degrees along the Y-axis to reveal the back face. This is achieved entirely using CSS 3D transforms (`perspective`, `transform-style: preserve-3d`, and `backface-visibility`) and requires zero JavaScript.

## Files
- `demo.html`: Contains the HTML structure for the scene, card, and both front/back faces.
- `style.css`: Contains the 3D perspective setup, transform animations, and styling for both sides of the card.

## How to use
1. Open `demo.html` in your browser and hover over the card to see the 3D flip effect.
2. Copy the HTML and CSS into your project.
3. Wrap your card content in a `.scene-qn` container, and place a `.card-qn` inside it.
4. Add your front content inside `.card-front-qn` and back content inside `.card-back-qn`.
5. **Customization:**
   - Change the gradient colors for both faces in the `background` properties.
   - Adjust the flip speed by changing the `0.8s` transition duration in `.card-qn`.
   - Change the flip direction by modifying `rotateY(180deg)` to `rotateX(180deg)` in the hover state (and adjust the back face pre-rotation accordingly).