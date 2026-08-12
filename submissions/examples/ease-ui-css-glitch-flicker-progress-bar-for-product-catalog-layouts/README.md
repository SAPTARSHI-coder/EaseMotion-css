# CSS Glitch-Flicker Progress Bar for Product Catalog Layouts

1. **What does this do?** 
   A high-intensity, pure CSS progress bar and catalog reveal sequence designed for Cyberpunk or futuristic e-commerce layouts. When the user initiates a load, the progress bar erratically fills up, occasionally stalling and glitching backward. Once it hits 100%, the progress bar vanishes, and a grid of products pops into view sequentially.

2. **How is it used?** 
   Include the `demo.html` structure and link the `style.css`. It implements the "Checkbox Hack" to handle the loading state, avoiding JavaScript entirely. When `#load-catalog` is checked, a sequence of CSS `@keyframes` fires. The `.progress-fill` animates its width with erratic stalls, while the `.progress-percent::after` utilizes the `content` property in its keyframes to simulate a number counting up from 0% to 100%.

3. **Why is it useful?** 
   It demonstrates how to create complex, multi-stage loading sequences and simulated data fetching entirely through CSS keyframes and animation delays. Traditionally, faking a loading bar or staggering product entrances requires `setTimeout` or JavaScript animation libraries. By recreating these stutters and RGB-split effects purely in CSS, you provide a stunning aesthetic that is lightweight, instantly loads, and naturally respects the `@media (prefers-reduced-motion: reduce)` accessibility query by skipping the load animation entirely.
