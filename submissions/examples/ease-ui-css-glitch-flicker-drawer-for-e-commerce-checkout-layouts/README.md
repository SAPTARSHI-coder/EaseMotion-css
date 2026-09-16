# CSS Glitch-Flicker Drawer for E-Commerce Checkout Layouts

1. **What does this do?** 
   A high-intensity, pure CSS side-drawer designed for Cyberpunk or futuristic e-commerce layouts. Instead of a smooth slide, this drawer uses complex `@keyframes` to literally "glitch" into view, complete with stuttering X-translations and rapid RGB-split (cyan and magenta) `clip-path` artifacts flashing across the screen.

2. **How is it used?** 
   Include the `demo.html` structure and link the `style.css`. It perfectly implements the "Checkbox Hack" to handle state, avoiding JavaScript entirely. When `#cart-toggle` is checked, the CSS `animation: drawer-glitch-enter` fires alongside pseudo-layer glitch animations. 

3. **Why is it useful?** 
   It demonstrates the extreme power of CSS keyframes and `clip-path`. Traditionally, glitch effects require heavy WebGL or Canvas JS libraries. By recreating RGB-split stutters purely in CSS, you provide a stunning, state-of-the-art aesthetic that is lightweight, instantly loads, and naturally respects the `@media (prefers-reduced-motion: reduce)` accessibility query.
