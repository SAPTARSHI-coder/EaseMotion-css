# Animated Image Overlay Card

## Description
A modern, interactive image card featuring a smooth hover overlay. When the user hovers over the card, the background image subtly zooms in, and a dark gradient overlay slides up from the bottom. The title, description, and call-to-action button then reveal themselves with a smooth, staggered cascading animation. Built entirely with pure CSS, requiring absolutely zero JavaScript.

## Files
- `demo.html`: Contains the HTML structure for the image and the overlay content.
- `style.css`: Contains the layout, the image zoom transition, the overlay slide-up effect, and the staggered content reveal animations.

## How to use
1. Open `demo.html` in your browser and hover over the card to see the smooth overlay and cascading text effects.
2. Copy the HTML and CSS into your project.
3. Wrap your image and overlay content inside a `.card-container-qn` div.
4. **Customization:**
   - **Image Zoom:** Adjust the `transform: scale(1.1)` in `.card-container-qn:hover .card-image-qn` to make the zoom more or less intense.
   - **Overlay Gradient:** Change the `rgba` values in the `background` of `.card-overlay-qn` to make the overlay darker, lighter, or a different color.
   - **Animation Speed:** Modify the `0.4s` transition durations to make the reveal faster or slower.
   - **Stagger Delay:** Adjust the `transition-delay` values on the title, text, and button to change the cascading timing.