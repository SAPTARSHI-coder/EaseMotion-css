# CSS Blur-Entrance Drawer for E-Commerce Checkout Layouts

1. **What does this do?** 
   A sleek, modern pure CSS side-drawer designed for premium tech/electronics e-commerce layouts. When triggered, the drawer slides in while dynamically animating its `filter: blur()` property from highly blurred to sharp, while simultaneously blurring the main page content behind it. It heavily utilizes glassmorphism (`backdrop-filter`) for an "Apple-esque" aesthetic.

2. **How is it used?** 
   Copy the `demo.html` structure into your project and link the `style.css`. It perfectly utilizes the native HTML "Checkbox Hack" to handle state, meaning you don't need any JavaScript to open or close the drawer. When the hidden `#cart-toggle` is checked, the CSS `filter: blur(0px)` fires, pulling the drawer sharply into focus while pushing the background out of focus.

3. **Why is it useful?** 
   It demonstrates how to create highly polished, cinematic micro-interactions using modern CSS filter properties. By keeping complex animations out of the JavaScript thread, you maintain a silky 60fps experience while ensuring the component naturally respects the `@media (prefers-reduced-motion: reduce)` accessibility query by falling back to a clean 2D slide without the jarring blur effect.
