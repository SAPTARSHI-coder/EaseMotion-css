# CSS Zoom-In Drawer for E-Commerce Checkout Layouts

1. **What does this do?** 
   A high-energy, pure CSS side-drawer designed for streetwear or vibrant e-commerce layouts. When triggered, the drawer scales up (zooms in) from `0.85` to `1` anchored to the top-right corner, while the main background page inversely scales down (`0.95`) to create a dramatic, popping depth effect.

2. **How is it used?** 
   Copy the `demo.html` structure into your project and link the `style.css`. It perfectly utilizes the native HTML "Checkbox Hack" to handle state, meaning you don't need any JavaScript to open or close the drawer. When the hidden `#cart-toggle` is checked, the CSS `transform: scale(1)` fires on the `.drawer`, paired with a custom `cubic-bezier` that provides a slight, satisfying overshoot bounce.

3. **Why is it useful?** 
   It demonstrates how to create aggressive, high-contrast micro-interactions utilizing pure CSS transforms. By keeping complex animations out of the JavaScript thread, you maintain a silky 60fps experience while ensuring the component naturally respects the `@media (prefers-reduced-motion: reduce)` accessibility query by falling back to a standard non-scaling slide.
