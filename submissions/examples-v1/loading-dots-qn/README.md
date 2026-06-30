# Animated Loading Dots

## Description
A classic, elegant loading indicator featuring three dots that bounce and fade in a smooth, staggered sequence. This creates a visually pleasing loading animation that's perfect for buttons, modals, or any loading state. Built entirely with pure CSS using `@keyframes` and `animation-delay`, requiring absolutely zero JavaScript.

## Files
- `demo.html`: Contains the HTML structure with three dot elements and optional loading text.
- `style.css`: Contains the dot styling, the bounce/fade keyframe animation, and the staggered delays.

## How to use
1. Open `demo.html` in your browser to see the smooth bouncing animation.
2. Copy the HTML and CSS into your project.
3. Wrap three `<span class="dot-qn">` elements inside a `.loading-dots-qn` container.
4. **Customization:**
   - **Dot Color:** Change the `background-color` in `.dot-qn` to match your brand or theme.
   - **Dot Size:** Adjust the `width` and `height` in `.dot-qn` to make the dots larger or smaller.
   - **Spacing:** Modify the `gap` in `.loading-dots-qn` to increase or decrease the space between dots.
   - **Animation Speed:** Change the `1.4s` duration in the `animation` property to make the bouncing faster or slower.
   - **Bounce Intensity:** Adjust the `scale(1.2)` value in the `40%` keyframe to make the bounce more or less pronounced.
   - **Number of Dots:** You can easily add or remove dots. Just add more `<span class="dot-qn">` elements and adjust the `animation-delay` values to maintain the staggered effect.